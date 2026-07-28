import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import TrainCard from "../../components/TrainCard/TrainCard";
import { trainData } from "../../data/TrainData";
import { useNavigate } from "@tanstack/react-router";
import type { Train } from "../../types/Train";

import type { Booking } from "../../types/Booking";
import type { BookedTicket } from "../../types/BookedTicket";

import "./TrainList.css";
import { useEffect } from "react";

function TrainList() {
  const booking: Booking = JSON.parse(localStorage.getItem("booking") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      navigate({
        to: "/",
      });
    }
  }, []);

  const handleBook = (train: Train) => {
    const username = localStorage.getItem("username") || "";
    const bookedTicket: BookedTicket = {
        username,
        booking,
        train,
    };

    localStorage.setItem("selectedTrain", JSON.stringify(bookedTicket));

    const bookedHistory: BookedTicket[] = JSON.parse(
        localStorage.getItem("bookedHistory") || "[]"
    );

    bookedHistory.push(bookedTicket);

    localStorage.setItem("bookedHistory", JSON.stringify(bookedHistory));
    navigate({
      to: "/Railway/Booked-Ticket",
    });
  };

  return (
    <>
      <Header />

      <Navigation />

      <div>
        {trainData.map((train) => (
          <TrainCard
            key={train.trainNumber}
            train={train}
            onBook={handleBook}
          />
        ))}
      </div>
    </>
  );
}

export default TrainList;