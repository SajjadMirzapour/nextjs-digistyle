'use client'

import Image from "next/image";
import { Suspense } from "react";
import { UserInfoSkeleton } from "../../skeletons/skeletons";

function UserWelcome({ session, handleShowUserInfo }) {

    return (
        <div className="flex items-center">
            <button onClick={handleShowUserInfo}>
                <Suspense fallback={<UserInfoSkeleton />}>
                    <Image className="w-[30px] h-[30px] rounded-full shadow-lg" width={30} height={30} src={session?.user?.image} alt={session.user.name} />
                </Suspense>
            </button>
            <Suspense fallback={<p>کاربر</p>}>
            <span className="mx-2"> {session.user.name} </span>
            </Suspense>
            <span>عزیز خوش آمدی </span>
        </div>
    );
}

export default UserWelcome;