import "./TrainCard.css";

import type { Train } from "../../types/Train";

interface TrainCardProps {
  train: Train;
  onBook: (train: Train) => void;
}

function TrainCard({train, onBook,}: TrainCardProps) {
  return (
    <div className="train-card">
      <div className="train-details">
        <h3>{train.trainNumber}</h3>

        <h2>{train.trainName}</h2>

        <p>Departure :{train.departureTime}</p>

        <p>Arrival :{train.arrivalTime}</p>
      </div>

      <button className="book-button" onClick={() => onBook(train)}>
        Book
      </button>
    </div>
  );
}

export default TrainCard;