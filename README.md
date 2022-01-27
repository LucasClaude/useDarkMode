# useDarkMode

When using use-dark-mode-toggle it will actually add/remove a "dark" class to the body of your project depending on which mode is selected via the toggleButton. In your global stlying file adding a .dark class will allow your global variable to change to your desired colors.

Example Use:

import { useDarkModeToggle } from "use-dark-mode-toggle";

const Header = () => {

    const { toggleButton } = useDarkModeToggle();

    return <div>{toggleButton}</div>;
}

export default Header;



//global scss file 

body {
  font-family: europa, sans-serif;
  font-style: normal;

  --primary-color: rgb(255, 255, 255);
  --link-color: #4666ab;

  &.dark {
    --primary-color: hsl(213, 33%, 23%);
    --link-color: #ffffff;
  }
}