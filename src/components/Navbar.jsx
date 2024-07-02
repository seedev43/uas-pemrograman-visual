import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export function Nav() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </NavbarBrand>
      <div className="flex md:order-2 space-x-4">
        <Link to="/login">
          <Button className="bg-transparent text-black hover:!bg-cyan-500 hover:text-white">LOG IN</Button>
        </Link>
        <Link to="/register">
          <Button className="bg-cyan-500">SIGN UP</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink className="cursor-pointer" onClick={scrollToAbout}>About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
