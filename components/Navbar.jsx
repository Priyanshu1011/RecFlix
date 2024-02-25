import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-[88.5vw] h-[70px]">
      {/* Logo */}
      <Logo />
      {/* Home, About Us, Features, Login, Register */}
      <div className="flex flex-row justify-around items-center gap-x-8">
        <Link href="./" className="underline-offset-4">
          Home
        </Link>
        <Link href="./#about-us" className="underline-offset-4">
          About Us
        </Link>
        <Link href="./#features" className="underline-offset-4">
          Features
        </Link>
        <Link href="./login" className="underline-offset-4">
          Login
        </Link>
        <Link href="./register" className="underline-offset-4">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
