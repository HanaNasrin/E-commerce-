import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
    setLoading(true);  // Start loading state

    // Simple client-side validation
    if (!formData.username || !formData.password) {
      setError("Username and password are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/users", formData);
      if (res.status === 201) {
        // Redirect to login page on successful signup
        navigate("/login");
      }
    } catch (err) {
      setLoading(false);  // Stop loading state
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Signup failed. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
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
          disabled={loading} // Disable button when loading
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};
export default Signup;