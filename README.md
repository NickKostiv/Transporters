# Transporters Website

Welcome to the Transporters website repository! This project is a React application built with Next.js and styled with Tailwind CSS, animated with AOS. It provides information about a company specializing in cargo transportation via water, road, and air. 

## 🚛🛫🚢 Overview

Transporters is a fictitious company dedicated to delivering goods efficiently across various modes of transportation. This website serves as a platform to showcase the company's services, fleet, and contact information.

## 🛠 Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/transporters-website.git`
2. Navigate to the project directory: `cd transporters-website`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000` to view the website.

## 📱 Custom Hook - `useMobileView`

The useMobileView hook helps determine whether the current viewport is considered a mobile view based on the provided maxWidth. Here's how you can use it:


import { useState, useEffect } from "react";

function useMobileView(maxWidth: number) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < maxWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobileView;
}

export default useMobileView;


## 🧭 Components - `Header`

The `Header` component provides navigation functionality and dropdown menus. Here's an overview:


import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      event.target instanceof Node &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  // JSX rendering and return statement
};

export default Header;



## 📝 Contribution

Welcome contributions to enhance the Transporters website. Feel free to open issues for feature requests or bug reports, and submit pull requests with improvements. Let's make cargo transportation smoother together!
