import avgRevenue from 'assets/sale-info/avg-revenue.png';
import customers from 'assets/sale-info/customers.png';
import sales from 'assets/sale-info/sales.png';

interface SaleInfoData {
  image: string;
  title: string;
  sales: string;
  increment: number;
  date: string;
}

export const saleInfoData: SaleInfoData[] = [
  {
    image: sales,
    title: 'Sales',
    sales: '230,220',
    increment: 55,
    date: 'May 2022',
  },
  {
    image: customers,
    title: 'Customers',
    sales: '3,200',
    increment: 12,
    date: 'May 2022',
  },
  {
    image: avgRevenue,
    title: 'Avg Revenue',
    sales: '2,300',
    increment: 210,
    date: 'May 2022',
  },
];
