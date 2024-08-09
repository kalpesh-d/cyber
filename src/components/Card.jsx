import CreditCard from '../assets/CreditCard.svg'

const Card = () => {
  return (
    <div className='pt-6'>
      <img src={CreditCard} alt="Credit Card" />
      <div className="text-xl relative bottom-20 left-4 tracking-widest text-white" >
        4085 9536 8475 9530
      </div >
    </div>
  );
};

export default Card;