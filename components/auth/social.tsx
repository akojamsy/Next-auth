"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT_PATH } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  const onClick = async (provider: "google" | "github") => {
    await signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT_PATH,
    });
  };

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        variant={"outline"}
        size='lg'
        className='w-full'
        onClick={() => onClick("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        variant={"outline"}
        size='lg'
        className='w-full'
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
