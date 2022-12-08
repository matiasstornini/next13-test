import "./DarkMode.css";
import { ChangeEventHandler } from "react";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

console.log(storedTheme);

const DarkMode = () => {
  return (
    <div>
      {storedTheme === "light" ? (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={setDark}
        >
          <Brightness4Icon />
        </IconButton>
      ) : (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={setLight}
        >
          <Brightness7Icon />
        </IconButton>
      )}
    </div>
  );
};

export default DarkMode;
