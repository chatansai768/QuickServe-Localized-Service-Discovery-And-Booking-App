// // Dashboard.js
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const goToListings = () => {
//     navigate("/listings"); // 👈 This will redirect to Listings.js
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome to Dashboard</h2>
//       <p>This is your dashboard page.</p>

//       <button onClick={goToListings} className="next-btn">
//         Next ➡️
//       </button>
//     </div>
//   );
// };

// export default Dashboard;







// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const goToListings = () => {
//     navigate("/listings");
//   };

//   // CSS in JS styles
//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       fontFamily: "Poppins, sans-serif",
//       backgroundColor: "#f5f5f5",
//     },
//     content: {
//       textAlign: "center",
//       padding: "30px",
//       background: "#fff",
//       borderRadius: "12px",
//       boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//     },
//     heading: {
//       fontSize: "28px",
//       color: "#222",
//       marginBottom: "15px",
//     },
//     paragraph: {
//       fontSize: "16px",
//       color: "#555",
//       marginBottom: "25px",
//     },
//     button: {
//       padding: "12px 24px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Welcome to Dashboard</h2>
//         <p style={styles.paragraph}>This is your dashboard page.</p>
//         <button
//           style={styles.button}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
//           onClick={goToListings}
//         >
//           Next ➡️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;












// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const goToListings = () => {
//     navigate("/listings");
//   };

//   // Cleaning services and prices
//   const services = [
//     { name: "Men Salon And Spa", price: "150" },
//     { name: "AC Repairing", price: "250" },
//     { name: "Deep Cleaning", price: "500" },
//     { name: "Electrician", price: "750" },
//     { name: "Carpet Cleaning", price: "300" },
//     { name: "Plumber", price: "200" },
//     { name: "Home Painting", price: "1000" },
//     { name: "Washing Machine", price: "400" },
//     { name: "Refrigerator", price: "600" },
//   ];

//   // CSS in JS styles
//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       fontFamily: "Poppins, sans-serif",
//       backgroundColor: "#f5f5f5",
//     },
//     content: {
//       textAlign: "center",
//       padding: "30px",
//       background: "#fff",
//       borderRadius: "12px",
//       boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//       width: "100%",
//       maxWidth: "600px", // Limit width of the dashboard
//     },
//     heading: {
//       fontSize: "28px",
//       color: "#222",
//       marginBottom: "15px",
//     },
//     paragraph: {
//       fontSize: "16px",
//       color: "#555",
//       marginBottom: "25px",
//     },
//     serviceList: {
//       margin: "20px 0",
//       listStyleType: "none",
//       padding: "0",
//     },
//     serviceItem: {
//       fontSize: "18px",
//       color: "#333",
//       padding: "8px 0",
//     },
//     button: {
//       padding: "12px 24px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "0.3s",
//       marginTop: "20px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     serviceButton: {
//       padding: "10px 20px",
//       backgroundColor: "#28a745",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "0.3s",
//       marginTop: "10px",
//     },
//     serviceButtonHover: {
//       backgroundColor: "#218838",
//     },
//     divider: {
//       margin: "20px 0",
//       borderTop: "1px solid #ccc",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Welcome to Dashboard</h2>
//         <p style={styles.paragraph}>Here are the available cleaning services:</p>

//         <ul style={styles.serviceList}>
//           {services.map((service, index) => (
//             <li key={index} style={styles.serviceItem}>
//               {service.name} - {service.price}
//             </li>
//           ))}
//         </ul>

//         <div style={styles.divider}></div>

//         <p style={styles.paragraph}>Please select your role:</p>
//         <button
//           style={styles.serviceButton}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
//           onClick={() => navigate("/customer")}
//         >
//           Customer ➡️
//         </button>

//         <button
//           style={{ ...styles.serviceButton, backgroundColor: "#ffc107", marginTop: "10px" }}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e0a800")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffc107")}
//           onClick={() => navigate("/service-provider")}
//         >
//           Service Provider ➡️
//         </button>

//         <div style={styles.divider}></div>

//         <button
//           style={styles.button}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
//           onClick={goToListings}
//         >
//           Next ➡️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



//////////////////

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const goToListings = () => {
//     navigate("/listings");
//   };

//   // Cleaning services and prices
//   const services = [
//     { name: "Men Salon And Spa", price: "150" },
//     { name: "AC Repairing", price: "250" },
//     { name: "Deep Cleaning", price: "500" },
//     { name: "Electrician", price: "750" },
//     { name: "Carpet Cleaning", price: "300" },
//     { name: "Plumber", price: "200" },
//     { name: "Home Painting", price: "1000" },
//     { name: "Washing Machine", price: "400" },
//     { name: "Refrigerator", price: "600" },
//     { name: "Gardening", price: "350" },
//   ];

//   // CSS in JS styles
//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       fontFamily: "Poppins, sans-serif",
//       backgroundImage: "url('https://via.placeholder.com/1500')", // Replace with your background image URL
//       backgroundSize: "cover", // Ensure the image covers the whole container
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//       position: "relative", // Required for overlay positioning
//     },
//     overlay: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for contrast
//       zIndex: 1,
//     },
//     content: {
//       textAlign: "center",
//       padding: "30px",
//       background: "rgba(255, 255, 255, 0.8)", // White background with some transparency
//       borderRadius: "12px",
//       boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//       width: "100%",
//       maxWidth: "600px",
//       zIndex: 2, // Ensure content is above the overlay
//     },
//     heading: {
//       fontSize: "28px",
//       color: "#222",
//       marginBottom: "15px",
//     },
//     paragraph: {
//       fontSize: "16px",
//       color: "#555",
//       marginBottom: "25px",
//     },
//     serviceList: {
//       margin: "20px 0",
//       listStyleType: "none",
//       padding: "0",
//     },
//     serviceItem: {
//       fontSize: "18px",
//       color: "#333",
//       padding: "8px 0",
//     },
//     button: {
//       padding: "12px 24px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "0.3s",
//       marginTop: "20px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     serviceButton: {
//       padding: "10px 20px",
//       backgroundColor: "#28a745",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "0.3s",
//       marginTop: "10px",
//     },
//     serviceButtonHover: {
//       backgroundColor: "#218838",
//     },
//     divider: {
//       margin: "20px 0",
//       borderTop: "1px solid #ccc",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div> {/* Overlay for darker background */}
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Welcome to Dashboard</h2>
//         <p style={styles.paragraph}>Here are the available cleaning services:</p>

//         <ul style={styles.serviceList}>
//           {services.map((service, index) => (
//             <li key={index} style={styles.serviceItem}>
//               {service.name} - {service.price}
//             </li>
//           ))}
//         </ul>

//         <div style={styles.divider}></div>

//         <p style={styles.paragraph}>Please select your role:</p>
//         <button
//           style={styles.serviceButton}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
//           onClick={() => navigate("/customer")}
//         >
//           Customer ➡️
//         </button>

//         <button
//           style={{ ...styles.serviceButton, backgroundColor: "#0b2fe1ff", marginTop: "10px" }}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0817eeff")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0d41dfff")}
//           onClick={() => navigate("/service-provider")}
//         >
//           Service Provider ➡️
//         </button>
//         <button
//           style={{ ...styles.serviceButton, backgroundColor: "#ffc107", marginTop: "10px" }}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e0a800")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffc107")}
//           onClick={() => navigate("/Booking-Summary")}
//         >
//           Booking Summary ➡️
//         </button>


//         <div style={styles.divider}></div>

//         <button
//           style={styles.button}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
//           onClick={goToListings}
//         >
//           Next ➡️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
























































import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import "./Dashboard.css";

const services = [
  {
    id: 1,
    category: "Home Services",
    name: "House Cleaning",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1581579185169-1b5b3a6e2baf",
    rating: 4.8,
    reviews: 1247,
    duration: "2-4 hours",
    features: ["Deep cleaning", "Eco-friendly products"],
    price: 80,
    priceRange: "$60-$200",
    popular: true,
  },
  {
    id: 2,
    category: "Home Services",
    name: "Plumbing",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1604014236530-3d5d299c24a5",
    rating: 4.7,
    reviews: 893,
    duration: "1-3 hours",
    features: ["Leak repairs", "Pipe installation"],
    price: 100,
    priceRange: "$70-$250",
    popular: false,
  },
  {
    id: 3,
    category: "Home Services",
    name: "Electrical",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8e",
    rating: 4.6,
    reviews: 765,
    duration: "1-2 hours",
    features: ["Wiring", "Appliance fixing"],
    price: 90,
    priceRange: "$50-$220",
    popular: false,
  },
  {
    id: 4,
    category: "Home Services",
    name: "Gardening",
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e2039f",
    rating: 4.9,
    reviews: 980,
    duration: "2-5 hours",
    features: ["Lawn care", "Planting services"],
    price: 70,
    priceRange: "$50-$180",
    popular: true,
  },
  {
    id: 5,
    category: "Home Services",
    name: "Painting",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1581574209460-546b3d76f1a1",
    rating: 4.7,
    reviews: 543,
    duration: "4-8 hours",
    features: ["Interior painting", "Exterior painting"],
    price: 150,
    priceRange: "$100-$600",
    popular: true,
  },
  {
    id: 6,
    category: "Home Services",
    name: "Carpentry",
    icon: "🪚",
    image: "https://images.unsplash.com/photo-1581091012184-7d3c13ebc2e2",
    rating: 4.5,
    reviews: 421,
    duration: "3-6 hours",
    features: ["Furniture making", "Wood repairs"],
    price: 120,
    priceRange: "$80-$350",
    popular: false,
  },
  {
    id: 7,
    category: "Personal Care",
    name: "Beauty & Spa",
    icon: "💆‍♀️",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
    rating: 4.9,
    reviews: 1123,
    duration: "1-3 hours",
    features: ["Mobile spa", "Premium products"],
    price: 130,
    priceRange: "$80-$400",
    popular: true,
  },
  {
    id: 8,
    category: "Personal Care",
    name: "Personal Training",
    icon: "🏋️",
    image: "https://images.unsplash.com/photo-1594737625785-cd0f0f5a74cd",
    rating: 4.8,
    reviews: 675,
    duration: "1 hour/session",
    features: ["Custom workout plan", "Nutrition guidance"],
    price: 50,
    priceRange: "$40-$150",
    popular: true,
  },
  {
    id: 9,
    category: "Tech Support",
    name: "Wifi Setup",
    icon: "📶",
    image: "https://images.unsplash.com/photo-1580894908360-61b6cf52a0df",
    rating: 4.6,
    reviews: 342,
    duration: "1-2 hours",
    features: ["Router setup", "Network troubleshooting"],
    price: 60,
    priceRange: "$40-$120",
    popular: false,
  },
  {
    id: 10,
    category: "Auto Care",
    name: "Car Repair",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1581090700227-4c4cbb47c5e6",
    rating: 4.7,
    reviews: 789,
    duration: "2-6 hours",
    features: ["Engine repair", "Brake service"],
    price: 200,
    priceRange: "$100-$700",
    popular: true,
  },
];

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cartServices");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [justAddedId, setJustAddedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartServices", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (service) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === service.id)) return prev;
      return [...prev, service];
    });
    setJustAddedId(service.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((s, item) => s + Number(item.price || 0), 0);

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <main>
          <header className="top-row">
            <h1 className="title">Our Services</h1>
            <div className="cart-summary">
              🛒 <strong>{cart.length}</strong>
              <span className="subtotal"> (${subtotal})</span>
            </div>
          </header>

          <div className="services-grid">
            {services.map((service) => {
              const inCart = cart.some((c) => c.id === service.id);
              return (
                <div key={service.id} className="service-card">
                  <div className="card-header">
                    <span className="category">{service.category}</span>
                    <span className="status">🟢 1 online</span>
                  </div>

                  <img
                    src={service.image + "?auto=format&fit=crop&w=800&q=60"}
                    alt={service.name}
                    className="service-image"
                  />

                  {service.popular && <span className="badge">🔥 Popular</span>}

                  <h3>
                    {service.name}{" "}
                    <span className="icon-inline">{service.icon}</span>
                  </h3>

                  <p className="rating">
                    ⭐ {service.rating} ({service.reviews}) • {service.duration}
                  </p>

                  <ul className="features">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <div className="price">
                    <strong>${service.price}</strong> starting from
                    <span className="range"> Range {service.priceRange}</span>
                  </div>

                  <div className="card-actions">
                    <button
                      type="button"
                      className={`btn ${inCart ? "btn-disabled" : ""}`}
                      onClick={() => addToCart(service)}
                      disabled={inCart}
                    >
                      {inCart ? "Added" : "Book Now"}
                    </button>
                    {justAddedId === service.id && (
                      <span className="added-pulse">✓ Added</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <aside className="cart-container">
          <h2>🛒 Your Cart</h2>

          {cart.length === 0 ? (
            <p className="muted">No services added yet.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img
                      src={item.image + "?auto=format&fit=crop&w=200&q=60"}
                      alt={item.name}
                      className="cart-img"
                    />
                    <div className="cart-meta">
                      <h4>{item.name}</h4>
                      <p className="muted">
                        ${item.price} • {item.duration}
                      </p>
                    </div>
                    <div className="cart-actions">
                      <button
                        type="button"
                        className="small-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                <div>
                  <div className="cart-total-label">Subtotal</div>
                  <div className="cart-total-amount">${subtotal}</div>
                </div>
                <div className="cart-footer-actions">
                  <button
                    type="button"
                    className="small-btn"
                    onClick={clearCart}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="btn primary"
                    onClick={() => navigate("/booking")} // ✅ Updated checkout
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
