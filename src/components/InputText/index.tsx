import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
    labelText?: string;
} & React.ComponentProps<'input'>;

export function InputText({ labelText, ...props }: InputTextProps) {
    const id = useId();
    return (
        <div className="flex flex-col gap-2">
            {labelText && 
                <label htmlFor={id}>
                    {labelText}
                </label>
            }
            <input
                {...props} 
                className={clsx(
                    'bg-white outline-0',
                    'ring-2 ring-slate-400',
                    'text-base/tight p-2 rounded',
                    'placeholder-slate-300',
                    'focus:ring-blue-600',
                    'disabled:bg-slate-200',
                    'disabled:text-slate-400',
                    'disabled:placeholder-slate-400',
                    'read-only:bg-slate-200',
                    'transition',
                    props.className
                )}
                id={id}
            />
        </div>
    )
}