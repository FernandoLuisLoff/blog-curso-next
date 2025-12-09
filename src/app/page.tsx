import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>

      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">

        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            src: "/imagens/bryen_0.png",
            width: 1200,
            height: 720,
            alt: "Título do post",
            priority: true
          }}
        />

        <div className="flex flex-col gap-4">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>

          <PostHeading url="#" as="h1">
            Título do post
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam dicta odit laudantium praesentium, quos ratione qui odio exercitationem in dolore fuga cumque recusandae voluptatem, harum accusantium error quasi ducimus.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">
          Aqui é o FOOTER
        </p>
      </footer>
    </Container>
  );
}