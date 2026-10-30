type AuthToggleProps = {
  question: string;
  linkLabel: string;
  onSwitch: () => void;
};

const AuthToggle = ({ question, linkLabel, onSwitch }: AuthToggleProps) => {
  return (
    <p className="text-[1.4rem]">
      <span className="text-gray-600"> {question} </span>
      <button
        className="text-primary ml-1 cursor-pointer font-bold"
        onClick={onSwitch}
      >
        {linkLabel}
      </button>
    </p>
  );
};

export default AuthToggle;
