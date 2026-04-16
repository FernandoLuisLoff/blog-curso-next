'use server';

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-message";

type CreatePostActionState = {
    formState: PublicPost;
    errors: string[];
}

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {

    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ['Dados do formulário inválidos.']
        }
    }

    const formDataToObj = Object.fromEntries(formData.entries());
    const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

    if (!zodParsedObj.success) {
        const erros = getZodErrorMessages(zodParsedObj.error);
        return {
            formState: makePartialPublicPost(formDataToObj),
            errors: erros
        }
    }

    const validPostData = zodParsedObj.data;
    const newPost: PostModel = {
        ...validPostData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(),
        slug: Math.random().toString(36),
    }
    
    return {
        formState: newPost,
        errors: []
    }
}