import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

export default function account() {
  const [useRouter, setUser] = useState(undefined);
  const { auth } = useAuth();
  const router = useRouter();
  console.log(auth);
  useEffect(() => {
    async () => {
      const response = await auth.idToken;
      setUser(response || null);
    };
  }, [auth]);
  if (user === undefined) return null;
  if (!auth && !user) {
    router.replace("/");
    return null;
  }
  return <div></div>;
}
