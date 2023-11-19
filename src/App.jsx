import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Header />
      <div className="md:min-h-[calc(100vh-487px)]">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default App;
