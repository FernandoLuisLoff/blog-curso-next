'use client';

import { deletePostAction } from "@/actions/delete-post";
import { Dialog } from "@/components/Dialog";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showDialog, setShowDialog] = useState(false);

    function handleClick() {
        setShowDialog(true);
    }
    function handleCancel() {
        setShowDialog(false);
    }
    async function handleConfirm() {
        toast.dismiss();
        startTransition(async () => {
            const result = await deletePostAction(id);
            setShowDialog(false);
            if (result.error) {
                toast.error(result.error);
                return;
            }
            toast.success('Post excluído com sucesso');
        });
    }
    return (
        <>
            <button
                className={clsx(
                    'text-red-500 cursor-pointer',
                    '[&_svg]:w-4 [&_svg]:h-4',
                    'hover:scale-120 hover:text-red-700',
                    'transition-transform',
                    'disabled:text-slate-600 disabled:cursor-not-allowed'
                )}
                aria-label={`Apagar post: ${title}`}
                title={`Apagar post: ${title}`}
                onClick={handleClick}
                disabled={isPending}
            >
                <Trash2Icon />
            </button>
            <Dialog
                isVisible={showDialog}
                title="Confirmar exclusão"
                content={`Tem certeza que deseja excluir o post "${title}"?`}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                disabled={isPending}
            />
        </>
    );
}