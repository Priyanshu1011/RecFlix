import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="text-4xl font-bold font-lato">
      <div className="flex flex-row justify-around items-center gap-x-6">
        {/* Logo */}
        <Logo />
        {/* Nav Links */}
        <div className="flex flex-col justify-around items-center gap-x-8 text-sm">
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
        {/* Social Media */}
        <div></div>
      </div>
      <p>Copyright &copy; 2024 | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
