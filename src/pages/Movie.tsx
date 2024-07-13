import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();

  const onMargotRobbieContainerClick = useCallback(() => {
    navigate("/char-1");
  }, [navigate]);

  const onRyanGoslingContainerClick = useCallback(() => {
    navigate("/char-2");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[70.188rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_443.5px)] left-[calc(50%_-_216px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo3@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_336.5px)] left-[calc(50%_-_526px)] w-[54.938rem] h-[28.75rem] font-inter">
        <div className="absolute top-[calc(50%_-_230px)] left-[calc(50%_-_439.5px)] font-extrabold inline-block w-[27.188rem] h-[3.875rem]">
          Barbie Movie Characters:
        </div>
        <div
          className="absolute top-[calc(50%_-_96px)] left-[calc(50%_-_272.5px)] w-[16.125rem] h-[20.375rem] cursor-pointer"
          onClick={onMargotRobbieContainerClick}
        >
          <b className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_100px)]">
            Margot Robbie
          </b>
          <img
            className="absolute top-[calc(50%_-_163px)] left-[calc(50%_-_129px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-6@2x.png"
          />
        </div>
        <div
          className="absolute top-[calc(50%_-_96px)] left-[calc(50%_+_184.5px)] w-[15.938rem] h-[20.375rem] cursor-pointer"
          onClick={onRyanGoslingContainerClick}
        >
          <b className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_88.5px)]">
            Ryan Gosling
          </b>
          <img
            className="absolute top-[calc(50%_-_163px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-7@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
