import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader({ onLogout }) {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-lg">
      <h1 className="text-xl font-bold ml-24">Admin Panel</h1>
      <nav>
        <ul className="flex space-x-6 gap-32">
          <li>
            <Link to="/admin/addrecipe" className="hover:text-yellow-300 transition duration-200">Add Recipes</Link>
          </li>
          <li>
          <Link to="/admin/alluserorder" className="hover:text-yellow-300 transition duration-200">Check All User Orders</Link>
          </li><li>
          <Link to="/food" className="hover:text-yellow-300 transition duration-200">Foods</Link>
          </li>
          <li>
            <Link to={'/auth'}><button onClick={onLogout}
            className="hover:text-yellow-300 transition duration-200"
            >
              Logout
            </button>
         </Link>
           </li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminHeader;
