const MapsEmbed: React.FC = (): JSX.Element => (
   <iframe
      className="m-0 w-full"
      title="The Dirty Blonde Bar and Grill Google Maps Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.2577374584143!2d-93.55538072193039!3d45.78606397108119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b395cf64be94b1%3A0x164d4a1cf7cfc01a!2sThe%20Dirty%20Blonde%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1681692084612!5m2!1sen!2sus"
      width="650"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
   />
);

export default MapsEmbed;
