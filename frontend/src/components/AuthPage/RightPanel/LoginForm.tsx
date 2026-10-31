import clsx from 'clsx';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getErrorMessage } from '../../../utils/getErrorMessage';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const formValid = emailRegex.test(email) && password.length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid || isSubmitting) return;

    setError('');
    setIsSubmitting(true);

    try {
      await login({ email, password });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, 'Login failed.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-200">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="relative">
          <Mail
            size={20}
            className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="peer focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="relative">
          <Lock
            size={20}
            className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
          />

          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="peer focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-16 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
          />

          <button
            type="button"
            onClick={() => setPasswordVisible((value) => !value)}
            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
            className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {passwordVisible ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={!formValid || isSubmitting}
          className={clsx(
            'bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-xl py-3 text-[1.6rem] font-semibold text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50',
            formValid && !isSubmitting
              ? 'pointer-events-auto'
              : 'pointer-events-none',
          )}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
