import React from "react";
import { Analytics } from "@vercel/analytics/react";
function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Analytics />
      {children}
    </div>
  );
}

export default DashboardLayout;
