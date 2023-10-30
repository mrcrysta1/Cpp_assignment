import React  from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Layout({ children}) {
  return (
    <div>
        <Navbar  About="About" title="MY_Title"/>
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout