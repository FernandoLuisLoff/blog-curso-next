import { PostFeatured } from "@/components/Container/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}