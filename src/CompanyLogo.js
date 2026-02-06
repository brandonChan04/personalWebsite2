import './CompanyLogo.css';

export default function CompanyLogo({ src, alt }) {
  return (
    <img src={src} alt={alt} className="company-logo" />
  );
}
