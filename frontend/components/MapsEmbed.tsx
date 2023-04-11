import React from "react";

const MapsEmbed: React.FC = (): JSX.Element => (
   <iframe
      className="m-0 w-full z-0"
      title="Google Maps Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.257737057891!2d-93.55499448333984!3d45.786063979106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b395cf64be94b1%3A0x164d4a1cf7cfc01a!2sKountry%20Kettle!5e0!3m2!1sen!2sus!4v1680794122764!5m2!1sen!2sus"
      width="400"
      height="400"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
   />
);

export default MapsEmbed;
