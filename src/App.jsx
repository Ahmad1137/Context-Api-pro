import React from "react"
import Contextprovider from "./context/Contextprovider"
import Login from "./components/Login"
import Profile from "./components/Profile"
function App() {
 
  return (
    <Contextprovider>
      <Login/>
      <Profile/>
    </Contextprovider>
  )
}

export default App
