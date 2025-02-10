import { PostContent } from "app/components/postContent";
import { getPosts } from "app/utils/utils";

export default function Page({ params }: {params: {slug: string}}) {
    const { slug } = params;
    let workPost = getPosts("workExperience")
        .find(post =>
            post.metadata.company === slug);
    
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Experience at {slug}
            </h1>
            {workPost ? (
                <PostContent workPost={workPost} />
            ) : (
                <p>Post not found</p>
            )}
        </div>
    );
}