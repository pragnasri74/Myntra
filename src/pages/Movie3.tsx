import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const Movie3 = () => {
  const navigate = useNavigate();

  const onPrabhasContainerClick = useCallback(() => {
    navigate("/char-7");
  }, [navigate]);

  const onAnushkaShettyContainerClick = useCallback(() => {
    navigate("/char-8");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[70.188rem] overflow-hidden text-left text-[2rem] text-gray-100 font-ibm-plex-sans">
      <i className="absolute top-[calc(50%_+_443.5px)] left-[calc(50%_-_208px)]">
        Developed by ~InnovHer Team
      </i>
      <NavBar logo="/logo7@2x.png" propLeft="calc(50% - 526px)" />
      <div className="absolute top-[calc(50%_-_329.5px)] left-[calc(50%_-_517px)] w-[54.875rem] h-[28.563rem] font-inter">
        <div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_439px)] font-extrabold inline-block w-[32.813rem] h-[3.875rem]">
          Bahubali Movie Characters:
        </div>
        <div
          className="absolute top-[calc(50%_-_97.5px)] left-[calc(50%_-_271px)] w-[15.938rem] h-[20.375rem] cursor-pointer"
          onClick={onPrabhasContainerClick}
        >
          <b className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_59.5px)]">
            Prabhas
          </b>
          <img
            className="absolute top-[calc(50%_-_163px)] left-[calc(50%_-_127.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-62@2x.png"
          />
        </div>
        <div
          className="absolute top-[calc(50%_-_97.5px)] left-[calc(50%_+_176px)] w-[16.438rem] h-[20.375rem] cursor-pointer"
          onClick={onAnushkaShettyContainerClick}
        >
          <b className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_118.5px)]">
            Anushka Shetty
          </b>
          <img
            className="absolute top-[calc(50%_-_163px)] left-[calc(50%_-_131.5px)] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
            alt=""
            src="/ellipse-73@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie3;
