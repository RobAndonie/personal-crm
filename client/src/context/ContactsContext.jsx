import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const ContactsContext = createContext();

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts],
      };
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload._id,
        ),
      };
    default:
      return state;
  }
};

export const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, { contacts: null });

  return (
    <div>
      <ContactsContext.Provider value={{ ...state, dispatch }}>
        {children}
      </ContactsContext.Provider>
    </div>
  );
};

ContactContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
