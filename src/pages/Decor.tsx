import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Decor = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/ar-view");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_419px)] left-[calc(50%_-_216px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo17@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_359px)] left-[calc(50%_-_532px)] w-[67.625rem] h-[43.375rem] text-[2.25rem] text-gray-200 font-be-vietnam">
        <div className="absolute top-[calc(50%_-_211px)] left-[calc(50%_-_541px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-31xl bg-white box-border w-[38.438rem] h-[29.138rem] opacity-[0.8] border-[1px] border-solid border-black" />
        <img
          className="absolute top-[calc(50%_-_168px)] left-[calc(50%_-_504px)] w-[34.056rem] h-[23.438rem] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute top-[calc(50%_-_211px)] left-[calc(50%_+_120px)] w-[26.313rem] h-[29.625rem]">
          <div className="absolute top-[calc(50%_-_237px)] left-[calc(50%_-_210.5px)] font-semibold">
            Details :
          </div>
          <b className="absolute top-[calc(50%_-_139px)] left-[calc(50%_-_208.5px)] text-[2rem] text-whitesmoke-100">
            <p className="m-0 whitespace-pre-wrap">Price : Rs.54,000</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Material : Solid Cedarwood</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Size : 22 inches per seat</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Configuration : 3 seater</p>
          </b>
        </div>
        <div className="absolute top-[calc(50%_-_347px)] left-[calc(50%_+_109px)] w-[14.063rem] h-[6.25rem] text-[1.25rem] text-gray-100 font-montserrat">
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_112.5px)] w-[13.15rem] h-[4rem]"
            alt=""
            src="/stars.svg"
          />
          <div className="absolute top-[calc(50%_+_17.7px)] left-[calc(50%_-_86.5px)] font-medium flex items-center w-[12.438rem] h-[2.019rem]">
            4.0 (131 reviews)
          </div>
        </div>
        <b className="absolute top-[calc(50%_-_341px)] left-[calc(50%_-_539px)] text-[3rem] font-inter text-black">
          Malaga Chesterfield Sofa:
        </b>
        <div className="absolute top-[calc(50%_+_277px)] left-[calc(50%_-_530.9px)] w-[28.681rem] h-[4.375rem] text-[2.5rem] font-baloo-da-2">
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
              src="/camera-2@2x.png"
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
              src="/shopping-bag1@2x.png"
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_23px)] left-[calc(50%_+_73.45px)] w-[4.563rem] h-[2.938rem] object-cover"
            alt=""
            src="/component-20@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Decor;
