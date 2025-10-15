// import React, { useEffect, useState } from "react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);

//   // Load all bookings from localStorage
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(stored);
//   }, []);

//   // Update status (Approve/Reject)
//   const updateStatus = (index, status) => {
//     const updated = [...bookings];
//     updated[index].status = status;
//     setBookings(updated);
//     localStorage.setItem("bookings", JSON.stringify(updated));
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard 👩‍💼</h1>
//       <h2>Manage Bookings</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings available.</p>
//       ) : (
//         <table className="booking-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Customer</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Location</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Service Description</th>
//               <th>Status</th>
//               <th>Actions</th>
//               <th>Review</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{b.fullName}</td>
//                 <td>{b.email}</td>
//                 <td>{b.phone}</td>
//                 <td>{b.location}</td>
//                 <td>{b.preferredDate}</td>
//                 <td>{b.preferredTime}</td>
//                 <td>{b.serviceDescription || "—"}</td>
//                 <td>
//                   <span
//                     className={`status ${b.status ? b.status.toLowerCase() : "pending"}`}
//                   >
//                     {b.status || "Pending"}
//                   </span>
//                 </td>
//                 <td>
//                   <button
//                     className="approve"
//                     onClick={() => updateStatus(index, "Approved")}
//                     disabled={b.status === "Approved"}
//                   >
//                     Approve
//                   </button>
//                   <button
//                     className="reject"
//                     onClick={() => updateStatus(index, "Rejected")}
//                     disabled={b.status === "Rejected"}
//                   >
//                     Reject
//                   </button>
//                 </td>
//                 <td>
//                   {b.review ? (
//                     <div className="review-cell">
//                       <p><strong>⭐ {b.rating} / 5</strong></p>
//                       <p>{b.review}</p>
//                     </div>
//                   ) : (
//                     <span className="no-review">No review yet</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const adminPin = "1234567890"; // 🔒 You can change this PIN

  // Load all bookings from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  // Update booking status (Approve / Reject)
  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index].status = status;
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  // Handle PIN submission
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (enteredPin === adminPin) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Incorrect PIN. Try again!");
      setEnteredPin("");
    }
  };

  // 🔐 Login Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h1>🔐 Admin Access</h1>
        <p>Please enter the admin PIN to access the dashboard.</p>
        <form onSubmit={handlePinSubmit} className="pin-form">
          <input
            type="password"
            value={enteredPin}
            onChange={(e) => setEnteredPin(e.target.value)}
            placeholder="Enter PIN"
            maxLength={10}
            required
          />
          <button type="submit" className="btn primary">
            Enter
          </button>
        </form>
      </div>
    );
  }

  // ✅ Dashboard after login
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard 👩‍💼</h1>
      <h2>Manage Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service Description</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{b.fullName}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.location}</td>
                <td>{b.preferredDate}</td>
                <td>{b.preferredTime}</td>
                <td>{b.serviceDescription || "—"}</td>
                <td>
                  <span
                    className={`status ${
                      b.status ? b.status.toLowerCase() : "pending"
                    }`}
                  >
                    {b.status || "Pending"}
                  </span>
                </td>
                <td>
                  <button
                    className="approve"
                    onClick={() => updateStatus(index, "Approved")}
                    disabled={b.status === "Approved"}
                  >
                    Approve
                  </button>
                  <button
                    className="reject"
                    onClick={() => updateStatus(index, "Rejected")}
                    disabled={b.status === "Rejected"}
                  >
                    Reject
                  </button>
                </td>
                <td>
                  {b.review ? (
                    <div className="review-cell">
                      <p>
                        <strong>⭐ {b.rating} / 5</strong>
                      </p>
                      <p>{b.review}</p>
                    </div>
                  ) : (
                    <span className="no-review">No review yet</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
