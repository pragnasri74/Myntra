import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import { useNavigate } from "react-router-dom";

const DecorIntro = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/decor-1");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/decor-3");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/decor-2");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[111.375rem] overflow-hidden text-left text-[1.625rem] text-black font-inter">
      <NavBar logo="/logo9@2x.png" propLeft="calc(50% - 526px)" />
      <i className="absolute top-[calc(50%_+_765px)] left-[calc(50%_-_215px)] text-[2rem] font-ibm-plex-sans text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <b className="absolute top-[calc(50%_-_703px)] left-[calc(50%_-_526px)] text-[3.438rem] leading-[125%] inline-block w-[22.75rem] h-[4.438rem]">
        Home Decor:
      </b>
      <div className="absolute top-[calc(50%_-_559px)] left-[calc(50%_-_532px)] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[calc(50%_+_130.5px)] left-[calc(50%_-_202.6px)] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[calc(50%_+_1.5px)] left-[calc(50%_-_163.45px)] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <div className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_170.25px)] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_96.15px)] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_153.05px)] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_+_9.15px)] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_99px)] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_34px)] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_63.35px)] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_82.7px)] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-41@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_207.15px)] w-[12.375rem] h-[3.75rem] text-[1.875rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                Add to Bag
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_261.5px)] left-[calc(50%_-_225.5px)] w-[27.85rem] h-[22.55rem] object-cover"
          alt=""
          src="/group-4@2x.png"
        />
      </div>
      <div className="absolute top-[calc(50%_+_101px)] left-[calc(50%_-_262px)] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[calc(50%_+_130.5px)] left-[calc(50%_-_202.6px)] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[calc(50%_+_1.5px)] left-[calc(50%_-_163.45px)] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick1}
            >
              <div className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_170.25px)] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_96.15px)] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_153.05px)] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_+_9.15px)] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_99px)] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_34px)] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_63.35px)] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_82.7px)] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-41@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_207.15px)] w-[12.375rem] h-[3.75rem] text-[1.875rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                Add to Bag
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_260.5px)] left-[calc(50%_-_209.5px)] w-[26.625rem] h-[22.563rem] object-cover"
          alt=""
          src="/group-6@2x.png"
        />
      </div>
      <div className="absolute top-[calc(50%_-_559px)] left-[calc(50%_+_8px)] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_262.5px)] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[calc(50%_+_130.5px)] left-[calc(50%_-_202.6px)] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[calc(50%_+_1.5px)] left-[calc(50%_-_163.45px)] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick2}
            >
              <div className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_170.25px)] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_96.15px)] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_153.05px)] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_+_9.15px)] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_99px)] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_34px)] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_63.35px)] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_82.7px)] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-41@2x.png"
              />
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_207.15px)] w-[12.375rem] h-[3.75rem] text-[1.875rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                Add to Bag
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_261.5px)] left-[calc(50%_-_212.5px)] rounded-21xl w-[26.625rem] h-[22.563rem] object-cover"
          alt=""
          src="/rectangle-84@2x.png"
        />
      </div>
    </div>
  );
};

export default DecorIntro;
