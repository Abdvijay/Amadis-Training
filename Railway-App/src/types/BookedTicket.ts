import { Booking } from "./Booking";
import { Train } from "./Train";

export interface BookedTicket {
    username: string;
    booking: Booking;
    train: Train;
}