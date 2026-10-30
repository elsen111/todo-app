import clsx from 'clsx';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const formValid = emailRegex.test(email) && password;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            className="peer focus:border-primary w-full rounded-2xl border border-gray-300 bg-transparent py-4 pr-4 pl-26 text-[1.6rem] transition-all duration-200 outline-none focus:ring-2 focus:ring-green-100"
          />

          <button
            onClick={() => setPasswordVisible((value) => !value)}
            className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {passwordVisible ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={!formValid}
          className={clsx(
            'bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-xl py-3 text-[1.6rem] font-semibold text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50',
            formValid ? 'pointer-events-auto' : 'pointer-events-none',
          )}
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
