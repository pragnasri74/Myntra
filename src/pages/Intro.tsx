import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar";

const Intro = () => {
  const navigate = useNavigate();

  const onARHomeDecorClick = useCallback(() => {
    navigate("/decor-intro");
  }, [navigate]);

  const onMovieCostumesContainerClick = useCallback(() => {
    navigate("/movie-intro");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-ibm-plex-sans">
      <div className="absolute top-[calc(50%_-_368px)] left-[calc(50%_-_359px)] w-[45.813rem] h-[8.813rem] text-[4.375rem]">
        <div className="absolute top-[calc(50%_-_70.5px)] left-[calc(50%_-_366.5px)] font-semibold inline-block w-[45.813rem] h-[6.625rem]">
          {" "}
          Myntra HackerRamp
        </div>
        <i className="absolute top-[calc(50%_+_23.5px)] left-[calc(50%_-_153.5px)] text-[2.25rem] font-medium">
          {" "}
          WeForShe-2024
        </i>
      </div>
      <div
        className="absolute top-[calc(50%_-_171px)] left-[calc(50%_+_8px)] w-[27.188rem] h-[25.188rem] cursor-pointer font-inter"
        onClick={onARHomeDecorClick}
      >
        <img
          className="absolute top-[calc(50%_-_201.5px)] left-[calc(50%_-_217.5px)] rounded-21xl w-[27.188rem] h-[21.188rem] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="absolute top-[calc(50%_+_162.5px)] left-[calc(50%_-_123.5px)] font-extrabold">{`AR Home Decor `}</div>
        <img
          className="absolute top-[calc(50%_-_201.5px)] left-[calc(50%_+_112.5px)] w-[5.313rem] h-[5.625rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div
        className="absolute top-[calc(50%_-_171px)] left-[calc(50%_-_442px)] w-[27.188rem] h-[25.188rem] cursor-pointer font-inter"
        onClick={onMovieCostumesContainerClick}
      >
        <img
          className="absolute top-[calc(50%_-_201.5px)] left-[calc(50%_-_217.5px)] rounded-21xl w-[27.188rem] h-[21.188rem] object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className="absolute top-[calc(50%_+_162.5px)] left-[calc(50%_-_133.5px)] font-extrabold">
          Movie Costumes
        </div>
        <img
          className="absolute top-[calc(50%_+_29.5px)] left-[calc(50%_-_217.5px)] w-[16.313rem] h-[6.75rem] object-cover"
          alt=""
          src="/barbiethemovielogoremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_201.5px)] left-[calc(50%_+_118.5px)] w-[5.313rem] h-[5.625rem] object-cover"
          alt=""
          src="/logo1@2x.png"
        />
      </div>
      <i className="absolute top-[calc(50%_+_359px)] left-[calc(50%_-_216px)] text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo2@2x.png" />
    </div>
  );
};

export default Intro;
