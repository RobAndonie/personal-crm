import { Dialog } from "@headlessui/react";
import { useState } from "react";
import NewContact from "./NewContact";

export default function ModalForm(handleClose) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <NewContact />

        <button
          onClick={() => {
            setIsOpen(false);
            handleClose;
          }}
        >
          Deactivate
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            handleClose;
          }}
        >
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
