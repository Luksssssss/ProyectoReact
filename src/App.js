import './styles/ContenRow.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import React from 'react';

function App() {
  return (
      <React.Fragment>
      <div  id="wrapper">
        <SideBar/>
        <ContentWrapper/>
      </div>
    </React.Fragment>
  );
}

export default App;
