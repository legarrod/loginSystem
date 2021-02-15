import { useMemo } from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import AuthContext from "../context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  const audthData = useMemo(
    () => ({
      auth: { idToken: "", name: "", email: "", img: "" },
      login: () => null,
      logout: () => null,
      setReloadUser: () => null,
    }),
    []
  );
  return (
    <AuthContext.Provider value={audthData}>
      <Component {...pageProps} />;
    </AuthContext.Provider>
  );
}
