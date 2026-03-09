import clsx from "clsx";
import { FileTextIcon, HouseIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
    const navClasses = clsx(
        'flex flex-col mb-8',
        'bg-slate-900 text-slate-100',
        'sm:flex-row sm:flex-wrap',
        'rounded-lg'
    );
    const linkClasses = clsx(
        'flex items-center justify-start', 
        '[&>svg]:w-4 [&>svg]:h-4',
        'hover:bg-slate-800 transition',
        'h-10 px-4 gap-2',
        'shrink-0 rounded-lg'
    );
    return (
        <nav className={navClasses}>
            <a className={linkClasses} href='/' target='_blank'>
                <HouseIcon />
                Home
            </a>
            <Link className={linkClasses} href='/admin/post'>
                <FileTextIcon />
                Posts
            </Link>
        </nav>
    )
}