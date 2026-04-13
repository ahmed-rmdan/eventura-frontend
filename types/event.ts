export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  price: number;
  capacity: number;
  booked: number;
  image: string;
  amenities: string[];
  duration: string;
}