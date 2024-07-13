import NavBar from "../components/nav-bar";
import Section from "../components/section";

const Char = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[112.438rem] left-[31.5rem]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo4@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_335px)] left-[calc(50%_-_517px)] w-[60.438rem] h-[38.563rem] font-inter">
        <div className="absolute top-[calc(50%_-_308.5px)] left-[calc(50%_-_483.5px)] font-extrabold inline-block w-[46.438rem] h-[3.563rem]">{`Margot Robbie Costumes & Accesories:`}</div>
        <div className="absolute top-[calc(50%_-_232.5px)] left-[calc(50%_-_405.5px)] w-[27.188rem] h-[33.813rem]">
          <div className="absolute top-[calc(50%_-_270.5px)] left-[calc(50%_-_217.5px)] rounded-6xl bg-gray-400 box-border w-[27.188rem] h-[33.813rem] border-[2px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_242.5px)] left-[calc(50%_-_172.5px)] w-[21.688rem] h-[23.375rem]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/c11@2x.png"
            />
            <img
              className="absolute h-[12.03%] w-[12.97%] top-[6.15%] right-[7.78%] bottom-[81.82%] left-[79.25%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/synchronize@2x.png"
            />
          </div>
          <Section />
        </div>
        <div className="absolute top-[calc(50%_-_232.5px)] left-[calc(50%_+_48.5px)] w-[27.188rem] h-[33.813rem]">
          <div className="absolute top-[calc(50%_-_270.5px)] left-[calc(50%_-_217.5px)] rounded-6xl bg-gray-400 box-border w-[27.188rem] h-[33.813rem] border-[2px] border-solid border-black" />
          <Section propLeft="calc(50% - 169.5px)" propWidth="21.438rem" />
          <div className="absolute top-[calc(50%_-_242.5px)] left-[calc(50%_-_174.5px)] w-[21.688rem] h-[23.375rem]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-61@2x.png"
            />
            <img
              className="absolute h-[12.03%] w-[12.97%] top-[6.42%] right-[7.2%] bottom-[81.55%] left-[79.83%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/synchronize@2x.png"
            />
          </div>
        </div>
      </div>
      <i className="absolute top-[calc(50%_+_413px)] left-[calc(50%_-_206px)]">
        Developed by ~InnovHer Team
      </i>
    </div>
  );
};

export default Char;
