  
import { GoogleOAuthProvider } from '@react-oauth/google';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="156894535672-ra0t9edbgp75h9j7m7fnpl111j5tqt3c.apps.googleusercontent.com">
      <Component {...pageProps} />
      <Toaster />
    </GoogleOAuthProvider>
  );
}
