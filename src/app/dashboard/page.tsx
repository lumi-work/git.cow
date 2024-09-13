import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";
import Signout from "@/components/dashboard/Signout";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }

  console.log(data);

  return (
    <div className="text-black flex-col flex">
      Hello {data.user.email}
      <Signout />
    </div>
  );
}
