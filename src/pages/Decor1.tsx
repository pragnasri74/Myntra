import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Decor1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/ar-view");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_419px)] left-[calc(50%_-_216px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo18@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_357px)] left-[calc(50%_-_532px)] w-[67.625rem] h-[44.5rem] text-[2.25rem] text-gray-200 font-be-vietnam">
        <div className="absolute top-[calc(50%_-_222px)] left-[calc(50%_+_117px)] w-[22.75rem] h-[34.25rem]">
          <div className="absolute top-[calc(50%_-_274px)] left-[calc(50%_-_179px)] font-semibold">
            Details :
          </div>
          <b className="absolute top-[calc(50%_-_216px)] left-[calc(50%_-_182px)] text-[2rem] leading-[4.375rem] text-white">
            <p className="m-0 whitespace-pre-wrap">{`Price :  Rs.1124             `}</p>
            <p className="m-0 whitespace-pre-wrap">{`Colour: Wooden finish   Pattern: Solid Theme: Vintage Material: Plastic Size & Fit : 385×385 mm`}</p>
          </b>
        </div>
        <b className="absolute top-[calc(50%_-_352px)] left-[calc(50%_-_539px)] text-[3rem] font-inter text-black">
          Zanibo Solid Analogue Wall Clock:
        </b>
        <div className="absolute top-[calc(50%_-_222px)] left-[calc(50%_-_541px)] rounded-[36px] bg-gray-300 box-border w-[32.813rem] h-[29.625rem] border-[1px] border-solid border-black" />
        <img
          className="absolute top-[calc(50%_-_195px)] left-[calc(50%_-_504px)] rounded-21xl w-[27.938rem] h-[26rem] object-cover"
          alt=""
          src="/rectangle-86@2x.png"
        />
        <div className="absolute top-[calc(50%_+_286px)] left-[calc(50%_-_539px)] w-[28.681rem] h-[4.375rem] text-[2.5rem] font-baloo-da-2">
          <div
            className="absolute top-[calc(50%_-_34.9px)] left-[calc(50%_-_229.45px)] w-[17.931rem] h-[4.369rem] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[calc(50%_-_34.95px)] left-[calc(50%_-_143.45px)] rounded-11xl bg-white box-border w-[17.931rem] h-[4.369rem] opacity-[0.8] border-[1px] border-solid border-black" />
            <b className="absolute top-[calc(50%_-_31.95px)] left-[calc(50%_-_48.15px)] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f31968_21.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[9.094rem] h-[4.181rem]">
              AR View
            </b>
            <img
              className="absolute top-[calc(50%_-_22.95px)] left-[calc(50%_-_116.35px)] w-[3.138rem] h-[3.119rem] object-cover"
              alt=""
              src="/camera-21@2x.png"
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_35px)] left-[calc(50%_+_76.45px)] w-[4.375rem] h-[4.375rem]"
            alt=""
            src="/group-10.svg"
          />
          <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_+_159.45px)] w-[4.375rem] h-[4.375rem]">
            <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] rounded-[50%] bg-white box-border w-[4.375rem] h-[4.375rem] opacity-[0.8] border-[1px] border-solid border-black" />
            <img
              className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_35px)] w-[4.375rem] h-[2.888rem] object-cover"
              alt=""
              src="/shopping-bag2@2x.png"
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_23px)] left-[calc(50%_+_73.45px)] w-[4.563rem] h-[2.938rem] object-cover"
            alt=""
            src="/component-201@2x.png"
          />
        </div>
        <div className="absolute top-[calc(50%_-_356px)] left-[calc(50%_+_282px)] w-[16.188rem] h-[5.313rem] text-[1.25rem] text-gray-100 font-montserrat">
          <img
            className="absolute top-[calc(50%_-_42.5px)] left-[calc(50%_-_129.5px)] w-[14.031rem] h-[3.125rem]"
            alt=""
            src="/stars1.svg"
          />
          <div className="absolute top-[calc(50%_+_15.3px)] left-[calc(50%_-_103.9px)] font-medium flex items-center w-[14.588rem] h-[1.7rem]">
            4.3 (286 reviews)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decor1;
