"use client";

import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="border rounded-2xl shadow-md p-10 space-y-10 text-center bg-white">
      {/* ====== address ============= */}
      <div>
        <FaLocationDot className="text-primary_color text-4xl mx-auto mb-3" />
        <p className="text-gray-700 leading-relaxed">
          Sector 10, Uttara, Dhaka 1230
        </p>
      </div>

      <hr />

      {/* ====== email ============= */}
      <div>
        <FaEnvelope className="text-primary_color text-3xl mx-auto mb-3" />
        <p className="text-gray-700">shimanto.dev.bd@gmail.com</p>
        <p className="text-gray-700">help@iamshimanto.com</p>
      </div>

      <hr />

      {/* ====== phone ============= */}
      <div>
        <FaPhone className="text-primary_color text-4xl mx-auto mb-3" />
        <p className="text-gray-700">(+880) 1750658101</p>
        <p className="text-gray-700">(+880) 1706017576</p>
      </div>
    </div>
  );
}
