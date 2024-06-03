const Contact = ({ phoneNumber, address, mail }) => {
  return (
    <div className="contact">
      <div className="centered-header">
        <i className="fa-regular fa-address-book"></i>
        <h2>CONTACT</h2>
      </div>
      <h4>Phone</h4>
      <p>{phoneNumber || "\u00A0"}</p>
      <h4>Mail</h4>
      <p>{mail || "\u00A0"}</p>
      <h4>Address</h4>
      <p>{address || "\u00A0"}</p>
    </div>
  );
};

export default Contact;
