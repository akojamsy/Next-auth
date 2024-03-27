import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-semibold text-white drop-shadow-md '>
          <span>&#128271;</span>
          <span>Auth</span>
        </h1>
        <p className='font-base text-white pb-2'>
          A simple authentication service
        </p>
        <LoginButton>
          <Button variant={"secondary"}>Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
