import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useLocation} from "react-router-dom";

const Personalcabinet = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");
  const password = new URLSearchParams(location.search).get("password");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showAvatarInput, setShowAvatarInput] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
    }
  };

  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedAvatar = localStorage.getItem("avatar");

    if (savedName) {
      setName(savedName);
    }
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const handleToggleAvatarInput = () => {
    setShowAvatarInput(!showAvatarInput);
  };

  return (
    <div className="flex flex-col items-center mt-3">
      <span className="text-3xl font-bold text-gray-700 hover:text-red-400 transition duration-400 text-center">
        Welcome to PersonalCabinet
      </span>
      <p className="font-semibold text-green-600">Email: {savedEmail}</p>
      <p className="font-semibold text-green-700">Password: {savedPassword}</p>

      <div className="flex flex-col items-center space-y-4">
        <label className="text-black font-bold">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {showAvatarInput ? (
          <>
            <label className="text-black font-bold">Avatar:</label>
            <input
              type="file"
              onChange={(e) => {
                handleAvatarChange(e);
                handleToggleAvatarInput();
              }}
              className=" p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </>
        ) : (
          <button
            onClick={handleToggleAvatarInput}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Edit Avatar ...
          </button>
        )}

        {avatar && (
          <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full" />
        )}
        <button
          onClick={handleSave}
          className=" bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
        >
          Save
        </button>
      </div>

      <Link to="/" className="bg-gray-900 text-white rounded-lg p-1.5 mt-3 mb-3 hover:bg-green-700 transition duration-500">
        Go to HomePage
      </Link>
      <Link onClick={handleSignOut} to="/" className="bg-gray-900 text-white rounded-lg p-1.5 mt-3 mb-3 hover:bg-red-500 transition duration-500">
        Sign Out
      </Link>
    </div>
  );
};

export default Personalcabinet;
