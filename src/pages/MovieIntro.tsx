import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const MovieIntro = () => {
  const navigate = useNavigate();

  const onPrabhasImageClick = useCallback(() => {
    navigate("/char-7");
  }, [navigate]);

  const onKateWinsletImageClick = useCallback(() => {
    navigate("/char-6");
  }, [navigate]);

  const onAliaBhattImageClick = useCallback(() => {
    navigate("/char-4");
  }, [navigate]);

  const onMargotRobbieImageClick = useCallback(() => {
    navigate("/char-1");
  }, [navigate]);

  const onBahubaliContainerClick = useCallback(() => {
    navigate("/movie-4");
  }, [navigate]);

  const onBarbieContainerClick = useCallback(() => {
    navigate("/movie-1");
  }, [navigate]);

  const onRARKPKContainerClick = useCallback(() => {
    navigate("/movie-2");
  }, [navigate]);

  const onTitanicContainerClick = useCallback(() => {
    navigate("/movie-3");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[93.125rem] overflow-hidden text-left text-[2.25rem] text-black font-inter">
      <i className="absolute top-[calc(50%_+_630px)] left-[calc(50%_-_216px)] text-[2rem] font-ibm-plex-sans text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo8@2x.png" propLeft="calc(50% - 526px)" />
      <img
        className="absolute top-[calc(50%_-_414px)] left-[calc(50%_-_532px)] rounded-icon-large w-[15.938rem] h-[22.313rem] object-cover cursor-pointer"
        alt=""
        src="/prabhas@2x.png"
        onClick={onPrabhasImageClick}
      />
      <img
        className="absolute top-[calc(50%_-_414px)] left-[calc(50%_+_278px)] rounded-icon-large w-[15.938rem] h-[22.313rem] object-cover cursor-pointer"
        alt=""
        src="/kate-winslet@2x.png"
        onClick={onKateWinsletImageClick}
      />
      <img
        className="absolute top-[calc(50%_-_414px)] left-[calc(50%_+_8px)] rounded-icon-large w-[15.938rem] h-[22.313rem] object-cover cursor-pointer"
        alt=""
        src="/alia-bhatt@2x.png"
        onClick={onAliaBhattImageClick}
      />
      <img
        className="absolute top-[calc(50%_-_414px)] left-[calc(50%_-_262px)] rounded-icon-large w-[15.938rem] h-[22.313rem] object-cover cursor-pointer"
        alt=""
        src="/margot-robbie@2x.png"
        onClick={onMargotRobbieImageClick}
      />
      <div className="absolute top-[calc(50%_-_545px)] left-[calc(50%_-_526px)] w-[27.75rem] h-[5.813rem]">
        <img
          className="absolute top-[calc(50%_-_37.5px)] left-[calc(50%_-_222px)] w-[22.813rem] h-[4.238rem]"
          alt=""
          src="/trending-now.svg"
        />
        <img
          className="absolute h-full w-[14.86%] top-[0%] right-[0%] bottom-[0%] left-[85.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-icon-trending-up.svg"
        />
      </div>
      <b className="absolute top-[calc(50%_+_33px)] left-[calc(50%_-_522px)] text-[3.438rem] leading-[125%] inline-block w-[20.125rem] h-[4.438rem]">
        Movies:
      </b>
      <div
        className="absolute top-[calc(50%_+_143px)] left-[calc(50%_-_541px)] w-[15.938rem] h-[21.188rem] cursor-pointer"
        onClick={onBahubaliContainerClick}
      >
        <div className="absolute top-[calc(50%_+_124.5px)] left-[calc(50%_-_68.5px)] leading-[125%] font-extrabold">
          Bahubali
        </div>
        <img
          className="absolute top-[calc(50%_-_169.5px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-63@2x.png"
        />
      </div>
      <div
        className="absolute top-[calc(50%_+_143px)] left-[calc(50%_-_270px)] w-[15.938rem] h-[21.188rem] cursor-pointer"
        onClick={onBarbieContainerClick}
      >
        <div className="absolute top-[calc(50%_+_124.5px)] left-[calc(50%_-_53.5px)] leading-[125%] font-extrabold">
          Barbie
        </div>
        <img
          className="absolute top-[calc(50%_-_169.5px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-13@2x.png"
        />
      </div>
      <div
        className="absolute top-[calc(50%_+_143px)] left-[calc(50%_+_1px)] w-[15.938rem] h-[21.188rem] cursor-pointer"
        onClick={onRARKPKContainerClick}
      >
        <div className="absolute top-[calc(50%_+_124.5px)] left-[calc(50%_-_62.5px)] leading-[125%] font-extrabold">
          RARKPK
        </div>
        <img
          className="absolute top-[calc(50%_-_169.5px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-14@2x.png"
        />
      </div>
      <div
        className="absolute top-[calc(50%_+_143px)] left-[calc(50%_+_272px)] w-[15.938rem] h-[21.188rem] cursor-pointer"
        onClick={onTitanicContainerClick}
      >
        <div className="absolute top-[calc(50%_+_124.5px)] left-[calc(50%_-_69.5px)] leading-[125%] font-extrabold">
          Titanic
        </div>
        <img
          className="absolute top-[calc(50%_-_169.5px)] left-[calc(50%_-_127.5px)] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-15@2x.png"
        />
      </div>
    </div>
  );
};

export default MovieIntro;
