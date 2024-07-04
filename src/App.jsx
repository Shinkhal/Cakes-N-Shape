import "./App.css";
import {  BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Sucess from "./Pages/Sucess";
import NotFound from "./Pages/NotFound";
import Reservation from "./Pages/Reservation";
import LoginForm from "./Pages/loginForm";
import SignupForm from "./Pages/SignupForm";
import CuisineMenu from "./Components/CuisineMenu";
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  return(
    <div className="App">
      <AnimatedCursor
                innerSize={16}
                outerSize={16}
                color='0, 0, 0'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.custom',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '0, 0, 0',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5
                        }
                    }
                ]}
            />
      <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Sucess/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/reservation" element={<Reservation/>}/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/success" element={<Sucess/>}/>
      <Route path="/menu/:cuisine" element={<CuisineMenu/>} />
    </Routes>
    <Toaster/>
  </Router>

    </div>

  ) 
  
};
export default App;
