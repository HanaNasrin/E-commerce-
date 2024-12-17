import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // Add loading state
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Clear previous errors
    setLoading(true);  // Set loading state

    // Basic form validation
    if (!formData.username || !formData.password) {
      setError("Both username and password are required.");
      setLoading(false);
      return;
    }

    try {
      // Send a POST request to the server with username and password
      const res = await axios.post("http://localhost:5000/login", formData);

      // Ensure successful login response status
      if (res.status === 200) {
        // Assuming backend sends a token or user info upon successful login
        // You can store the token in localStorage, sessionStorage, or state
        // localStorage.setItem('authToken', res.data.token);  // Example if token is returned

        // Navigate to the dashboard or home page
        navigate("/dashboard");  // Adjust this to the correct route
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setLoading(false);  // Stop loading state
      if (err.response && err.response.data) {
        // Ensure the backend sends a message in this format
        setError(err.response.data.message || "Login failed. Please try again.");
      } else if (err.message) {
        setError(err.message);  // Generic error handling if no response from server
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="block w-full p-2 border mb-4"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="block w-full p-2 border mb-4"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className={`w-full p-2 text-white ${loading ? "bg-gray-400" : "bg-blue-500"}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
export default Login;
