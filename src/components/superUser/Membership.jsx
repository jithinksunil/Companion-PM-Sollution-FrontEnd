import React from 'react'
import { Link } from 'react-router-dom'

function Membership({ superUser }) {

  return (

    <div className='bg-white text-black shadow-2xl rounded-xl p-10 '>
      <div>
        <p>Name: {superUser?.name}</p>
      </div>
      <div>
        <p>Email: {superUser?.email}</p>
      </div>
      <div>
        <p>Company name: {superUser?.companyName}</p>
      </div>
      <div>
        <p>Membership: {superUser?.membership}</p>
      </div>
      <Link to='/superUser/membershipupgrade'>
        <button
          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button">
          Upgrade
        </button>
      </Link>
    </div>
  )
}

export default Membership
