import React from 'react'
import AppRouters from "./routers/AppRouters"
import ToolBar from "./components/ToolBar"
import Footer from "./components/Footer"

const Main = () => {
  return (
    <div>
      <ToolBar />
      <main>
       
        <AppRouters />
      </main>
      <Footer />
    </div>
  )
}

export default Main