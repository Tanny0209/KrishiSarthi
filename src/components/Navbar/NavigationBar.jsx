import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import star from '../../assets/star.png';
import bell from '../../assets/bell.png';
import person from '../../assets/person.png';
import translateIcon from '../../assets/translator.png';
import locationIcon from '../../assets/location.png';

// Sample districts of Maharashtra (replace with your actual data)
const maharashtraDistricts = [
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara",
  "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli",
  "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
  "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
  "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg",
  "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
];

function NavigationBar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(null); // Track which dropdown is currently shown
  const [selectedLocation, setSelectedLocation] = useState(maharashtraDistricts[0]); // Default to first district
  const [dropdownPosition, setDropdownPosition] = useState({}); // Track the position of the dropdown

  const dropdownRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle location selection and close dropdown
  const handleLocationSelect = (district) => {
    setSelectedLocation(district);
    setShowDropdown(null); // Close dropdown after selection
  };

  // Toggle dropdown visibility and set its position
  const toggleDropdown = (dropdown, event) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Get the position of the button
    setDropdownPosition({ left: rect.left, top: rect.bottom }); // Set the dropdown position dynamically
    setShowDropdown((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="KrishiSarthi Logo" />
        <span className="logo-text">KrishiSarthi</span>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="nav-links" ref={dropdownRef}>
        {/* Translator Dropdown */}
        <div
          className="nav-link"
          onClick={(e) => toggleDropdown("translator", e)}
        >
          <img src={translateIcon} alt="Translator" />
          {showDropdown === "translator" && (
            <div
              className="translator-dropdown"
              style={{ left: dropdownPosition.left, top: dropdownPosition.top }}
            >
              <button className="dropdown-item">English</button>
              <button className="dropdown-item">मराठी</button>
            </div>
          )}
        </div>

        {/* Location Dropdown */}
        <div
          className="nav-link"
          onClick={(e) => toggleDropdown("location", e)}
        >
          <img src={locationIcon} alt="Location" />
          <span>{selectedLocation}</span>
          {showDropdown === "location" && (
            <div
              className="location-dropdown"
              style={{ left: dropdownPosition.left, top: dropdownPosition.top }}
            >
              {maharashtraDistricts.map((district) => (
                <button
                  key={district}
                  className="dropdown-item"
                  onClick={() => handleLocationSelect(district)}
                >
                  {district}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Other Icons */}
        <button
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Watchlist")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={star} alt="Watchlist" />
          {hoveredIcon === "Watchlist" && (
            <div className="tooltip">Watchlist</div>
          )}
        </button>

        <button
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Notification")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={bell} alt="Notification" />
          {hoveredIcon === "Notification" && (
            <div className="tooltip">Notification</div>
          )}
        </button>

        <button
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Profile")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={person} alt="Profile" />
          {hoveredIcon === "Profile" && <div className="tooltip">Profile</div>}
        </button>
      </div>

      <style jsx>{`
        .nav-bar {
          // position: sticky;
          // top: 0px;
          // z-index: 111;
          background-color: #228b22;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 75px;
          white-space: nowrap;
          box-sizing: border-box;
          overflow-x: auto; /* Enable horizontal scrolling */
          overflow-y: hidden; /* Disable vertical scrolling */
        }

        .nav-bar::-webkit-scrollbar {
          height: 6px; /* Adjust the height of the scrollbar */
        }

        .nav-bar::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
        }

        .nav-bar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }

        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-container img {
          width: 50px;
          height: 50px;
          margin-right: 0.5rem;
        }

        .logo-text {
          font-size: 24px;
          color: #ffffff;
          font-weight: bold;
        }

        input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 16px;
          width: 300px;
          max-width: 100%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          position: relative;
          cursor: pointer;
        }

        .nav-link img {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
        }

        .translator-dropdown,
        .location-dropdown {
          position: fixed; /* Fixed to avoid clipping */
          background-color: #fff;
          padding: 8px 0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          width: 200px;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .dropdown-item {
          padding: 8px 12px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-bottom: 1px solid #ccc;
        }

        .tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          padding: 8px 12px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .nav-bar {
            padding: 0.5rem;
            height: auto;
            overflow-x: auto;
            overflow-y: hidden;
          }

          .logo-text {
            font-size: 20px;
          }

          input {
            width: 100%;
            max-width: 200px;
          }

          .nav-links {
            gap: 0.5rem;
          }

          .nav-link img {
            width: 20px;
            height: 20px;
          }

          .translator-dropdown,
          .location-dropdown {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </nav>
  );
}

export default NavigationBar;
