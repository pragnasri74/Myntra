import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Movie2 = () => {
  const navigate = useNavigate();

  const onRanveerSinghContainerClick = useCallback(() => {
    navigate("/char-3");
  }, [navigate]);

  const onAliaBhattContainerClick = useCallback(() => {
    navigate("/char-4");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[70.188rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_443.5px)] left-[calc(50%_-_169px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo6@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_315.5px)] left-[calc(50%_-_526px)] w-[54.75rem] h-[28.063rem] font-inter">
        <div className="absolute top-[calc(50%_-_224.5px)] left-[calc(50%_-_438px)] font-extrabold inline-block w-[50.5rem] h-[2.75rem]">
          Rocky aur Rani Kii Prem Kahaani Movie Characters:
        </div>
        <div
          className="absolute top-[calc(50%_-_108.5px)] left-[calc(50%_-_264px)] w-[15.938rem] h-[20.813rem] cursor-pointer"
          onClick={onRanveerSinghContainerClick}
        >
          <b className="absolute top-[calc(50%_+_127.5px)] left-[calc(50%_-_109.5px)]">
            Ranveer Singh
          </b>
          <img
            className="absolute top-[calc(50%_-_166.5px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-10@2x.png"
          />
        </div>
        <div
          className="absolute top-[calc(50%_-_108.5px)] left-[calc(50%_+_183px)] w-[15.938rem] h-[20.313rem] cursor-pointer"
          onClick={onAliaBhattContainerClick}
        >
          <b className="absolute top-[calc(50%_+_123.5px)] left-[calc(50%_-_75.5px)]">
            Alia Bhatt
          </b>
          <img
            className="absolute top-[calc(50%_-_162.5px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-72@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie2;
