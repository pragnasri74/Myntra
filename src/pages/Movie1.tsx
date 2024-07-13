import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Movie1 = () => {
  const navigate = useNavigate();

  const onKateWinsletContainerClick = useCallback(() => {
    navigate("/char-6");
  }, [navigate]);

  const onLeonardoDiCaprioContainerClick = useCallback(() => {
    navigate("/char-5");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[70.188rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_443.5px)] left-[calc(50%_-_208px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo5@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_315.5px)] left-[calc(50%_-_501px)] w-[54.75rem] h-[30.125rem] font-inter">
        <div className="absolute top-[calc(50%_-_241px)] left-[calc(50%_-_438px)] font-extrabold inline-block w-[27.188rem] h-[3.875rem]">
          Titanic Movie Characters:
        </div>
        <div
          className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_297px)] w-[15.938rem] h-[22.5rem] cursor-pointer"
          onClick={onKateWinsletContainerClick}
        >
          <b className="absolute top-[calc(50%_+_102px)] left-[calc(50%_-_88.5px)]">
            <p className="m-0">Kate Winslet</p>
          </b>
          <img
            className="absolute top-[calc(50%_-_180px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-61@2x.png"
          />
        </div>
        <div
          className="absolute top-[calc(50%_-_119px)] left-[calc(50%_+_146px)] w-[18.25rem] h-[20.063rem] cursor-pointer"
          onClick={onLeonardoDiCaprioContainerClick}
        >
          <b className="absolute top-[calc(50%_+_121.5px)] left-[calc(50%_-_146px)]">
            Leonardo DiCaprio
          </b>
          <img
            className="absolute top-[calc(50%_-_160.5px)] left-[calc(50%_-_131px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-71@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie1;
