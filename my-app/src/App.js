import React from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => { <PortfolioContainer />;

return (
 <div>
    <NavTabs />
    <main>
        <Home />
        <About />
        <Resume />
        <Contact />
    </main>
 </div>
);
}
export default App;
