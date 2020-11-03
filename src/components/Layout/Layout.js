import React from 'react';
import HeaderApp from '../HeaderApp/HeaderApp'
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <div className="container">
        <HeaderApp />
      {children}
    </div>
  );
}
 
export default Layout;
//* тут хедер, боди и футер