import "./TicketCard.css";

import type { Booking } from "../../types/Booking";
import type { Train } from "../../types/Train";

interface TicketCardProps {
  booking: Booking;
  train: Train;
}

function TicketCard({booking,train,}: TicketCardProps) {

  return (
    <div className="ticket-card">
      <h2>BOOKED TRAIN TICKET</h2>

      <p><strong>Passenger Name :</strong> admin</p>

      <p><strong>From :</strong> {booking.from}</p>

      <p><strong>To :</strong> {booking.to}</p>

      <p><strong>Journey Date :</strong> {booking.journeyDate}</p>

      <p><strong>Train Number :</strong> {train.trainNumber}</p>

      <p><strong>Train Name :</strong> {train.trainName}</p>

      <p><strong>Departure Time :</strong> {train.departureTime}</p>

      <p><strong>Arrival Time :</strong> {train.arrivalTime}</p>

      <p><strong>Coach :</strong> S2</p>

      <p><strong>Seat Number :</strong> 24</p>

      <p>
          <strong>Status :</strong>

          <span className="confirmed">CONFIRMED</span>
      </p>
  </div>
  );
}

export default TicketCard;