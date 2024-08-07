import icon from "../assets/images/icon-success-check.svg";

export default function Notification({ onClick }) {
  return (
    <div
      className="container bg-notification p-4"
      onClick={onClick}
      role="alert"
    >
      <div className="d-flex align-items-center">
        <img
          className="me-2"
          src={icon}
          alt="You message was sent successfully"
          width="20px"
          height="20px"
        />
        <p className="fw-bold text-white p-0 my-0 "> Message Sent!</p>
      </div>
      <p className="text-white small p-0 m-0 mt-2">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
}
