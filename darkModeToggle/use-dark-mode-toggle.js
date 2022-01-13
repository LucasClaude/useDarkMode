import React, { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styles.scss";
import clsx from "clsx";

import { ReactComponent as Moon } from "./SVG/Moon.svg";
import { ReactComponent as Sun } from "./SVG/Sun.svg";
import { ReactComponent as ToggleBar } from "./SVG/ToggleBar.svg";
import { ReactComponent as Toggle } from "./SVG/ToggleButton.svg";

export const useDarkModeToggle = () => {
  const [theme, setActiveTheme] = useState(
    localStorage?.getItem("currentTheme")
  );

  const isDark = theme ? (theme === "dark" ? true : false) : undefined;

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setTheme(isSystemDark)
  );

  const setTheme = () => {
    const isSystemDark = !isDark;
    const newTheme = isSystemDark ? "dark" : "light";
    setActiveTheme(newTheme);
    localStorage?.setItem("currentTheme", newTheme);
  };

  useEffect(() => {
    if (systemPrefersDark && !theme) {
      setTheme(true);
    }
  }, [systemPrefersDark]);

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  const returnToggle = () => {
    return (
      <ToggleButton
        onClick={setTheme}
        currentTheme={isDark ? "dark" : "light"}
      />
    );
  };

  return {
    toggleButton: returnToggle(),
    theme,
  };
};

export default useDarkModeToggle;

const ToggleButton = ({ onClick, currentTheme }) => {
  const isDark = currentTheme === "dark";

  const linkColor = useMemo(() => {
    return getComputedStyle(document.body).getPropertyValue(
      `--link-color-${currentTheme}`
    );
  }, [currentTheme]);

  const secondaryColor = isDark ? "#4666ab" : "white";

  return (
    <button className="toggle-button" onClick={onClick}>
      <Toggle
        fill={secondaryColor}
        className={clsx(
          "toggle-button-toggle",
          {
            "toggle-button-toggle-dark": isDark,
          },
          {
            "toggle-button-toggle-light": !isDark,
          }
        )}
      />
      <ToggleBar fill={linkColor} className="toggle-button-bar" />
      {!isDark && <Moon fill={secondaryColor} className="toggle-button-moon" />}
      {isDark && <Sun fill={secondaryColor} className="toggle-button-sun" />}
    </button>
  );
};
