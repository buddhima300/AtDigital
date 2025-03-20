import React from "react";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-5 bg-white h-full rounded-md">
      <div className="p-8 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
