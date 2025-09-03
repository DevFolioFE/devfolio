"use client";

import { Modal } from "@/shared/ui";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>ddd</p>
      </Modal>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        클릭
      </button>
    </div>
  );
}
