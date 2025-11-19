import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";

import appStore from "@/public/images/appstore.png";
import googlePlay from "@/public/images/googleplay.png";
import visa from "@/public/images/visa.png";
import mastercard from "@/public/images/mastercard.png";
import discover from "@/public/images/discover.png";
import applePay from "@/public/images/applepay.png";
import securePayment from "@/public/images/securepayment.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-semibold flex items-center gap-2 mb-5">
            <span className="text-primary_color text-4xl">🌿</span> Ecobazar
          </h2>

          <p className="text-secondary_color leading-[170%] mb-6 max-w-sm">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna.
          </p>

          <div className="flex items-center gap-4 text-xl">
            <Link
              href={"/"}
              className="w-10 h-10 rounded-full bg-primary_color flex items-center justify-center hover:opacity-80 duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="text-secondary_color hover:text-white duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="text-secondary_color hover:text-white duration-200"
            >
              <FaPinterestP />
            </Link>
            <Link
              href={"/"}
              className="text-secondary_color hover:text-white duration-200"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="text-secondary_color space-y-3">
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/profile"}>My Account</Link>
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/"}>Order History</Link>
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/cart"}>Shoping Cart</Link>
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/"}>Wishlist</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Helps</h3>
          <ul className="text-secondary_color space-y-3">
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              <Link href={"/faqs"}>Faqs</Link>
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Terms & Condition
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Download Mobile App</h3>

          <div className="flex flex-col gap-4 mb-6">
            <Image
              src={appStore}
              alt="App Store"
              className="w-40 cursor-pointer"
            />
            <Image
              src={googlePlay}
              alt="Google Play"
              className="w-40 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-secondary_color text-sm text-center md:text-left">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>

        <div className="flex items-center gap-4">
          <Image src={applePay} alt="Apple Pay" className="h-6 w-auto" />
          <Image src={visa} alt="Visa" className="h-6 w-auto" />
          <Image src={discover} alt="Discover" className="h-6 w-auto" />
          <Image src={mastercard} alt="Mastercard" className="h-6 w-auto" />
          <Image
            src={securePayment}
            alt="Secure Payment"
            className="h-6 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
