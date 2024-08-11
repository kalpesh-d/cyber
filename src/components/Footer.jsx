import CyberWhite from '../assets/CyberWhite.svg';
import Twitter from '../assets/Twitter.svg';
import Tiktok from '../assets/Tiktok.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';

const Footer = () => {
  const services = [
    'Bonus program',
    'Gift cards',
    'Credit and payment',
    'Service contract',
    'Non-cash account',
    'Payment',
  ];

  const assistances = [
    'Find an order',
    'Terms of delivery',
    'Exchange and return of goods',
    'Guarantee',
    'Frequently asked questions',
    'Terms of use of the site',
  ];

  const List = ({ title, items }) => (
    <section className='flex flex-col items-center gap-4 md:items-start md:ml-16'>
      <p className='font-semibold text-lg'>{title}</p>
      <ul className='flex flex-col items-center md:items-start'>
        {items.map((item, index) => (
          <li className='py-2 text-gray-300' key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <section className='container mx-auto py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:px-12 gap-8 md:gap-0'>
        <section className='gap-8 flex flex-col items-center md:items-start h-full'>
          <img src={CyberWhite} alt="Cyber" />
          <p className='text-gray-300 leading-7 text-center md:text-left'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </section>

        <List title='Services' items={services} />
        <List title='Assistance to the buyer' items={assistances} />

        <section className='flex gap-4 justify-center md:justify-start'>
          <img className='size-6' src={Twitter} alt="Twitter" />
          <img className='size-6' src={Facebook} alt="Facebook" />
          <img className='size-6' src={Tiktok} alt="Tiktok" />
          <img className='size-6' src={Instagram} alt="Instagram" />
        </section>
      </div>
    </section>
  );
}

export default Footer;
