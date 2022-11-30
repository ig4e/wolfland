import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import { useUserStore } from "../store";

export default function App({
  Component,
  pageProps: { session: sessionProps, ...pageProps },
}: AppProps) {
  const setUserError = useUserStore((state) => state.setUserError);
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "/api/user",
      withCredentials: true,
    })
      .then(({ data: userData }) => {
        setUser(userData);
        setLoading(false);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
        setUser(undefined);
        setLoading(false);
      });
  }, []);

  return (
    <SessionProvider session={sessionProps}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
