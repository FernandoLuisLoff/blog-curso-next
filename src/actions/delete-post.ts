'use server';

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";

export async function deletePostAction(id: string) {
    // TODO: checar login do usuário

    if (!id || typeof id !== 'string') {
        return { error: 'Dados inválidos' }
    }

    const post = await postRepository.findById(id).catch(() => undefined);

    if (!post) {
        return { error: 'Post não existe' }
    }

    // TODO: mover para repositorio
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    // TODO: revalidateTag e revalidatePath
    updateTag('posts');
    updateTag(`post-${post.slug}`);
    
    return { error: '' };
}