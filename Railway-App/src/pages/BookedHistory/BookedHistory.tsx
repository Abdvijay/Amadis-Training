import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import type { BookedTicket } from "../../types/BookedTicket";

import "./BookedHistory.css";
import { useNavigate } from "@tanstack/react-router";

function BookedHistory() {

  const navigate = useNavigate();
  const bookedHistory: BookedTicket[] = JSON.parse(
    localStorage.getItem("bookedHistory") || "[]",
  );

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      navigate({
        to: "/Railway/Login",
      });
    }
  }, []);

  return (
    <>
      <Header />
      <Navigation />

      <div className="history-container">
        <h2>Booked History</h2>

        {bookedHistory.length === 0 ? (
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              fontSize: "25px",
              fontWeight: "600",
              color: "gray",
            }}
          >
            No Tickets Booked
          </h3>
        ) : (
          bookedHistory.map((ticket, index) => (
            <div key={index} className="history-card">
              <h3>{ticket.train.trainName}</h3>

              <p>Train No :{ticket.train.trainNumber}</p>

              <p>
                {ticket.booking.from}→{ticket.booking.to}
              </p>

              <p>Journey :{ticket.booking.journeyDate}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default BookedHistory;