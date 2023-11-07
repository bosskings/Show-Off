import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUsersContext } from "./hooks/useUsersContext";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";


function App() {
  const queryClient = new QueryClient();
  const {user} = useUsersContext()



  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
          <div>
            <Router>
              <Routes>
              
                <Route element={<PrivateRoutes />}>

                  <Route path="/dashboard/:userId" element={ <Dashboard />  } />
                  <Route path="/" element={ <Home /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/artists" element={ <Artists /> } />
                  <Route path="/gallery" element={ <Gallery /> } />
                  <Route path="/shop" element={ <Shop /> } />
                  <Route path="/cart" element={ <Cart /> } />
                  <Route path="/contact-us" element={ <Contact />} />
                  <Route path="/login" element={<Signin />} />
                  <Route path="/register" element={<Signup />} />
                  
                </Route>
              
              </Routes>
            </Router>
          </div>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
