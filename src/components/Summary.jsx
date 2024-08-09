import iphone from '../assets/orders/iphone.png'
import headphones from '../assets/orders/headphones.png'
import watch from '../assets/orders/watch.png'

const Summary = () => {
  const orders = [
    { title: "Apple Iphone 14 Pro Max 128Gb", price: 1399, img: iphone },
    { title: "AirPods Max Silver", price: 549, img: headphones },
    { title: "Apple Watch Series 9 GPS 41mm", price: 399, img: watch },
  ]

  const shippingDetails = [
    { title: "Address", value: "1131 Dusty Townline, Jacksonville, TX 40322" },
    { title: "Shipment method", value: "Free" }
  ]

  const charges = [
    { title: 'Estimated Tax', amount: 50 },
    { title: 'Estimated shipping & Handling', amount: 29 },
  ]

  return (
    <section className="rounded-md border p-6 bg-white">
      <p className="font-semibold text-lg py-1">Summary</p>

      {orders.map((order, index) => (
        <div key={index} className='flex justify-between items-center gap-8 my-4 bg-gray-200 rounded-md p-3'>
          <div className='flex items-center gap-4'>
            <img src={order.img} alt={order.title} className='size-10' />
            <p className='text-xs'>{order.title}</p>
          </div>
          <p className='font-semibold text-sm'>${order.price}</p>
        </div>
      ))}

      <div className='my-6'>
        {shippingDetails.map((element, index) => (
          <div key={index} className='my-4'>
            <p className='text-sm text-gray-500 my-1'>{element.title}</p>
            <p className=' my-1'>{element.value}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <p className='font-semibold'>Subtotal</p>
          <p className='font-semibold'>$2347</p>
        </div>

        {charges.map((charge, index) => (
          <div key={index} className='flex justify-between items-center'>
            <p className='text-sm'>{charge.title}</p>
            <p className='font-semibold text-xs'>${charge.amount}</p>
          </div>
        ))}

        <div className='flex justify-between'>
          <p className='font-semibold'>Total</p>
          <p className='font-semibold'>$2426</p>
        </div>
      </div>
    </section>
  )
}

export default Summary