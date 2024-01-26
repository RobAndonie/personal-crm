import PropTypes from "prop-types";

export default function ContactDetails({ contact }) {
  return (
    <div className="flex items-center justify-between py-6 pr-8 text-darkNeutral">
      <div className="flex w-96 flex-col gap-2 border-l border-primary pl-8">
        <p className="text-xl font-semibold">{contact.name}</p>
        <p className="text-sm text-neutral">{contact.email}</p>
      </div>
      <div className="flex w-56 flex-col gap-2">
        <p className="font-semibold">{contact.company}</p>
        <p className="text-sm">{contact.position}</p>
      </div>
      <p className="w-44 ">{contact.location}</p>
      <p className="w-44 ">{contact.phoneNumber}</p>
      <button className="h-min w-20 rounded border border-secondary p-2 text-center font-semibold text-secondary">
        More
      </button>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};
