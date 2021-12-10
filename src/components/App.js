import React from 'react'
import SideBar from './SideBar.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import './appGlobal.css'
import './app.css'

function App() {

  return (
      <div className="container app" >
        <div className="wrapper">
          <SideBar />
          <Main />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>  
  );
}

export default App;

