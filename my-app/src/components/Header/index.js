import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

function Portfolio() {
    // state of current page
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  switch(currentPage) {
    case "about":
      return <About></About>
    case "portfolio":
      return <Projects></Projects>
    case "contact":
      return <Contact></Contact>
    case "resume":
     return <Resume></Resume>
  default:
    return <About></About>
    } 
};

// const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
      {
      /* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
    </div>
  );
};


export default Portfolio;