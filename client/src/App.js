import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
  const {user} = useUsersContext();


  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <div>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard/:userId" element={ user ? <Dashboard /> : <Navigate to="/login" /> } />
              </Route>
              <Route path="/" element={ user ? <Home /> : <Navigate to="/login" /> } />
              <Route path="/about" element={ user ? <About /> : <Navigate to="/login" /> } />
              <Route path="/artists" element={ user ? <Artists /> : <Navigate to="/login" /> } />
              <Route path="/gallery" element={ user ? <Gallery /> : <Navigate to="/login" /> } />
              <Route path="/shop" element={ user ? <Shop /> : <Navigate to="/login" /> } />
              <Route path="/cart" element={ user ? <Cart /> : <Navigate to="/login" /> } />
              <Route path="/contact-us" element={ user ?<Contact />: <Navigate to="/login"  />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          </Router>
        </div>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
