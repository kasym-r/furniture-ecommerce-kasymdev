import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = (event) => {
    event.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate(`/personal`);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Wrong password");
        } else if (error.code === "auth/invalid-email") {
          setErrorMessage("invalid email!");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("User not found!");
        }
      });
  }
  

  return (
    <div className=" py-2 w-full">
      <form  className=" mt-20 py-2 flex flex-col m-auto w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-gray-900 text-center text-3xl mb-4 font-extrabold">LOG IN PLEASE</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <input
          className='my-2 px-4 py-2 bg-gray-200'
          type="email"
          name="email"
          id="email"
          placeholder='your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='mt-2 mb-4 px-4 py-2 bg-gray-200'
          type="password"
          name="password"
          id="password"
          placeholder='your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="bg-gray-900 text-gray-100 px-4 py-2" type="submit" value="LOG IN" onClick={handleLogin}/>
        <div className='text-gray-600 text-center mt-4 flex flex-col items-center justify-between '>
          <span className='text-lg  cursor-pointer'>
            <Link to='/signup'>Signup</Link> </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
