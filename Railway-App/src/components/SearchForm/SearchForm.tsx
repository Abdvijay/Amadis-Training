import "./SearchForm.css";
import type { Booking } from "../../types/Booking";

interface SearchFormProps {
  booking: Booking;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchForm({booking, onInputChange, onSearch,}: SearchFormProps) {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <h2>Train Search</h2>

      <label>From</label>
      <input
        type="text"
        name="from"
        value={booking.from}
        onChange={onInputChange}
        placeholder="Enter Source"
      />

      <label>To</label>
      <input
        type="text"
        name="to"
        value={booking.to}
        onChange={onInputChange}
        placeholder="Enter Destination"
      />

      <label>Journey Date</label>
      <input
        type="date"
        name="journeyDate"
        value={booking.journeyDate}
        onChange={onInputChange}
      />

      <button type="submit">Search Train</button>
    </form>
  );
}

export default SearchForm;