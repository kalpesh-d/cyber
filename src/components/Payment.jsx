import Card from "./Card"
import InputField from "./InputField"

const Payment = () => {
  return (
    <section className="px-2 sm:px-8 mx-auto py-4">
      <p className="font-semibold text-lg py-4">Payment</p>
      <div className="flex gap-x-12 text-xs sm:text-sm">
        <button className="border-b-2 border-black font-semibold">Credit Card</button>
        <button>PayPal</button>
        <button>PayPal Credit</button>
      </div>
      <Card />

      <div className="w-full max-w-sm my-4">
        <div className="grid grid grid-cols-1">
          <InputField type="text" placeholder="Cardholder Name" className="col-span-2" />
          <InputField type="text" placeholder="Card Number" className="col-span-2" maxLength={16} pattern="\d{16}" />
          <div className="grid grid-cols-2">
            <InputField type="text" placeholder="Exp. Date" maxLength={5} pattern="\d{2}/\d{2}" />
            <InputField type="text" placeholder="CVV" maxLength={3} pattern="\d{3}" />
          </div>
        </div>
      </div>

      <div className="flex items-center my-8 gap-x-2">
        <input type="checkbox" name="Same as billing address" id="address" className="h-3 w-3 accent-slate-900" />
        <label className="text-sm" htmlFor="address">Same as billing address</label>
      </div>

      <div className="flex text-sm gap-4">
        <button className="h-12 w-full border border-gray-950 rounded-md">Back</button>
        <button className="h-12 w-full bg-[#000000] rounded-md text-white">Pay</button>
      </div>
    </section>
  )
}

export default Payment