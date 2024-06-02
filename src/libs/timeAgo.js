export default function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const differenceInMilliseconds = now - date;

  const minutes = Math.floor(differenceInMilliseconds / 1000 / 60);
  const hours = Math.floor(differenceInMilliseconds / 1000 / 60 / 60);
  const days = Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24);

  if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }
  if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }
  if (minutes > 0) {
    return minutes === 1 ? '1 min ago' : `${minutes} mins ago`;
  }
  return 'just now';
}
