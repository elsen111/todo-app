import LeftPanel from '../../../components/AuthPage/LeftPanel';
import RightPanel from '../../../components/AuthPage/RightPanel';

import bgImg from '../../../assets/auth-bg.png';
import Brand from '../../../components/common/ui/Brand';

const AuthPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'left bottom',
      }}
      className="relative flex min-h-screen bg-[#F5F8FD] bg-size-[150%_35%] bg-no-repeat md:bg-size-[50%_40%]"
    >
      <div className="absolute top-10 left-10 h-20">
        <Brand />
      </div>
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default AuthPage;
