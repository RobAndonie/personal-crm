import ContactsContext from "../context/ContactsContext";
import { useContext } from "react";

export default function useContactsContext() {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error(
      "useContactsContext must be used within a ContactsContextProvider",
    );
  }

  return context;
}
