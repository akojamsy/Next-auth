"use client";
import { logout } from "@/actions/logout";
import { auth, signOut } from "@/auth";
import LogoutButton from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

const SettingsPage = () => {
  const session = useCurrentUser();

  const onclick = () => {
    logout();
  };

  return (
    <div className='bg-white p-10 rounded-xl'>
      <form>
        <LogoutButton>
          <Button variant='secondary' type='submit' onClick={onclick}>
            Sign Out
          </Button>
        </LogoutButton>
      </form>
    </div>
  );
};

export default SettingsPage;
