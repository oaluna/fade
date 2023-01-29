import React from 'react'
import AppRouters from "./routers/AppRouters"
import ToolBar from "./components/ToolBar"
import Footer from "./components/Footer"

const Main = () => {
  return (
    <div style={{position:"relative"}}>
      <main>
      <ToolBar />
       
        <AppRouters />
        <Footer />
      </main>
   
    </div>
  )
}

export default Main