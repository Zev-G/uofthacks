"use client";

import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const Profile: React.FC<ProfileIconProps> = ({ className }) => {
    const { user, handleLogout } = useUser();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (!event.target.closest(".profile-icon") && showDropdown) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showDropdown]);

    return (
        <nav className="flex flex-row justify-end items-center w-full py-4 px-2 bg-transparent absolute z-50">
            {user ? (
                <>
                    <div className="flex flex-row space-x-4">
                        <Link
                            href="/dashboard"
                            className="sms text-orange-50 hover:scale-110 transition-all duration-500"
                        >
                            Dashboard
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="sms text-orange-50 hover:scale-110 transition-all duration-500"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Profile Picture */}
                    <div className="ml-4">
                        <img
                            className="rounded-full w-8 shadow-sm"
                            src={user.photoURL as any}
                            alt="Profile Picture"
                        />
                    </div>
                </>
            ) : (
                // Default Icon when not logged in
                <FaUserAlt className="text-4xl text-[#e7dfbf]" />
            )}
        </nav>
    );

    // return (
    //     <div className="flex flex-row justify-end pr-2 items-center m-auto mt-8 w-full absolute">
    //         <div className="text-4xl text-[#e7dfbf]" onClick={() => setShowDropdown(!showDropdown)}>
    //             {user && user.photoURL ? (
    //                 <img
    //                     className="rounded-full max-w-16 shadow-xl shadow-black"
    //                     src={user.photoURL}
    //                     alt="Profile Picture"
    //                 />
    //             ) : (
    //                 <FaUserAlt />
    //             )}
    //         </div>
    //         {showDropdown && (
    //             <div className="dropdown-menu">
    //                 <Link className="dropdown-item" href="/dashboard">
    //                     Dashboard
    //                 </Link>
    //                 <div className="dropdown-item" onClick={handleLogout}>
    //                     Logout
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // );
};

type ProfileIconProps = {
    className?: string;
};

export default Profile;
