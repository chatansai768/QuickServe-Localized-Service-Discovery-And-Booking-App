// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookingForm.css";

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     location: "",
//     serviceDescription: "",
//     preferredDate: "",
//     preferredTime: "",
//   });

//   // Load cart from localStorage
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cartServices")) || [];
//     setCart(savedCart);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const booking = {
//       ...formData,
//       services: cart,
//       createdAt: new Date().toISOString(),
//     };

//     // Store booking details in localStorage (or send to backend API)
//     const existing = JSON.parse(localStorage.getItem("bookings")) || [];
//     existing.push(booking);
//     localStorage.setItem("bookings", JSON.stringify(existing));

//     alert("✅ Booking confirmed!");
//     localStorage.removeItem("cartServices"); // clear cart

//     // ✅ Redirect to Booking History page instead of Dashboard
//     navigate("/history");
//   };

//   return (
//     <div className="booking-container">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         ← Back to Home
//       </button>
//       <h1>Book Your Service ✨</h1>

//       {cart.length === 0 ? (
//         <p>No services selected. Go back and add services first.</p>
//       ) : (
//         <>
//           <h2>Selected Services</h2>
//           <ul className="cart-review">
//             {cart.map((item) => (
//               <li key={item.id}>
//                 <strong>{item.name}</strong> — ${item.price} ({item.duration})
//               </li>
//             ))}
//           </ul>
//         </>
//       )}

//       <form onSubmit={handleSubmit} className="booking-form">
//         <label>
//           Full Name
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Email Address
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Phone Number
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Service Location
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Preferred Date
//           <input
//             type="date"
//             name="preferredDate"
//             value={formData.preferredDate}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Preferred Time
//           <input
//             type="time"
//             name="preferredTime"
//             value={formData.preferredTime}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Service Description
//           <textarea
//             name="serviceDescription"
//             value={formData.serviceDescription}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit" className="btn primary">
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    serviceDescription: "",
    preferredDate: "",
    preferredTime: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartServices")) || [];
    setCart(savedCart);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      ...formData,
      services: cart,
      createdAt: new Date().toISOString(),
      status: "Pending", // default
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert("✅ Booking confirmed!");
    localStorage.removeItem("cartServices");
    navigate("/history");
  };

  return (
    <div className="booking-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <h1>Book Your Service ✨</h1>

      {cart.length === 0 ? (
        <p>No services selected. Go back and add services first.</p>
      ) : (
        <>
          <h2>Selected Services</h2>
          <ul className="cart-review">
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — ${item.price} ({item.duration})
              </li>
            ))}
          </ul>
        </>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Service Location
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Date
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Time
          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Service Description
          <textarea
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="btn primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
