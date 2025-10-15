// import React, { useState } from "react";
// import "./Listings.css";

// const Listings = () => {
//   const [services, setServices] = useState([
//     {
//       id: 1,
//       name: "Plumbing Services",
//       address: "Hyderabad Infosys",
//       category: "Plumbing",
//       image: "https://cdn-icons-png.flaticon.com/512/2933/2933076.png",
//     },
//     {
//       id: 2,
//       name: "Electrical Repairs",
//       address: "Banglore Infosys",
//       category: "Electrical",
//       image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
//     },
//     {
//       id: 3,
//       name: "Gardening Services",
//       address: "Chennai Infosys",
//       category: "Gardening",
//       image: "https://cdn-icons-png.flaticon.com/512/4275/4275640.png",
//     },
//     {
//         id: 4,
//         name: "Cleaning Services",
//         address: "Pune Infosys",
//         category: "Cleaning",
//         image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
//     },
//     {
//         id: 5,
//         name: "Office Electrical",
//         address: "Noida Infosys",
//         category: "Electrical",
//         image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
//     },
//     {
//         id: 6,
//         name: "Deep Cleaning",
//         address: "Chandigarh Infosys",
//         category: "Cleaning",
//         image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
//     },
//     {
//         id: 7,
//         name: "Garden Maintenance",
//         address: "Mumbai Infosys",
//         category: "Gardening",
//         image: "https://cdn-icons-png.flaticon.com/512/4275/4275640.png",
//     },
    
    
    
//   ]);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("");
//   const [form, setForm] = useState({ id: null, name: "", address: "", category: "", image: "" });
//   const [isEditing, setIsEditing] = useState(false);

//   // ✅ Handle form input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Add or Update Listing
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.address || !form.category) return;

//     if (isEditing) {
//       setServices(
//         services.map((s) => (s.id === form.id ? { ...form } : s))
//       );
//       setIsEditing(false);
//     } else {
//       setServices([
//         ...services,
//         { ...form, id: Date.now(), image: form.image || "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
//       ]);
//     }

//     setForm({ id: null, name: "", address: "", category: "", image: "" });
//   };

//   // ✅ Edit Listing
//   const handleEdit = (service) => {
//     setForm(service);
//     setIsEditing(true);
//   };

//   // ✅ Delete Listing
//   const handleDelete = (id) => {
//     setServices(services.filter((s) => s.id !== id));
//   };

//   // ✅ Filtered services
//   const filteredServices = services.filter((s) => {
//     return (
//       (s.name.toLowerCase().includes(search.toLowerCase()) ||
//         s.address.toLowerCase().includes(search.toLowerCase())) &&
//       (filter === "" || s.category === filter)
//     );
//   });

//   return (
//     <div className="listings-container">
//       <h2>📋 My Listings</h2>

//       {/* Add/Edit Form */}
//       <form className="listing-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Service Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Service Address"
//           value={form.address}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Category</option>
//           <option value="Plumbing">Plumbing</option>
//           <option value="Electrical">Electrical</option>
//           <option value="Gardening">Gardening</option>
//           <option value="Cleaning">Cleaning</option>
//         </select>
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL (optional)"
//           value={form.image}
//           onChange={handleChange}
//         />
//         <button type="submit">{isEditing ? "Update" : "Add"} Service</button>
//       </form>

//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="🔍 Search for services"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       {/* Filter buttons */}
//       <div className="filter-buttons">
//         {["Plumbing", "Electrical", "Gardening", "Cleaning"].map((cat) => (
//           <button
//             key={cat}
//             className={filter === cat ? "active" : ""}
//             onClick={() => setFilter(filter === cat ? "" : cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Services list */}
//       <div className="services-list">
//         {filteredServices.map((service) => (
//           <div key={service.id} className="service-card">
//             <img src={service.image} alt={service.name} />
//             <div className="service-info">
//               <h3>{service.name}</h3>
//               <p>{service.address}</p>
//               <p className="category">📂 {service.category}</p>
//               <div className="card-actions">
//                 <button className="book-btn">Book Now</button>
//                 <button className="edit-btn" onClick={() => handleEdit(service)}>✏️ Edit</button>
//                 <button className="delete-btn" onClick={() => handleDelete(service.id)}>🗑 Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//         {filteredServices.length === 0 && (
//           <p className="no-results">❌ No services found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Listings;


















