import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import spotify from './spotify';

const authContext = createContext();

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signinWithSpotify = () => {
        var scopes = ['user-read-private', 'user-read-email'],
            state = 'some-state-of-my-choice';

        return spotify.createAuthorizeURL(scopes.state).then((response) => {
            setUser(response.user);
            return response.user;
        });
        console.log(authorizeURL);
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signout
    };
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
};