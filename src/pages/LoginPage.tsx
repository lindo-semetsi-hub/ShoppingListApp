import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Form from '../components/FormField';
import FriendlyButton from '../components/FriendlyButton';
import { FormNote } from '../components/FormNote';
import FormField from '../components/FormField';


export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: String; password?: string }>({});
    const [busy, setBusy] = useState(false);

    function validate() {
        const e: typeof errors = {};
        if (!email) e.email = 'Please enter your email - we need it to find you.';
        else if (!/^\S+@\S+\.\S+S/.test(email)) e.email = 'That email does not look right. try again?';
        if (!password) e.password ='please type your password.';
        setErrors(e);
        return Object.keys(e).length === 0;
    }
    function onsubmit(ev?: React.FormEvent) {
        ev?.preventDefault();
        if (!validate()) return;
        setBusy(true);

        setTimeout(() => {
            setBusy(false);

            navigate('/', {replace: true });
        
        }, 700);
    }
        return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
        <p className="text-slate-600 mb-4">Sign in to access your shopping lists. If this is your first time, you can <Link to="/register" className="text-indigo-600 hover:underline">create an account</Link>.</p> 

        <form onSubmit={onSubmit} aria-label="Login form">
            <FormField
            id="email"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hint="We'll never share your email. Rest assured."
            error={errors.email ?? null}
            />

            <FormField
            id = "password"
            label = "Password"
            type ="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password ?? null}
            />

            <div className="flex items-center justify-between mb-4">
                <FormNote>Forgotten password? We'll add a reset link in the nexr step.</FormNote>
                <FriendlyButton type="submit" disabled={busy}>
                    {busy ? 'Signing you in...' : 'Sign in'}
                    </FriendlyButton></div>

        </form>
        <div className="mt-4 text-sm text-slate-500">
            <p>this project uses a local JSON server for data - nothing leaves you machine in development</p>

        </div>
        </div>
    );
}