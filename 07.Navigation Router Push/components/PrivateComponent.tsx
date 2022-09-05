import Link from "next/link";
import type { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props { }

const PrivateComponent: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!loggedIn) {
            router.push('/login')
        }
    }, [loggedIn]);
    return (
        <div>
            <h3>This is private component</h3>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
    )
}
export default PrivateComponent;