import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";

import type { Booking } from "../../types/Booking";

import "./TrainSearch.css";

function TrainSearch() {
    const navigate = useNavigate();

    useEffect(() => {
      const username = localStorage.getItem("username");

      if (!username) {
        navigate({
          to: "/Railway/Login",
        });
      }
    }, []);

    const [booking, setBooking] = useState<Booking>({
      from: "",
      to: "",
      journeyDate: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setBooking((previousBooking) => ({
        ...previousBooking,
        [name]: value,
      }));
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (
        booking.from === "" ||
        booking.to === "" ||
        booking.journeyDate === ""
      ) {
        alert("Please fill all fields.");
        return;
      }

      localStorage.setItem("booking", JSON.stringify(booking));

      navigate({
        to: "/Railway/Train-List",
      });
    };

  return (
    <>
      <Header />

      <Navigation />

      <SearchForm
        booking={booking}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />
    </>
  );
}

export default TrainSearch;
