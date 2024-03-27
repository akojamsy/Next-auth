"use client";
import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full p-10'>
      <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl w-full shadow-sm'>
        <div className='flex justify-between min-w-[400px]'>
          <Button
            asChild
            variant={pathname === "/server" ? "default" : "outline"}
          >
            <Link href={`/server`}>Server</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/client" ? "default" : "outline"}
          >
            <Link href={`/client`}>Client</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/admin" ? "default" : "outline"}
          >
            <Link href={`/admin`}>Admin</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "outline"}
          >
            <Link href={`/settings`}>Settings</Link>
          </Button>
        </div>
        <UserButton />
      </nav>
    </div>
  );
};

export default Navbar;