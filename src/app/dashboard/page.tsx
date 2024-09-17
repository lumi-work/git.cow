import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";
import LeftBar from "@/components/dashboard/LeftBar";
import RightBar from "@/components/dashboard/RightBar";
import PageRouter from "@/components/router/PageRouter";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <>
      <div className="grid grid-cols-6 h-screen gap-4 scroll-block">
        {/* Left Sidebar */}
        <div className="col-span-1 border-r border-gray-200 h-full overflow-hidden">
          <LeftBar />
        </div>

        {/* Main Content Area */}
        <div className="col-span-4 h-full overflow-y-auto scroll-block">
          <PageRouter />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 border-l border-gray-200 h-full overflow-hidden">
          <RightBar />
        </div>
      </div>
    </>
  );
}
