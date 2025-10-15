// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookingHistory.css";

// const BookingHistory = () => {
//   const navigate = useNavigate();
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(savedBookings);
//   }, []);

//   const handleReviewSubmit = (index, review, rating) => {
//     const updatedBookings = [...bookings];
//     updatedBookings[index].review = review;
//     updatedBookings[index].rating = rating;

//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//     setBookings(updatedBookings);
//     alert("✅ Review submitted successfully!");
//   };

//   return (
//     <div className="history-container">
//       <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>
//       <h1>📖 Booking History</h1>

//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         bookings.map((booking, index) => (
//           <div key={index} className="booking-card">
//             <h2>{booking.fullName}</h2>
//             <p><strong>Email:</strong> {booking.email}</p>
//             <p><strong>Phone:</strong> {booking.phone}</p>
//             <p><strong>Location:</strong> {booking.location}</p>
//             <p><strong>Date:</strong> {booking.preferredDate}</p>
//             <p><strong>Time:</strong> {booking.preferredTime}</p>
//             <p><strong>Services:</strong></p>
//             <ul>
//               {booking.services.map((s, i) => (
//                 <li key={i}>{s.name} — ${s.price}</li>
//               ))}
//             </ul>

//             {/* Review Section */}
//             {booking.review ? (
//               <div className="review-box">
//                 <p><strong>⭐ Rating:</strong> {booking.rating} / 5</p>
//                 <p><strong>Review:</strong> {booking.review}</p>
//               </div>
//             ) : (
//               <ReviewForm
//                 onSubmit={(review, rating) => handleReviewSubmit(index, review, rating)}
//               />
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// const ReviewForm = ({ onSubmit }) => {
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(5);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!review.trim()) return alert("Please enter your review");
//     onSubmit(review, rating);
//   };

//   return (
//     <form className="review-form" onSubmit={handleSubmit}>
//       <label>
//         Rating:
//         <select value={rating} onChange={(e) => setRating(e.target.value)}>
//           <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
//           <option value={4}>⭐⭐⭐⭐ (4)</option>
//           <option value={3}>⭐⭐⭐ (3)</option>
//           <option value={2}>⭐⭐ (2)</option>
//           <option value={1}>⭐ (1)</option>
//         </select>
//       </label>

//       <label>
//         Review:
//         <textarea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           placeholder="Write your feedback..."
//           required
//         />
//       </label>

//       <button type="submit" className="btn primary">Submit Review</button>
//     </form>
//   );
// };

// export default BookingHistory;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingHistory.css";

const BookingHistory = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleReviewSubmit = (index, review, rating) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].review = review;
    updatedBookings[index].rating = rating;

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    alert("✅ Review submitted successfully!");
  };

  const getStatusDisplay = (status) => {
    if (status === "Approved") return { label: "✅ Approved", className: "approved" };
    if (status === "Rejected") return { label: "❌ Rejected", className: "rejected" };
    return { label: "🕓 Pending", className: "pending" };
  };

  return (
    <div className="history-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <h1>📖 Booking History</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => {
          const { label, className } = getStatusDisplay(booking.status);
          const isApproved = booking.status === "Approved";

          return (
            <div key={index} className="booking-card">
              <div className={`status-badge ${className}`}>{label}</div>

              <h2>{booking.fullName}</h2>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Location:</strong> {booking.location}</p>
              <p><strong>Date:</strong> {booking.preferredDate}</p>
              <p><strong>Time:</strong> {booking.preferredTime}</p>

              <p><strong>Services:</strong></p>
              <ul>
                {booking.services.map((s, i) => (
                  <li key={i}>{s.name} — ${s.price}</li>
                ))}
              </ul>

              {/* Review Section */}
              {isApproved ? (
                booking.review ? (
                  <div className="review-box">
                    <p><strong>⭐ Rating:</strong> {booking.rating} / 5</p>
                    <p><strong>Review:</strong> {booking.review}</p>
                  </div>
                ) : (
                  <ReviewForm
                    onSubmit={(review, rating) => handleReviewSubmit(index, review, rating)}
                  />
                )
              ) : (
                <p className="review-lock-msg">
                  🔒 You can submit a review once your booking is approved.
                </p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.trim()) return alert("Please enter your review");
    onSubmit(review, rating);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>
      </label>

      <label>
        Review:
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your feedback..."
          required
        />
      </label>

      <button type="submit" className="btn primary">Submit Review</button>
    </form>
  );
};

export default BookingHistory;
