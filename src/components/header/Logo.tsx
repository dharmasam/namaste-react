import { LogoImageUrl } from "../../utils/constants";
export const Logo = () => {
  return (
    <img
      className="logo"
      src={`${LogoImageUrl}`}
      alt="React Logo"
      onClick={() => {
        window.location.href = "/";
      }
      }
    />
  );
};