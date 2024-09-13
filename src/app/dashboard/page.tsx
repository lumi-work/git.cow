import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";
import LeftBar from "@/components/dashboard/LeftBar";
import Main from "@/components/dashboard/Main";
import RightBar from "@/components/dashboard/RightBar";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <>
      <div className="grid grid-cols-5 h-screen gap-4">
        <div className="col-span-1 border-r border-gray-200">
          <LeftBar />
        </div>

        <div className="col-span-3">
          <Main />
        </div>

        <div className="col-span-1 border-l border-gray-200">
          <RightBar />
        </div>
      </div>
    </>
  );
}
