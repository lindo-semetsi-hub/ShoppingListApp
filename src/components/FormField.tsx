import React from 'react';

type Props = {
    id: string;
    label: string;
    hint?: string;
    error?: string | null;
    type?: string;
} & React.InputHTML.Attributes<HTMLInputElement>;

export default function FormField({ id, label, hint, error, type = 'text', ...rest }: Props) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-semibold mb-1">
            </label>
            <input
            id={id}
            type={type}
            {...rest}
            className={`w-full rounded px-3 py-2 border ${error ? 'border-rose-500' : 'border-slate-200'} focus:ring-2 focus:ring-offset-1`}
            aria-invalid={!!error}
            aria-describedby={hint ? `${id}-hint` : undefined} />
            {hint && !error && <p id={`${id}-hint`} className="mt text-xs tect-slate-500">{hint}</p>}
            {error && <p role="alert" className="mt-1 text-xs text-rose-600">{error}</p>}
        </div>
    );
    
}