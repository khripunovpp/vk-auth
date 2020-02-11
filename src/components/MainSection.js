import React from "react";

const Page = ({children}) => {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Page;
