import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";
import Signout from "@/components/dashboard/Signout";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div className="text-white flex-col flex">
      Hello {data.user.email}
      <Signout />
    </div>
  );
}
