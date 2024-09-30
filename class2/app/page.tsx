import React from "react";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
      <>
        <h1 className="flex justify-center items-center ">This is Home Page</h1>
        <Navbar />
        <p className="flex justify-center items-center "> 
          This is my first Next.js project. I'm creating a simple Navbar.
        </p>
      </>
  );
}
