import Step from "./Step";
import Address from '../assets/Location.svg'
import Shipping from '../assets/Shipping.svg'
import Payment from '../assets/Payment.svg'

const Steps = () => {
  const steps = [
    { title: "Address", subtitle: "Step 1", icon: Address },
    { title: "Shipping", subtitle: "Step 2", icon: Shipping },
    { title: "Payment", subtitle: "Step 3", icon: Payment }
  ]

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