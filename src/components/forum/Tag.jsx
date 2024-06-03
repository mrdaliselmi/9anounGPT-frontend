import { NavLink } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { cn } from '@/utils.js';

export default function Tag({ name, className }) {
  return (
    <NavLink to={`/forum/questions?search=[${name}]`}>
      <Badge className={cn('bg-cyan-800 flex cursor-pointer', className)}>
        {name}
      </Badge>
    </NavLink>
  );
}
