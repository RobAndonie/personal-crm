import { useState, useEffect } from "react";
import ContactDetails from "../components/ContactDetails";
import ModalForm from "../components/ModalForm";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("/api/contacts/");
      const data = await response.json();

      if (response.ok) {
        setContacts(data);
      }
    };

    fetchContacts();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <ModalForm setShowModal={handleClose} />}
      <div className="flex flex-col gap-12 px-28 py-16">
        <p className="text-4xl font-semibold text-darkNeutral">Personal CRM</p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="rounded-sm border border-primary px-4 py-3 text-sm font-medium text-neutral">
              <p>Search Contacts & Companies</p>
            </div>
            <button
              className="h-min rounded bg-secondary p-2 font-bold text-white"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Add Contact
            </button>
          </div>
          <div>
            <div className="flex justify-between border-b border-primary py-4 pr-8 text-sm font-semibold text-neutral">
              <p className="w-96 pl-8">Contact</p>
              <p className="w-56">Company</p>
              <p className="w-44">Location</p>
              <p className="w-44">Phone Number</p>
              <div className="w-20" />
            </div>
            <div className="flex flex-col gap-4">
              {contacts &&
                contacts.map((contact) => (
                  <ContactDetails key={contact._id} contact={contact} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
