import React from 'react'
import AppRouters from "./routers/AppRouters"
import ToolBar from "./components/ToolBar"
import Footer from "./components/Footer"

const Main = () => {
  return (
    <div style={{position:"relative"}}>
      <ToolBar />
      <main>
       
        <AppRouters />
      </main>
   
    </div>
  )
}

export default Main