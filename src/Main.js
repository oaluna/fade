import React from 'react'
import AppRouters from "./routers/AppRouters"
import ToolBar from "./components/ToolBar"
import Footer from "./components/Footer"

const Main = () => {
  return (
    <>
      <ToolBar />
      <main>
       
        <AppRouters />
      </main>
      <Footer />
    </>
  )
}

export default Main