import {
  IconBriefcase,
  IconCurrencyDollar,
  IconEPassport,
  IconFileInvoice,
  IconGavel,
  IconHeartBroken,
  IconHome,
  IconTie,
} from '@tabler/icons-react';
import React from 'react';

export const questionSamples = [
  {
    id: 0,
    text: 'Quelles sont les peines prévues pour le vol en Tunisie selon le Code pénal ?',
    icon: <IconGavel className="text-red-300" />,
  },
  {
    id: 1,
    text: 'Quelles sont les conditions nécessaires pour demander le divorce en Tunisie ?',
    icon: <IconHeartBroken className="text-cyan-300" />,
  },
  {
    id: 2,
    text: 'Quels sont les droits des employés en cas de licenciement abusif en Tunisie ?',
    icon: <IconBriefcase className="text-green-700" />,
  },
  {
    id: 3,
    text: 'Quels documents sont nécessaires pour acheter une propriété en Tunisie ?',
    icon: <IconHome className="text-blue-300" />,
  },
  {
    id: 4,
    text: "Comment est réparti l'héritage entre les héritiers en Tunisie selon la loi ?",
    icon: <IconFileInvoice className="text-purple-400" />,
  },
  {
    id: 5,
    text: 'Quelles sont les étapes pour créer une société à responsabilité limitée en Tunisie  ',
    icon: <IconTie className="text-orange-300" />,
  },
  {
    id: 6,
    text: 'Quelles sont les conditions nécessaires pour demander un visa Schengen en Tunisie ?',
    icon: <IconEPassport className="text-yellow-400" />,
  },
  {
    id: 7,
    text: 'Quels sont les droits des locataires en cas de non-paiement du loyer en Tunisie ?',
    icon: <IconCurrencyDollar className="text-violet-500" />,
  },
];
