import clsx from "clsx";

type DialogProps = {
    isVisible?: boolean;
    title?: string;
    content?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    cancelLabel?: string;
    confirmLabel?: string;
    disabled?: boolean;
};

export function Dialog({
    isVisible = false,
    title,
    content,
    onCancel,
    onConfirm,
    cancelLabel = 'Cancelar',
    confirmLabel = 'OK',
    disabled = false
}: DialogProps) {
    if (!isVisible) return null;

    function handleCancel() {
        if (disabled) return;
        if (onCancel) onCancel();
    }

    return (
        <div
            className={clsx(
                'flex items-center justify-center',
                'fixed inset-0 z-50',
                'bg-black/50 backdrop-blur-xs'
            )}
            onClick={handleCancel}
        >
            <div
                className={clsx(
                    'flex flex-col gap-6',
                    'bg-slate-100',
                    'p-6 m-6 max-w-2xl',
                    'shadow-lg shadow-black/30',
                    'text-center',
                    'rounded-lg'
                )}
                role='dialog'
                aria-modal={true}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
                onClick={e => e.stopPropagation()}
            >
                <h3 id='dialog-title' className='text-xl font-extrabold'>{title}</h3>
                <div id='dialog-description'>{content}</div>
                <div className='flex justify-around gap-4'>
                    <button
                        className={clsx(
                            'flex items-center justify-center py-2 px-4 rounded-lg',
                            'bg-slate-200 hover:bg-slate-300 text-slate-950',
                            'disabled:bg-slate-200 disabled:text-slate-400',
                            'cursor-pointer',
                            'transition'
                        )}
                        onClick={handleCancel}
                        disabled={disabled}
                        autoFocus
                    >
                        {cancelLabel}
                    </button>
                    <button className={clsx(
                        'flex items-center justify-center py-2 px-4 rounded-lg',
                        'bg-blue-500 hover:bg-blue-600 text-blue-50',
                        'disabled:bg-slate-200 disabled:text-slate-400',
                        'cursor-pointer',
                        'transition'
                    )}
                        onClick={onConfirm}
                        disabled={disabled}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}