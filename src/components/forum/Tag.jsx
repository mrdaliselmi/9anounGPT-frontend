import { NavLink } from 'react-router-dom';
import { Badge } from '../ui/badge';

export default function Tag({ name }) {
  return (
    <NavLink to={`/forum/questions?search=[${name}]`}>
      <Badge className="bg-cyan-800 flex cursor-pointer">{name}</Badge>
    </NavLink>
  );
}
