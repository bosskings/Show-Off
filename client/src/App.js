import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoute";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ShoppingCartProvider>
				<ThemeProvider>
					<div>
						<Router>
							<Routes>

								<Route path="/" element={<Home />} />
								<Route element={<PrivateRoutes />}>
									<Route path="/dashboard/:userId" element={<Dashboard />} />
								</Route>

								<Route path="/about" element={<About />} />
								<Route path="/artists" element={<Artists />} />
								<Route path="/gallery" element={<Gallery />} />
								<Route path="/shop" element={<Shop />} />
								<Route path="/cart" element={<Cart />} />
								<Route path="/contact-us" element={<Contact />} />

								<Route path="/login" element={<Signin />} />
								<Route path="/register" element={<Signup />} />

							</Routes>
						</Router>
					</div>
				</ThemeProvider>
			</ShoppingCartProvider>
		</QueryClientProvider>
	);
}

export default App;
