"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerificationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("ageVerified");
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setIsOpen(false);
  };

  const handleDeny = () => {
    window.location.href = "https://google.com";
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          ¿Sos mayor de 18 años?
        </h2>
        <p className="mb-6 text-gray-600">
          Debes tener al menos 18 años para ingresar a este sitio.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Si
          </button>
          <button
            onClick={handleDeny}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
}
