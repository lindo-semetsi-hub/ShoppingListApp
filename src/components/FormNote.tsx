import React from 'react';

export function FormNote({ children }: { children: React.ReactNode}) {
    return <p className="text-sm text-slate-500 mb-4">{children}</p>;
}