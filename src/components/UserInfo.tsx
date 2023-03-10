// import { User } from 'firebase/auth';
import React from 'react';
import { User } from '../types/user';

type Props = {
    user: User;
};

export default function UserInfo({ user }: Props) {
    return (
        <div className="flex items-center shrink-0">
            {/* <img
                src={user.photoURL!}
                alt={user.displayName!}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full mr-2"
            /> */}
            <span className="hidden md:block">{user.name}</span>
        </div>
    );
}
