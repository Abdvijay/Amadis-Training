import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import TicketCard from "../../components/TicketCard/TicketCard";
import type { BookedTicket } from "../../types/BookedTicket";
import "./BookedTicket.css";

function BookedTicket() {

    const bookedTicket: BookedTicket = JSON.parse(
      localStorage.getItem("selectedTrain") || "{}",
    );

    return (
      <>
        <Header />
        <Navigation />
        <TicketCard booking={bookedTicket.booking} train={bookedTicket.train} />
      </>
    );
}

export default BookedTicket;