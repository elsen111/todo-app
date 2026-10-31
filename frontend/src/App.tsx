import { ToastProvider } from 'react-toast-kit';
import AppRouter from './app/router/AppRouter';

function App() {
  return (
    <>
      <ToastProvider
        position="top-right"
        theme="light"
        maxToasts={4}
        defaultAnimation="slide"
        defaultStyle="solid"
        topOffset={20}
        rightOffset={20}
      />
      <AppRouter />
    </>
  );
}

export default App;
