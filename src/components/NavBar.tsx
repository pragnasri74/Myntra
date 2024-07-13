import { useMemo } from "react";
import PropTypes from "prop-types";

const NavBar = ({ className = "", logo, propLeft }) => {
  const navBarStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[0.875rem] left-[calc(50%_-_526px)] w-[65.438rem] h-[6.375rem] text-left text-[0.75rem] text-black font-ibm-plex-sans ${className}`}
      style={navBarStyle}
    >
      <div className="absolute top-[0rem] left-[calc(50%_-_523.5px)] w-[49.313rem] h-[6.375rem] text-gray-100 font-source-sans-pro">
        <img
          className="absolute top-[0rem] left-[calc(50%_-_394.5px)] w-[10.875rem] h-[6.375rem] object-cover"
          alt=""
          src={logo}
        />
        <div className="absolute top-[1.938rem] left-[calc(50%_-_130.5px)] w-[32.813rem] h-[2.5rem]">
          <div className="absolute top-[0rem] left-[calc(50%_-_262.5px)] rounded-3xl bg-white w-[32.813rem] h-[2.5rem]" />
          <img
            className="absolute top-[0.5rem] left-[calc(50%_-_248.1px)] w-[1.969rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/icbaselinesearch.svg"
          />
          <div className="absolute top-[0.75rem] left-[calc(50%_-_211.3px)] inline-block w-[9.025rem] h-[1.25rem]">
            Search
          </div>
        </div>
      </div>
      <div className="absolute top-[3.688rem] left-[calc(50%_+_301.5px)] font-medium flex items-center w-[3.875rem] h-[1.25rem]">
        Profile
      </div>
      <div className="absolute top-[3.813rem] left-[calc(50%_+_385.5px)] font-medium">
        Wishlist
      </div>
      <img
        className="absolute top-[2rem] left-[calc(50%_+_472.5px)] w-[3.188rem] h-[1.938rem] object-cover"
        alt=""
        src="/shopping-bag@2x.png"
      />
      <img
        className="absolute top-[2rem] left-[calc(50%_+_293.5px)] w-[3.188rem] h-[1.938rem] object-cover"
        alt=""
        src="/user@2x.png"
      />
      <img
        className="absolute top-[2rem] left-[calc(50%_+_376.5px)] w-[4rem] h-[1.938rem] object-cover"
        alt=""
        src="/heart@2x.png"
      />
      <div className="absolute top-[3.688rem] left-[calc(50%_+_486.5px)] font-medium flex items-center w-[2.313rem] h-[1.25rem]">
        Bag
      </div>
    </div>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default NavBar;
