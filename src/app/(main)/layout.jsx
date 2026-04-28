import NavBar from "@/components/shared/NavBar";
import React from "react";
import Header from "@/components/shared/Header";
import MarqupeNews from "@/components/shared/MarqupeNews";
export default function MainLayout({ children }) {
  return (
    <div
    >
      <Header></Header>
      <MarqupeNews />
      <NavBar />

      <main>{children}</main>
    </div>
  );
}
