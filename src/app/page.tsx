"use client";

import {useUser} from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Home = () => {

    const {user} = useUser();

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl mb-4">Please log in to access the dashboard</h1>
                <Link
                    href="/api/auth/signup"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Signup
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
                {user.email}
                {user.nickname}
                {user.updated_at}
                <Link
                    href="/api/auth/logout"
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Logout
                </Link>
            </div>
        </div>
    );

};

export default Home;