// import React from "react";
import amazonLogo from "../../assets/Payment_Methods/amazon_card_cash_icon.svg";
import americanExpressLogo from "../../assets/Payment_Methods/amex-svgrepo-com.svg";
import mastercardLogo from "../../assets/Payment_Methods/mastercard_payment_icon.svg";
import paypalLogo from "../../assets/Payment_Methods/payment_paypal_icon.svg";
import appStore from "../../assets/Payment_Methods/download-on-the-app-store.svg";
import googlePlay from "../../assets/Payment_Methods/google-play-badge.svg";

export default function Footer() {
  return (
    <footer className="mx-auto w-full border-t border-gray-200/60 bg-gray-100 px-6 pt-5 pb-12">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* الصف الأول */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-300/90 px-8 py-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-normal">Get the FreshCart app</h2>
            <p className="text-gray-600 max-w-xs md:max-w-md">
              We will send you a link, open it on your phone to download the app.
            </p>
          </div>

          {/* أيقونات السوشيال ميديا */}
          <ul className="flex gap-3 mt-4 md:mt-0">
            {["instagram", "facebook", "tiktok", "twitter", "linkedin", "youtube"].map((platform) => (
              <li key={platform} className="flex items-center justify-center size-10 rounded-full border-2 border-current p-2 text-black hover:bg-blue-700 hover:text-white">
                <i className={`fab fa-${platform}`}></i>
              </li>
            ))}
          </ul>
        </div>

        {/* إدخال البريد وزر المشاركة */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-4 px-2">
          <input
            type="email"
            placeholder="Email .."
            className="w-full md:w-3/4 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button className="w-full md:w-1/4 rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-600">
            Share App Link
          </button>
        </div>

        {/* الشركاء والمتاجر */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-gray-300/90 py-6 text-gray-600">
          
          {/* Payment Partners */}
          <div className="text-center md:text-left">
            <h6 className="text-xl font-light">Payment Partners</h6>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              {[amazonLogo, americanExpressLogo, mastercardLogo, paypalLogo].map((logo, index) => (
                <figure key={index} className="w-16">
                  <img src={logo} alt="Payment Method" />
                </figure>
              ))}
            </div>
          </div>

          {/* Get deliveries */}
          <div className="text-center md:text-right">
            <h6 className="text-xl font-medium">Get deliveries with FreshCart</h6>
            <div className="flex justify-center md:justify-end gap-4 mt-3">
              <figure className="w-32">
                <img src={googlePlay} alt="Google Play" />
              </figure>
              <figure className="w-32">
                <img src={appStore} alt="App Store" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}