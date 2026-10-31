import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import ValidationItem from '../../common/ui/ValidationItem';
import { useAuth } from '../../../context/AuthContext';
import { getErrorMessage } from '../../../utils/getErrorMessage';

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const emailValid =
    email.length >= 11 &&
    email.length <= 255 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const fullNameValid = fullName.length <= 100;

  const passwordValidations = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passwordValid = Object.values(passwordValidations).every(Boolean);

  const formValid = emailValid && fullNameValid && passwordValid;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid || isSubmitting) return;

    setError('');
    setIsSubmitting(true);

    try {
      await register({ fullName, email, password });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, 'Registration failed.'));
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
        <div className="space-y-2">
          <div className="relative">
            <User
              size={20}
              className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              placeholder="Full name"
              maxLength={100}
              onChange={(e) => setFullName(e.target.value)}
              className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
            />
          </div>
        </div>

        <div className="space-y-2">
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
              maxLength={255}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="space-y-1 px-2">
            <ValidationItem
              valid={email.length >= 11}
              label="At least 11 characters"
            />
          </div>
        </div>

        <div className="space-y-2">
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
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-16 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
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

          <div className="space-y-1 px-2">
            <ValidationItem
              valid={passwordValid}
              label="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
            />
          </div>
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
          {isSubmitting ? 'Signing up...' : 'Register'}
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
