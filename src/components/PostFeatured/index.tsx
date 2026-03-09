import { PostCoverImage } from "@/components/PostCoverImage";
import { PostSummary } from "@/components/PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import ErrorMessage from "../ErrorMessage";

export async function PostFeatured() {
    const posts = await findAllPublicPostsCached();

    if (posts.length <= 0){
        return (
            <ErrorMessage
                contentTitle='Ops 😅'
                content='Ainda não criamos nenhum post.'
            />
        );
    }

    const post = posts[0];
    
    const postLink = `/post/${post.slug}`;
    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
                linkProps={{ href: postLink }}
                imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: true
                }}
            />
            <PostSummary
                postHeading="h1"
                postLink={postLink}
                createdAt={post.createdAt}
                title={post.title}
                excerpt={post.excerpt}
            />
        </section>
    )
}