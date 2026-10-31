import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toast-kit';
import clsx from 'clsx';

import ValidationItem from '../../common/ui/ValidationItem';
import { useAuth } from '../../../context/AuthContext';
import { getErrorMessage } from '../../../utils/getErrorMessage';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const normalizedFullName = fullName.trim();
  const normalizedEmail = email.trim();

  const fullNameValid =
    normalizedFullName.length > 0 && normalizedFullName.length <= 100;

  const emailValid =
    normalizedEmail.length >= 11 &&
    normalizedEmail.length <= 255 &&
    EMAIL_REGEX.test(normalizedEmail);

  const passwordValidations = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passwordValid = Object.values(passwordValidations).every(Boolean);

  const formValid = fullNameValid && emailValid && passwordValid;

  const clearError = () => {
    if (error) setError('');
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    clearError();
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearError();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    clearError();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid || isSubmitting) return;

    setError('');
    setIsSubmitting(true);

    try {
      await register({
        fullName: normalizedFullName,
        email: normalizedEmail,
        password,
      });

      toast({
        description: 'Registered successfully!',
        variant: 'success',
        duration: 2000,
        position: 'top-center',
      });

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
        <div className="relative">
          <User
            size={20}
            aria-hidden="true"
            className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
          />

          <label
            htmlFor="fullName"
            className="sr-only"
          >
            Full name
          </label>

          <input
            type="text"
            name="fullName"
            id="fullName"
            autoComplete="name"
            value={fullName}
            placeholder="Full name"
            maxLength={100}
            required
            onChange={handleFullNameChange}
            className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Mail
              size={20}
              aria-hidden="true"
              className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
            />

            <label
              htmlFor="email"
              className="sr-only"
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              placeholder="Email"
              maxLength={255}
              required
              onChange={handleEmailChange}
              className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="space-y-1 px-2">
            <ValidationItem
              valid={normalizedEmail.length >= 11}
              label="At least 11 characters"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Lock
              size={20}
              aria-hidden="true"
              className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400"
            />

            <label
              htmlFor="password"
              className="sr-only"
            >
              Password
            </label>

            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              autoComplete="new-password"
              value={password}
              placeholder="Password"
              required
              onChange={handlePasswordChange}
              className="focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-16 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
            />

            <button
              type="button"
              onClick={() => setPasswordVisible((prev) => !prev)}
              aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              aria-pressed={passwordVisible}
              className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {passwordVisible ? (
                <Eye
                  size={20}
                  aria-hidden="true"
                />
              ) : (
                <EyeClosed
                  size={20}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          <div className="space-y-1 px-2">
            <ValidationItem
              valid={passwordValid}
              label="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
            />
          </div>
        </div>

        <p
          id="register-error"
          role="alert"
          aria-live="polite"
          className={clsx(
            'min-h-5 text-[1.4rem] font-medium text-red-500 transition-opacity duration-200',
            error ? 'opacity-100' : 'opacity-0',
          )}
        >
          {error || '\u00A0'}
        </p>

        <button
          type="submit"
          disabled={!formValid || isSubmitting}
          className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xl py-3 text-[1.6rem] font-semibold text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <ClipLoader
              color="#ffffff"
              size={20}
              speedMultiplier={0.8}
              aria-label="Registering"
              cssOverride={{ borderWidth: '3px' }}
            />
          ) : (
            'Register'
          )}
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
