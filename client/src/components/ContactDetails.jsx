import PropTypes from "prop-types";

export default function ContactDetails({ contact }) {
  return (
    <div className="flex items-center justify-between py-6 pr-8 text-darkNeutral">
      <p className="w-96 border-l border-primary pl-8 text-xl font-semibold">
        {contact.name}
      </p>
      <p className="w-56 font-semibold">{contact.company}</p>
      <p className="w-44 font-medium">{contact.location}</p>
      <p className="w-44 font-medium">{contact.phoneNumber}</p>
      <button className="h-min w-20 rounded border border-secondary p-2 text-center font-semibold text-secondary">
        More
      </button>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};
