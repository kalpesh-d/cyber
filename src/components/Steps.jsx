import Address from '../assets/Location.svg'
import Shipping from '../assets/Shipping.svg'
import Payment from '../assets/Payment.svg'

const Steps = () => {
  const steps = [
    { title: "Address", subtitle: "Step 1", icon: Address },
    { title: "Shipping", subtitle: "Step 2", icon: Shipping },
    { title: "Payment", subtitle: "Step 3", icon: Payment }
  ]

  const Step = ({ title, subtitle, icon }) => {
    return (
      <div className="flex items-center gap-x-1 cursor-pointer">
        <img src={icon} alt={title} className='size-6' />
        <div>
          <p className='text-xs'>{subtitle}</p>
          <p className='text-sm'>{title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex flex-nowrap gap-x-4 p-4 md:p-16 justify-around lg:justify-between">
      {steps.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          subtitle={step.subtitle}
          icon={step.icon}
        />
      ))}
    </div>
  )
}

export default Steps