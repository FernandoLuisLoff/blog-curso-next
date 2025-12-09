import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
    children: React.ReactNode;
    url: string;
    as?: "h1" | "h2";
};

export function PostHeading({
    children,
    url,
    as: Tag = "h2"
}: PostHeadingProps) {
    const headingClassMap = {
        h1: "text-sm/tight sm:text-4xl",
        h2: "text-sm/tight sm:text-4xl",
    }

    const commonClasses = "font-extrabold";

    return (
        <Tag className={clsx(headingClassMap[Tag], commonClasses)}>
            <Link href={url}>{children}</Link>
        </Tag>
    );
}