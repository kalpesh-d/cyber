import CyberWhite from '../assets/CyberWhite.svg';

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
    <section className='flex flex-col items-center py-5'>
      <p className='font-semibold text-lg'>{title}</p>
      <ul className='flex flex-col items-center'>
        {items.map((item, index) => (
          <li className='py-2 text-gray-300' key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <section className='container mx-auto px-2 py-8'>
      <section className='gap-6 flex flex-col items-center p-4'>
        <img src={CyberWhite} alt="Cyber" />
        <p className='text-gray-300 leading-7 text-center'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
      </section>

      <div className='flex flex-col justify-center items-center'>
        <List title='Services' items={services} />
        <List title='Assistance to the buyer' items={assistances} />
      </div>
    </section>
  );
}

export default Footer;
