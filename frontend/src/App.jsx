import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen"
import Menu from "./screen/Menu";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} /> 
          <Route path="/Menu/*" element={<Menu />} /> 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
