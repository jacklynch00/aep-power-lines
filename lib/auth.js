import React, {useState, useEffect, useContext, createContext} from "react";
import Router from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import {createUser} from "./db";

const authContext = createContext();

export function AuthProvider({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUser = async (rawUser, name) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const {token, ...userWithoutToken} = user;

      // TODO: Need to fix bug where name isn't saved
      createUser(user.uid, name, userWithoutToken);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);

      setLoading(false);
      return false;
    }
  };

  const createNewUser = (name, email, password) => {
    const auth = getAuth();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in
        handleUser(response.user, name);
        Router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInUser = (email, password) => {
    const auth = getAuth();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in
        handleUser(response.user);
        Router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signout = () => {
    const auth = getAuth();
    setLoading(true);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        handleUser(false);
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    createNewUser,
    signInUser,
    signout
  };
}

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    token
  };
};
