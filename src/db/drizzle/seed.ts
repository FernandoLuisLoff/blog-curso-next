import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAll();
    try {
        await drizzleDb.delete(postsTable);
        await drizzleDb.insert(postsTable).values(posts);
        console.log(`\n${posts.length} posts inseridos com sucesso!\n`);
    } catch (error) {
        console.error("\nOcorreu um erro...");
        console.error("\n", error);
    }
})();