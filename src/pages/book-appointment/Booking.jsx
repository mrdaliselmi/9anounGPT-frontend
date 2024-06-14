import Navbar from '@/components/book-appointment/Navbar';
import BookAppoint from '@/components/book-appointment/BookAppoint';

export default function Booking() {
  document.title = 'Booking - 9anounGPT';
  return (
    <div>
      <Navbar />
      <BookAppoint />
    </div>
  );
}
