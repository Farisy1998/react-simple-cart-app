const Footer = () => {
  const date = new Date();

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-2 mb-2">
          <h4>Simple Cart App - {date.getFullYear()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
