import React from 'react';
import LayoutWidth from '../common/LayoutWidth';

function Footer() {
  const icons = ['fa-instagram', 'fa-facebook', 'fa-twitter'];
  return (
    <div className='bg-[#022439] p-12'>
      <LayoutWidth>
        <div className='flex justify-center '>
          <img
            className='w-48'
            src='https://res.cloudinary.com/df8w69xon/image/upload/v1689006600/Companion%20web%20application/companion/uisxjofcjvza0gzuzgkw.png'
            alt='Companion'
          />
        </div>
        <div className='font-sans text-gray-400 font-bold text-lg flex justify-between my-12'>
          <p>About Us</p>
          <p>Terms and Conditons</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
        </div>
        <div className='flex justify-center'>
          {icons.map((icons, i) => {
            return (
              <i
                key={i}
                className={` fa-brands ${icons} py-7 mx-10 fa-2xl text-[#9ca2ae]`}
              ></i>
            );
          })}
        </div>
      </LayoutWidth>
    </div>
  );
}

export default React.memo(Footer);
