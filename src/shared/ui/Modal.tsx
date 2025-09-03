"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "../types/ModalProp";

/**
 * Modal component for displaying content in a centered overlay.
 * @param isOpen - Boolean to control the visibility of the modal.
 * @param onClose - Function to call when the modal should be closed.
 * @param children - Content to display inside the modal.
 * @returns {JSX.Element}
 */

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
