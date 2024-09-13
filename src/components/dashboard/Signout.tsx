"use client";

import { createClient } from "@/utils/client";
import { useRouter } from "next/navigation";
import React from "react";

function Signout() {
  const supabase = createClient();
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
      return;
    } else {
      console.log("Sign out error:", error);
    }
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

export default Signout;
