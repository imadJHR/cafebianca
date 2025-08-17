import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = handleLogin(username, password);
    if (loginSuccess) {
      navigate("/admin");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen mt-12 flex items-center justify-center bg-gradient-to-r from-white to-green-600 p-4">
      <div className="bg-white rounded-lg shadow-2xl flex flex-col w-full max-w-md sm:max-w-lg lg:max-w-4xl">
        <div className="w-full p-8">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Enterprise Logo"
              className="mx-auto h-20 w-20 mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600">Please sign in to your account</p>
          </div>
          {loginError && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
              role="alert"
            >
              <p>{loginError}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
