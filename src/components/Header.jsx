import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const [isHidden, setIsHidden] = useState(true);
  const { cartProds } = useSelector((state) => state.cartProds);
  const { wishlistProds } = useSelector((state) => state.wishlistProds);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-red-200 h-20 px-8 flex justify-between items-center">
      <Link
        to="/"
        className="text-5xl select-none text-gray-900 font-bold tracking-widest"
      >
        <img
          src="assets/android-chrome-512x512.png"
          height="70px"
          width="70px"
          alt="sofa logo"
        />
      </Link>

      <ul
        className={`${isTablet && "mobileNav"} ${
          isHidden && isTablet && "hiddenNav"
        } relative flex items-center justify-between gap-8`}
      >
        <li onClick={() => setIsHidden(true)} className="link">
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsHidden(true)} className="link">
          <Link to="/catalog">Catalog</Link>
        </li>
        <li onClick={() => setIsHidden(true)} className="link">
          <Link to="/about">About us</Link>
        </li>
        <li onClick={() => setIsHidden(true)} className="link">
          <Link to="contact">Contacts</Link>
        </li>
        <li onClick={() => setIsHidden(true)} className="link">
          <Link to="/personal">Profile</Link>
        </li>
      </ul>

      <ul
        className={`${
          isTablet && "mobileIcons shadow-md md:w-1/2 m-auto"
        } flex items-center justify-between gap-8 `}
      >
        {isTablet && (
          <li>
            <Link to="/">
              <i className="hover:text-gray-900 text-gray-500 fas fa-home"></i>
            </Link>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <Link to="/personal">
              <i className="hover:text-gray-900 text-gray-500 fas fa-user"></i>
            </Link>
          ) : (
            <Link to="/login">
              <i className="hover:text-gray-900 text-gray-500 fas fa-user"></i>
            </Link>
          )}
        </li>
        <li>
          <Link to="/wishlist" className="relative">
            <i className="hover:text-gray-900 text-gray-500 fas fa-heart"></i>
            {wishlistProds.length > 0 && (
              <span className="text-sm text-center absolute top-[-10px] right-[-15px] bg-gray-900 text-gray-100 w-5 h-5 rounded-full">
                {wishlistProds.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/cart" className="relative">
            {" "}
            <i className="hover:text-gray-900 text-gray-500 fas fa-shopping-bag"></i>
            {cartProds.length > 0 && (
              <span className="text-sm text-center absolute top-[-10px] right-[-15px] bg-gray-900 text-gray-100 w-5 h-5 rounded-full">
                {cartProds.length}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {isTablet && (
        <i
          onClick={() => setIsHidden(!isHidden)}
          className={`fas fa-bars ${!isHidden && "fa-times"}`}
        ></i>
      )}
    </div>
  );
};
export default Header;
