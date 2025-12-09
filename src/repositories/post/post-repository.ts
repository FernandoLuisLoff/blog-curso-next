import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
    // create(post: PostModel): Promise<void>;
    // update(post: PostModel): Promise<void>;
    // delete(id: string): Promise<void>;
}