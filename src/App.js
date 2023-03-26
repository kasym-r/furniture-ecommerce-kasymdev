import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Product, Cart, Wishlist, Catalog, Contact, Notfound, About, LogIn, SignUp, Personalcabinet } from "./components";

function App() {

  return (
    <div className="text-2xl h-screen">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="login" element={<LogIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route exact path="catalog/:id" element={<Product/>}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Notfound />}/>
          <Route path="/personal" element={<Personalcabinet />}/>
      </Routes>
      <Footer/>
    </div>
  )
};
export default App;
