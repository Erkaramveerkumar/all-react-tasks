import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GuestLogin = () => {
  const [guest, setGuest] = useState({
    guestName: "",
    age: "",
    gender: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store guest details in local storage (optional)
    localStorage.setItem("guestUser", JSON.stringify(guest));
    // Navigate to chat room
    navigate("/chat");
  };

  return (
    <div>
      <h2>Guest Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="guestName"
          placeholder="Enter Name"
          value={guest.guestName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={guest.age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={guest.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          value={guest.country}
          onChange={handleChange}
          required
        />
        <button type="submit">Login as Guest</button>
      </form>
    </div>
  );
};

export default GuestLogin;
