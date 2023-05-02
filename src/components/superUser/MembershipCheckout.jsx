import React, {useState} from "react";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { postApi } from "../../api/axiosCalls";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MembershipCheckout() {

    const [plan, setPlan] = useState('Silver')
    const [amount,setAmount]=useState(5)
    const navigate=useNavigate()
    const handlePaymentSuccess=()=>{
        postApi('/paymentcomplete',{plan},(response)=>{
            const {superUserToken,status,message}=response.data
            if(superUserToken){
                if(status){
                    navigate('/superuser/profile')
                    toast.success(message)
                }
                else{
                    toast.error(message)
                }
            }
            else{
                toast.error(message)
            }
        })
    }
    return (
        <div className="relative mx-auto w-full bg-white">
            <div className="grid min-h-full grid-cols-10">
                <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                    <div className="mx-auto w-full max-w-lg">
                        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                            Secure Checkout
                            <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
                        </h1>
                        <form action="" className="mt-10 flex flex-col space-y-4 mb-5">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="department">
                                    Select Plan
                                </label>
                                <div className="relative">
                                    <select className="text-gray-900 mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" id="department"
                                        onChange={
                                            (e) => {
                                                setPlan(e.target.value)
                                                setAmount(e.target.value==='Gold'?10:5)
                                            }
                                    }>
                                        <option value={'Silver'}>Silver</option>
                                        <option value={'Gold'}>Gold</option>

                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>

                                </div>
                            </div>
                        </form>
                                {/* eslint-disable-next-line no-undef*/}
                        <PayPalScriptProvider options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
                            <PayPalButtons
                            createOrder={(data,actions)=>{return actions.order.create({purchase_units:[{amount:{value:amount.toString()}}]})}}
                            onApprove={async (data,actions)=>{
                              await actions.order.capture()
                              handlePaymentSuccess()
                              console.log(plan)
                              console.log(amount);
                            }}
                            onCancel={()=>{toast.error('Payment cancelled')}}
                            on
                            onError={()=>{toast.error('Payment failed') }}/>
                            {console.log(plan)}
                            {console.log(amount)}
                        </PayPalScriptProvider>
                    </div>
                </div>
                <div className=" relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                    <h2 className="sr-only">Order summary</h2>
                    <div>
                        <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
                    </div>
                    <div className="relative">
                        <ul className="space-y-5">
                            <li className="flex justify-between">
                                <div className="inline-flex">
                                    <div className="w-10 h-10 bg-amber-600 rounded"></div>
                                    <div className="ml-3">
                                        <p className="text-base font-semibold text-white">
                                            {plan} </p>
                                        <p className="text-sm font-medium text-white text-opacity-80">
                                            Membership details
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-white">${amount}</p>
                            </li>
                        </ul>
                        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                        <div className="space-y-2">
                            <p className="flex justify-between text-lg font-bold text-white">
                                <span>Total price:</span>
                                <span>${amount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MembershipCheckout;
