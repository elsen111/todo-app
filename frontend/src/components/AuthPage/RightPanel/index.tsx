import { useState } from 'react';
import { authFormHeaderData } from '../../../content/site.content';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const RightPanel = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <section className="flex flex-1 flex-col items-center justify-start gap-10 bg-transparent px-8 pt-30 sm:justify-center sm:gap-15 sm:pt-10 md:bg-white">
      <header className="max-w-auto sm:max-w-200">
        <h6 className="text-primary mb-5 text-[2.2rem] font-bold sm:text-[2rem] md:text-[3.2rem]">
          {authFormHeaderData.heading}
        </h6>
        <p className="text-secondary text-[1.2rem] font-medium md:text-[1.8rem]">
          {authFormHeaderData.description}
        </p>
      </header>

      <div className="text-primary max-w-auto flex w-full justify-between rounded-2xl border border-gray-300 text-2xl font-bold sm:max-w-200">
        <button
          onClick={() => setIsLogin(true)}
          className="hover:bg-primary/20 flex-1 cursor-pointer rounded-2xl px-3 py-3 transition-all duration-300 active:scale-102"
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className="hover:bg-primary/20 flex-1 cursor-pointer rounded-2xl px-3 py-3 transition-all duration-300 active:scale-102"
        >
          Register
        </button>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}
    </section>
  );
};

export default RightPanel;
