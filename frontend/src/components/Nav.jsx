// import React from 'react'

// const Nav = () => {
//   return (
//     <div className='navbar'>
//         <ul className="navlist">
//             <li>Home</li>
//             <li>Login</li>
//             <li>Resister</li>
//         </ul>
//     </div>
//   )
// }

// export default Nav
import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='flex shadow justify-between bg-black text-white p-3 m-4 rounded-[10px]'  >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/Adminpage">Admin</NavLink></li>
        <li><NavLink to="/Registerpage">Register</NavLink></li>
      </ul>
    </div>
  );
};
export default Nav;
