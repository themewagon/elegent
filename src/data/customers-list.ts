import leatrice from 'assets/new-customers/leatrice.png';
import roselle from 'assets/new-customers/roselle.jpg';
import darron from 'assets/new-customers/darron.png';
import jone from 'assets/new-customers/jone.png';

interface CustomerData {
  name: string;
  country: string;
  avatar: string;
}

export const customerList: CustomerData[] = [
  {
    name: 'Roselle Ehrman',
    country: 'Brazil',
    avatar: roselle,
  },
  {
    name: 'Jone Smith',
    country: 'Australia',
    avatar: jone,
  },
  {
    name: 'Darron Handler',
    country: 'Pakistan',
    avatar: darron,
  },
  {
    name: 'Leatrice Kulik',
    country: 'Mascow',
    avatar: leatrice,
  },
];
