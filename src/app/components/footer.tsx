// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

// export function Footer(){
//     return (
//         <footer className="bg-neutral-900 text-gray-300 py-10">
//           <div className=" mx-4">
//             {/* Grid layout for footer */}
//             <div className="grid grid-cols-1 sm:container md:items-center md:justify-center md:grid-cols-3 gap-8 inset-y-10 my-5 mx-0">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <Image src="/xpensease_1.png" alt="" width={200} height={200}></Image>                
//               </div>
//               {/* Navigation Links */}
//               <div className=" sm:hidden">
//                 <h3 className="text-lg font-semibold text-white">Quick Links</h3>
//                 <ul className="mt-4 space-y-2">
//                   <li>
//                     <Link href="#Home" className="hover:text-white transition">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#About" className="hover:text-white transition">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#features" className="hover:text-white transition">
//                       Features
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               {/* Contact Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Contact Us</h3>
//                 <p className="mt-4 text-sm">Email: info@xpensease.com</p>
//                 <p className="mt-2 text-sm">Phone: 1234567890</p>
//                 <p className="mt-2 text-sm">Location: Jaipur, India</p>
//               </div>
    
//               {/* Social Media Links */}
//               <div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Follow Us</h3>
//                 <div className="flex mt-4 space-x-4 mb-8">
//                   <a
//                     href="https://x.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition"
//                   >
//                     <IconBrandX/>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/company/xpensease/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition"
//                   >
//                     <IconBrandLinkedin/>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/xpenseaseapp/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition"
//                   >
//                     <IconBrandInstagram/>
//                   </a>
//                 </div>
//               </div>
//               <div>
//                 <a className=" bg-[#8EDB05] text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#649603] transition duration-300"
//                  href="/contactus"
//                  target=""
//                  rel="noopener noreferrer">
//                   Contact Us </a>
//               </div>
//               </div>
//             </div>
//             <hr className=" border-[#8EDB05] hidden sm:block "></hr>
//             <p className="mt-4 text-sm">Copyright © 2025 by @xpensease | All Rights Reserved.</p>
//           </div>
//         </footer>
//       );
//   };

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid layout for footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/xpensease_1.png"
              alt="Xpensease Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="text-center hidden md:block md:text-left">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#Home" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#About" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-sm">Email: info@xpensease.com</p>
            <p className="mt-2 text-sm">Phone: 1234567890</p>
            <p className="mt-2 text-sm">Location: Jaipur, India</p>
          </div>

          {/* Social Media + CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <IconBrandX />
              </a>
              <a href="https://www.linkedin.com/company/xpensease/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <IconBrandLinkedin />
              </a>
              <a href="https://www.instagram.com/xpenseaseapp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <IconBrandInstagram />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/contactus"
                className="inline-block bg-[#8EDB05] text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#649603] transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <hr className="border-[#8EDB05] hidden sm:block" />
        <p className="mt-6 text-sm text-center">
          Copyright © 2025 by @xpensease | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
