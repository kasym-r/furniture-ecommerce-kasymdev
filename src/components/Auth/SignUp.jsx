import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        navigate(`/login`);
        console.log(auth);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Wrong password");
        } else if (error.code === "auth/invalid-email") {
          setErrorMessage("invalid email!");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("User not found!");
        } else if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email already in use!");
        }
      });
  };

  return (
    <div>
      <form className=" mt-8 py-2 flex flex-col m-auto w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-gray-900 text-3xl mb-4 font-extrabold">REGISTER</h1>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        <input
          className="my-2 px-4 py-2 bg-gray-200"
          type="text"
          name="name"
          id="name"
          placeholder="your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex items-center gap-4">
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label
              className="form-check-label inline-block text-gray-800 text-lg md:text-2xl"
              htmlFor="male"
            >
              Male
            </label>
          </div>
          <div className="form-check ml-8">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label
              className="form-check-label inline-block text-gray-800 text-lg md:text-2xl"
              htmlFor="female"
            >
              Female
            </label>
          </div>
        </div>
        <input
          className="my-2 px-4 py-2 bg-gray-200"
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-2 px-4 py-2 bg-gray-200"
          type="password"
          name="password"
          id="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value="Sign Up"
          className="bg-gray-900 text-gray-100 px-4 py-2 disabled"
          type="submit"
          onClick={handleSignUp}
        />
      </form>
    </div>
  );
};

export default SignUp;
