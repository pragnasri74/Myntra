import NavBar from "../components/nav-bar";

const ARView = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-inter">
      <i className="absolute top-[calc(50%_+_390px)] left-[calc(50%_-_216px)] font-ibm-plex-sans text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo20@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_+_88px)] left-[calc(50%_-_430px)] w-[14.438rem] h-[4.375rem] text-[1.5rem]">
        <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_115.5px)] rounded-[20px] bg-deepskyblue w-[14.438rem] h-[4.375rem]" />
        <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_90.5px)] font-semibold flex items-center w-[11.375rem] h-[1.75rem]">
          Access Camera
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_301px)] left-[calc(50%_-_55px)] w-[36.563rem] h-[39.563rem]">
        <div className="absolute top-[calc(50%_-_316.5px)] left-[calc(50%_-_292.5px)] rounded-[51px] bg-lightskyblue w-[36.563rem] h-[39.563rem]" />
        <div className="absolute top-[calc(50%_-_296.5px)] left-[calc(50%_-_64.5px)] font-semibold">
          AR View
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_159px)] left-[calc(50%_-_532px)] w-[27.188rem] h-[12.813rem] text-[1.5rem]">
        <div className="absolute top-[calc(50%_-_102.5px)] left-[calc(50%_-_217.5px)] rounded-corner-large bg-gainsboro w-[27.188rem] h-[11.938rem]" />
        <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_198.5px)] font-semibold flex items-center w-[25.25rem] h-[11.125rem]">
          Please give the permission for accessing your Camera through clicking
          Allow in the above pop up
        </div>
        <div className="absolute top-[calc(50%_-_95.5px)] left-[calc(50%_-_37.5px)] text-[2rem] font-semibold">
          Note
        </div>
        <div className="absolute top-[calc(50%_-_47.5px)] left-[calc(50%_-_217px)] box-border w-[27.194rem] h-[0.063rem] border-t-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

export default ARView;
