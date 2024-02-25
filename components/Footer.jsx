import Link from "next/link";
import Logo from "./Logo";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-4xl font-bold font-lato mt-10 border-t-2 pt-10 mb-2">
      <div className="flex flex-row justify-between items-start gap-x-6">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center h-[100px]">
          <Logo />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col justify-around items-start gap-x-8 text-sm">
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
        <section className="flex flex-row justify-around items-center gap-x-0 py-4">
          <Link href={"/"} className="footer_shadow p-4 rounded-full">
            <FaTwitter className="primary_color hover:text-blue-700" />
          </Link>
          <Link href={"/"} className="footer_shadow p-4 rounded-full">
            <FaInstagram className="primary_color hover:text-blue-700" />
          </Link>
          <Link href={"/"} className="footer_shadow p-4 rounded-full">
            <FaMeta className="primary_color hover:text-blue-700" />
          </Link>
          <Link href={"/"} className="footer_shadow p-4 rounded-full">
            <FaEnvelope className="primary_color hover:text-blue-700" />
          </Link>
        </section>
      </div>
      <p className="text-[2vh] mt-2 text-white">&copy; RecFlix | 2024</p>
    </footer>
  );
};

export default Footer;
