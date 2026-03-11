'use client';

import clsx from "clsx";
import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    const navClasses = clsx(
        'flex flex-col mb-8',
        'bg-slate-900 text-slate-100',
        'sm:flex-row sm:flex-wrap',
        !isOpen && 'h-10 overflow-hidden',
        'sm:overflow-auto sm:h-auto',
        'rounded-lg'
    );
    const linkClasses = clsx(
        'flex items-center justify-start', 
        '[&>svg]:w-4 [&>svg]:h-4',
        'hover:bg-slate-800 transition',
        'h-10 px-4 gap-2',
        'shrink-0 rounded-lg',
    );
    const openCloseBtnClasses = clsx(
        linkClasses,
        'text-blue-200',
        'italic'

    );
    return (
        <nav className={navClasses}>
            <button
                className={openCloseBtnClasses}
                onClick={() => setIsOpen(s => !s)}
            >
                {!isOpen && (
                    <>
                        <MenuIcon />
                        Menu
                    </>
                )}
                {isOpen && (
                    <>
                        <CircleXIcon />
                        Fechar
                    </>
                )}
            </button>
            <a className={linkClasses} href='/' target='_blank'>
                <HouseIcon />
                Home
            </a>
            <Link className={linkClasses} href='/admin/post'>
                <FileTextIcon />
                Posts
            </Link>
            <Link className={linkClasses} href='/admin/post/new'>
                <PlusIcon />
                Criar post
            </Link>
        </nav>
    )
}