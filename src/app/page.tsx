"use client";

import Link from "next/link";
// import {useUser} from "@auth0/nextjs-auth0";
import Image from "next/image";
import Header from "@/app/components/Header";

const Home = () => {

    // const {user} = useUser();

    // const handleClick = async () => {
    //     const response = await fetch('/api/auth/saveUser', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const data = await response.json();
    //     console.log(data);
    // }

    // if (!user) {
    //     return (
    //         <div className="flex flex-col items-center justify-center min-h-screen">
    //             <h1 className="text-2xl mb-4">Please log in to access the dashboard</h1>
    //             <Link
    //                 href="/auth/login?screen_hint=signup"
    //                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //             >
    //                 Signup
    //             </Link>
    //         </div>
    //     );
    // }

    return (
        <>
            <Header />
            {/* <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
                    {user.email}
                    <Image src={user.picture!} alt={""} width={100} height={100}/>
                    {user.username}
                    {user.updated_at}
                    <Link
                        href="/auth/logout"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Logout
                    </Link>
                    <button onClick={handleClick}>Try endpoint</button>
                </div>
            </div> */}
        </>
    );
};

export default Home;