import { signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

function UserDashboard({ showInfo }) {
  return (
    <div
      className={`${
        showInfo ? "block" : "hidden"
      } w-[200px] absolute top-[140%] bg-white p-4 rounded-lg shadow-xl before:absolute before:top-[-5%] before:right-[5%] before:content-[''] before:w-0 before:h-0 before:border-l-[5px] before:border-l-transparent before:border-r-[5px] before:border-r-transparent before:border-b-[10px] before:border-b-white`}
    >
      <div className="flex items-center mb-4 border-b pb-2">
        <Image width={25} height={25} src="/icons/person.svg" alt="user" />
        <Link className="mr-4" href="/user-info">
          حساب کاربری
        </Link>
      </div>
      <div className="flex items-center mb-4 border-b pb-2">
        <Image width={25} height={25} src="/icons/heart.svg" alt="heart-icon" />
        <Link className="mr-4" href="/user-info">
          لیست علاقه مندی ها
        </Link>
      </div>
      <form
        className="flex items-center"
        action={async () => {
          await signOut({ redirectTo: "/login" });
        }}
      >
        <Image width={25} height={25} src="/icons/sign-out.png" alt="user" />
        <button className="mr-4">خروج از حساب کاربری</button>
      </form>
    </div>
  );
}

export default UserDashboard;
