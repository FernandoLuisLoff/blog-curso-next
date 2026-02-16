import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function PostsList() {
    const posts = await findAllPublicPostsCached();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {posts.slice(1).map(post => {
                const postLink = `/post/${post.slug}`;
                return (
                    <div className="flex flex-col gap-4 group" key={post.id}>
                        <PostCoverImage
                            linkProps={{ href: postLink }}
                            imageProps={{
                                src: post.coverImageUrl,
                                width: 1200,
                                height: 720,
                                alt: post.title,
                            }}
                        />
                        <PostSummary
                            postHeading="h2"
                            postLink={postLink}
                            createdAt={post.createdAt}
                            title={post.title}
                            excerpt={post.excerpt}
                        />
                    </div>
                )
            })}
        </div>
    );
}