import { Dialog } from "@headlessui/react";
import NewContact from "./NewContact";
import PropTypes from "prop-types";

export default function ModalForm({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="flex w-full max-w-2xl flex-col gap-8 rounded bg-white px-16 py-8">
          <Dialog.Title className="text-4xl font-semibold">
            <span>Add a</span>
            <span className="text-secondary"> new contact</span>
          </Dialog.Title>
          <NewContact setIsOpen={setIsOpen} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
