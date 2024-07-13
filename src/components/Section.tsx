import { useMemo } from "react";
import PropTypes from "prop-types";

const Section = ({ className = "", propLeft, propWidth }) => {
  const sectionStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div
      className={`absolute top-[calc(50%_+_164.5px)] left-[calc(50%_-_172.5px)] w-[21.688rem] h-[3.875rem] text-left text-[1.875rem] text-black font-inter ${className}`}
      style={sectionStyle}
    >
      <img
        className="absolute top-[calc(50%_-_30px)] left-[calc(50%_+_96.5px)] w-[4.813rem] h-[3.813rem] object-cover"
        alt=""
        src="/bookmark@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_31px)] left-[calc(50%_+_24.5px)] w-[4.813rem] h-[3.813rem] object-cover"
        alt=""
        src="/component-4@2x.png"
      />
      <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_173.5px)] w-[12.188rem] h-[3.75rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
        <div className="absolute h-[62.33%] w-[92.1%] top-[16.67%] left-[7.69%] font-semibold inline-block">
          Add to Bag
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Section;
