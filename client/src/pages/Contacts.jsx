import { useState, useEffect } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("http://localhost:4000/api/contacts/");
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  });

  return (
    <div className="flex flex-col gap-12 px-28 py-16">
      <p className="text-darkNeutral text-4xl font-semibold">Personal CRM</p>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="text-neutral border-primary rounded-sm border px-4 py-3 text-sm font-medium">
            Search Contacts & Companies
          </div>
          <div className="bg-secondary h-min rounded p-2 font-bold text-white">
            Add Contact
          </div>
        </div>
        <div>
          <div className="text-neutral border-primary flex justify-between border-b px-8 py-4 text-sm font-semibold">
            <div className="w-96">Contact</div>
            <div className="w-56">Company</div>
            <div className="w-44">Location</div>
            <div className="w-44">Phone Number</div>
            <div className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
