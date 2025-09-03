import React from 'react';
import { Routes, Route, Navigate, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { JSX } from 'react';

function ProtectedRoute ({children }: { children: JSX.Element }) {
  const user = useSelector((s: RootState) => s.auth.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auton px-4 py-3 flex justify-between items-center">
    <Link to="/" className="font-semibold text-lg">ShoppingList</Link>
    <nav className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
    </nav>
    </div>
      </header>

      <main classname="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
          <Route path="/register" element={<AuthRoute><RegisterPage /></AuthRoute>} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      </div>
  );
}

