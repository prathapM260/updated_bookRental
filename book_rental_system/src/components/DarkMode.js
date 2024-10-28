// import React from "react";
// import LightPng from "../Assets/light-mode-button.png";
// import DarkPng from "../Assets/dark-mode-button.png";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const element = document.documentElement; // html element

//   React.useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="relative">
//       <img
//         src={LightPng}
//         alt="Light Mode"
//         onClick={toggleTheme}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         }`}
//       />
//       <img
//         src={DarkPng}
//         alt="Dark Mode"
//         onClick={toggleTheme}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

// export default DarkMode;



import React from "react";
import LightPng from "../Assets/light-mode-button.png";
import DarkPng from "../Assets/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative w-10 h-[40px] flex items-center justify-center">
      <img
        src={LightPng}
        alt="Light Mode"
        onClick={toggleTheme}
        className={`w-10 h-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={DarkPng}
        alt="Dark Mode"
        onClick={toggleTheme}
        className={`w-10 h-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
