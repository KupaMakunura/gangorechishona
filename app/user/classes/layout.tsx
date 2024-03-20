import UserNavbar from "@/components/UserNavbar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (<div>
    <UserNavbar/>
    {children}
    </div>);
};

export default RootLayout;
