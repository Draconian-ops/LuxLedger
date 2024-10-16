import React, { useState } from 'react';
import { HiOutlineHome, HiOutlineCurrencyDollar, HiOutlineCreditCard, HiOutlineEye, HiOutlineChartBar, HiOutlineTrendingUp, HiOutlineFlag } from 'react-icons/hi';
import './App.css';
import logo from './logo.svg'; // Adjust the path as necessary



function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const items = [
    { id: 1, icon: <HiOutlineHome />, label: 'Dashboard' },
    { id: 2, icon: <HiOutlineCurrencyDollar />, label: 'Transactions' },
    { id: 3, icon: <HiOutlineCreditCard />, label: 'Bills and Payments' },
    { id: 4, icon: <HiOutlineEye />, label: 'Watchlist' },
    { id: 5, icon: <HiOutlineChartBar />, label: 'Reports' },
    { id: 6, icon: <HiOutlineTrendingUp />, label: 'Investments' },
    { id: 7, icon: <HiOutlineFlag />, label: 'Goals' },
  ];

  return (
    <div className="container">
      <div className="leftPane">
        {/* Top section with hamburger menu */}
        <div className="topSection">
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logoText">LuxLedger</span>
        </div>
          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Middle section with the icon list */}
        <div className={`middleSection ${menuOpen ? 'show' : 'hide'}`}>
          <ul className="iconList">
            {items.map((item) => (
              <li
                key={item.id}
                className={`listItem ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => setActiveItem(item.id)}
              >
                {item.icon}
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content for the right pane */}
      <div className="rightPane">
        {/* Right pane content goes here */}
      </div>
    </div>
  );
}

export default App;