import React, { useState } from "react";
import "./Listings.css";

const Listings = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Men Salon And Spa", address: "Hyderabad", category: "Barber", Price: "150", image: "https://cdn-icons-png.flaticon.com/512/2933/2933076.png" },
    { id: 2, name: "AC Repairing", address: "Hyderabad", category: "Home Appliance Repair", image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png" },
    { id: 3, name: "Deep Cleaning Services", address: "Hyderabad", category: "Cleaning", image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
    { id: 4, name: "Electrician", address: "Hyderabad", category: "Electrical", image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png" },
    { id: 5, name: "Carpet Cleaning", address: "Hyderabad", category: "Cleaning", image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
    { id: 6, name: "Plumber", address: "Hyderabad", category: "Plumbing", image: "https://cdn-icons-png.flaticon.com/512/2933/2933076.png" },
    { id: 7, name: "Home Painting", address: "Hyderabad", category: "Home Improvement", image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
    { id: 8, name: "Washing Machine", address: "Hyderabad", category: "Electrical", image: "https://cdn-icons-png.flaticon.com/512/4275/4275640.png" },
    { id: 9, name: "Refrigrator", address: "Hyderabad", category: "Electrical", image: "https://cdn-icons-png.flaticon.com/512/4275/4275640.png" },
    { id: 10, name: "Gardening", address: "Hyderabad", category: "Gardening", image: "https://cdn-icons-png.flaticon.com/512/4275/4275640.png" },
    
  ]);

  const [form, setForm] = useState({ id: null, name: "", address: "", category: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update listing
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.category) return;

    if (isEditing) {
      setServices(services.map((s) => (s.id === form.id ? { ...form } : s)));
      setIsEditing(false);
    } else {
      setServices([
        ...services,
        { ...form, id: Date.now(), image: form.image || "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
      ]);
    }
    setForm({ id: null, name: "", address: "", category: "", image: "" });
  };

  // Edit listing
  const handleEdit = (service) => {
    setForm(service);
    setIsEditing(true);
  };

  // Delete listing
  const handleDelete = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  // Filtered services
  const filteredServices = services.filter(
    (s) =>
      (s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.address.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "" || s.category === filter)
  );

  return (
    <div className="listings-container">
      <h2>📋 My Listings</h2>

      {/* Add/Edit Form */}
      <form className="listing-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Service Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Service Address" value={form.address} onChange={handleChange} required />
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Gardening">Gardening</option>
          <option value="Cleaning">Cleaning</option>
        </select>
        <input type="text" name="image" placeholder="Image URL (optional)" value={form.image} onChange={handleChange} />
        <button type="submit">{isEditing ? "Update" : "Add"} Service</button>
      </form>

      {/* Search bar */}
      <input type="text" placeholder="🔍 Search for services" value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />

      {/* Filter buttons */}
      <div className="filter-buttons">
        {["Plumbing", "Electrical", "Gardening", "Cleaning"].map((cat) => (
          <button key={cat} className={filter === cat ? "active" : ""} onClick={() => setFilter(filter === cat ? "" : cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Services list */}
      <div className="services-list">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.address}</p>
              <p className="category">📂 {service.category}</p>
              <div className="card-actions">
                <button className="book-btn">Book Now</button>
                <button className="edit-btn" onClick={() => handleEdit(service)}>
                  ✏️ Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(service.id)}>
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredServices.length === 0 && <p className="no-results">❌ No services found</p>}
      </div>
    </div>
  );
};

export default Listings;

