import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      {/* top grid */}
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-t border-borderColor pt-10">
        {/* logo and description */}
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-[20rem] mt-3">
            Premium car rental service with a wide selection of
            luxury and everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#"><img src={assets.facebook_logo} className="w-5 h-5" alt="Facebook" /></a>
            <a href="#"><img src={assets.instagram_logo} className="w-5 h-5" alt="Instagram" /></a>
            <a href="#"><img src={assets.twitter_logo} className="w-5 h-5" alt="Twitter" /></a>
            <a href="#"><img src={assets.gmail_logo} className="w-5 h-5" alt="Gmail" /></a>
          </div>
        </div>

        {/* quick links */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">List Your Car</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* resources */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Resources</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>1234 Luxury Cars</li>
            <li>San Francisco, CA 98097</li>
            <li>+1 234567890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 border-t border-borderColor">
        <p>© {new Date().getFullYear()} Made with Love by Priyanka & Santayo ❤️.</p>
        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
