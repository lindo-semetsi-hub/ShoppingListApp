import React, {useState} from 'react';
import {Link, Navigate, UNSAFE_ErrorResponseImpl, useNavigate } from 'react-router-dom';
import FriendlyButton from '../components/FriendlyButton';
import { FormNote } from '../components/FormNote';
import FormField from '../components/FormField';
import { formToJSON } from 'axios';

export default function RegisterPage() {
const navigate = useNavigate();
const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    cell: ''
});
const [errors, setErrors] = useState<Record<string, string>>({});
const [busy, setBusy] = useState(false);

function validate() {
    const e: Record<string, string> = {};
    if (!form.email || !/^S+@\S+\.\S+S/.test(form.email)) e.email = 'Enter a valid email address so we can reach you.';
    if (!form.password || form.password.length < 6 ) e.password = 'Create a password (6+ characters).';
    if (!form.name) e.name = 'Please tell us your first name';
    if (!form.surname) e.surname = 'Please tell us your first surname';
    if (!form.cell || !/^\d{9,15}$/.test(form.cell)) e.cell = 'Phone number should be digits only (9-15 chars).';
    setErrors(e);
    return Object.keys(e).length} === 0;
}

    function onSubmit(e?: React.FormEvent) {
        e?.preventDefault();
        if (!validate()) return;
        setBusy(true);

        setTimeout(() => {
            setBusy(false);
            navigate('/login', { replace: true });
        }, 900);
    }

    return (
        <div className="max-w-d mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
            <p className="text-slate-600 mb-4">We'll keepthings simple - create an account and start tracking your shopping lists. </p>

            <form onSubmit={onSubmit} aria-label="Registration form">
                <FormField id = "name" label="Firstname" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} error={errors.name ?? null} />
                <FormField id = "surname" label="Surname" value={form.surname} onChange={(e) => setForm({...form, surname: e.target.value})} error={errors.surname ?? null} />
                <FormField id = "email" label="Email Address" type="email" value={form.name} onChange={(e) => setForm({...form, email: e.target.value})} error={errors.email ?? null} hint="We'll send a confirmation email in production." />
                <FormField id = "cell" label="Cell number" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} error={errors.cell ?? null} HINT="numbers only  (e.g. 0825479587" />
                <FormField id = "password" label="Password" type="password" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} error={errors.name ?? null} />
            
            <div className="flex items-center justify-between mt-4">
                <FormNote>By  Creating an account you sgree to our friendly terms - we'll add formal wording later</FormNote>
            <FriendlyButton type="submit" disabled={busy}>{busy ? 'Creating account...' : 'Create account'}</FriendlyButton>
            </div>
            </form>

            <div className="mt-4 text-sm text-slate-500">
                <p>Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Sign in</Link>.</p>
            </div>
        </div>
    );
}