import "./styles.scss";
import companyLogo from "@assets/header-logo.svg";

const HeaderMinimal = () => {
  return (
    <div className="header-minimal">
      <div className="header-logo-container">
        <a className="header-logo-link" href="/">
          <img src={companyLogo} />
        </a>
      </div>
    </div>
  );
};

export default HeaderMinimal;
