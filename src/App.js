import React from "react";
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';


const App = () => {
  return (
    <main>
      <Header />
      <Navigation /> 
       <AppRouter />

    </main>
  );
}
export default App;