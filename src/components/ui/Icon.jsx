import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaPinterest, FaEnvelope } from "react-icons/fa";

export function Icon({ name, className, title }) {
  const common = { className, role: "img", "aria-label": title ?? name };
  switch (name) {
    case "menu":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          {...common}
        >
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          {...common}
        >
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          {...common}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" {...common}>
          <path d="M10 15.27l-5.18 2.73 0.99-5.78L1.6 7.97l5.8-0.84L10 1.88l2.6 5.25 5.8 0.84-4.21 4.25 0.99 5.78L10 15.27z" />
        </svg>
      );
    case "apple":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...common}>
          <path d="M16.7 13.9c0 3.8 3.3 5.1 3.3 5.1s-2.5 3.6-5.9 3.6c-1.6 0-2.3-1-3.9-1s-2.4 1-3.9 1C2.9 22.6 0 19.1 0 14.1 0 9.3 3.1 6.9 6.1 6.9c1.6 0 2.9 1.1 3.9 1.1 0.9 0 2.4-1.2 4.2-1.2 0.7 0 3.2 0.1 4.8 2.4-0.1 0-2.9 1.7-2.9 4.7z" />
          <path d="M13.9 3.2c0.7-0.9 1.2-2.2 1.1-3.2-1.1 0-2.4 0.7-3.2 1.7-0.7 0.9-1.3 2.1-1.1 3.3 1.2 0.1 2.4-0.7 3.2-1.8z" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            fill="#EA4335"
            d="M12 10.2v3.9h5.4c-0.2 1.2-1.5 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1 0.8 3.8 1.5l2.6-2.5C17.7 3.1 15.1 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.7-4.1 9.7-9.9 0-0.7-0.1-1.3-0.2-1.9H12z"
          />
          <path
            fill="#34A853"
            d="M3.2 7.2l3.2 2.3C7.3 7.5 9.4 6 12 6c1.9 0 3.1 0.8 3.8 1.5l2.6-2.5C17.7 3.1 15.1 2 12 2 8.2 2 4.9 4.1 3.2 7.2z"
          />
          <path
            fill="#FBBC05"
            d="M12 22c3.7 0 6.8-1.2 9.1-3.2l-3.5-2.7c-0.9 0.6-2.2 1-3.6 1-3.8 0-5.1-2.4-5.7-3.6l-3.2 2.4C5.1 19.9 8.2 22 12 22z"
          />
          <path
            fill="#4285F4"
            d="M21.7 12.1c0-0.7-0.1-1.3-0.2-1.9H12v3.9h5.4c-0.2 1.2-1.5 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1 0.8 3.8 1.5l2.6-2.5C17.7 3.1 15.1 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.7-4.1 9.7-9.9z"
          />
        </svg>
      );
    case "facebook":
      return <BsFacebook className={className} />;
    case "instagram":
      return <FaInstagram className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
    case "youtube":
      return <FaYoutube className={className} />;
    case "pinterest":
      return <FaPinterest className={className} />;
    case "twitter":
      return <FaXTwitter className={className} />;
    case "mail":
      return <FaEnvelope className={className} />;
    default:
      return null;
  }
}

