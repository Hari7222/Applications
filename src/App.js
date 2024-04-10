import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
