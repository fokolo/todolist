import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Avatar } from '@material-ui/core';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

interface Props {
    user: firebase.User | undefined,
    auth: firebase.auth.Auth,
}

export const Authentication: React.FC<Props> = ({ user, auth }) => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const SignIn = () => {
        return (
            <Avatar onClick={signInWithGoogle} />
        )
    }

    const SignOut = () => {
        const AuthSignOut = () => {
            Modals.confirm({
                title: 'Sign Out',
                message: 'Sign out'
            }).then((shouldSignout) => {
                if (shouldSignout.value) {
                    auth.signOut()
                }
            })

        }
        if (user) {
            const displayName = user.displayName ? user.displayName : "???"
            const photoURL = user.photoURL ? user.photoURL : "";

            return (
                <Avatar alt={displayName} src={photoURL} onClick={AuthSignOut} />
            )
        }
    }

    return (
        <>
            {user ? SignOut() : SignIn()}
        </>)
}