import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-center space-x-3 border-t border-blue-500 bg-blue-600 py-4 text-center text-xs tracking-wide text-blue-100">
      <div>Developed and supported by the Healthnet Team.</div>
      <div>
        We welcome your{" "}
        <span className="underline decoration-blue-300 underline-offset-2 hover:cursor-pointer">
          <Link to="/feedback">feedback</Link>
        </span>
        .
      </div>
    </div>
  );
};

export default Footer;
