import React from 'react';
import { Route } from "react-router-dom";

// local imports
import './App.css';
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <div className="App">
      <>
        {/* Nav component on every page */}
        <Route path="/">
          <NavBar />
        </Route>
        {/* Intro component with skills and role interests */}
        {/* Main home component that holds project list on root route */}
        {/* Dynamic route for each project to view more details */}
      </>
    </div>
  );
}

export default App;
