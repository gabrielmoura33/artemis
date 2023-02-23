import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from '../context/AuthContext';
import GlobalStyle from '../styles/global';
import '../styles/globals.scss';
import '../styles/pages/donations.css';
import theme from '../styles/theme';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
