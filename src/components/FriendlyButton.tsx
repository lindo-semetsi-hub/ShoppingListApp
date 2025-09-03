import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    friendly?: boolean;
    small?: boolean;
};

export default function FriendlyButton ({ friendly = true, small = false, children, ...rest }: Props) {
    const base = 'rounded-md font-medium focus:outline-none focus:ring-offset-1';
    const size =small ? 'px-3 py-1 text-sm' : 'px-4 px-2' ;
    const style = friendly
    ? 'bg-indigo-600 text-white hover:bg-indigo-700 active: scale-[0.995] shadow-sm'
    : 'bg-slate-100 text-slate-800 hover:bg-slate-200';
    return (
        <button className={`${base} ${size} ${style}`} {...rest}>
            {children}
        </button>
    );
}