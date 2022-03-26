import IllustrationHero from "./assets/illustration-hero.svg";
import IconMusic from "./assets/icon-music.svg";

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/pattern-background-desktop.svg')] bg-no-repeat w-full h-screen bg-contain">
        <div className="fixed w-full h-screen bg-[#E0E8FF]/[0.75]"></div>
        <div className="flex justify-center items-center h-screen font-[Outfit]">
          <div className="w-[390px] rounded-xl bg-white h-[600px] flex flex-col my-auto z-50">
            <img
              src={IllustrationHero}
              alt="Illustration hero"
              className="rounded-tr-xl rounded-tl-xl"
            />
            <div className="m-5 flex flex-col flex-grow items-center justify-evenly">
              <h1 className="text-2xl font-bold">Order Summary</h1>

              <p className="text-slate-500 text-center text-[16px]">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>

              <div className="flex justify-between self-stretch mx-2 items-center bg-[#F5F7FF] py-4 px-4 rounded-xl">
                <div className="flex gap-4">
                  <img src={IconMusic} alt="Icon music" className="" />
                  <div className="flex flex-col">
                    <p className="text-md font-bold">Annual Plan</p>
                    <p className="text-gray-500">$59.99/year</p>
                  </div>
                </div>
                <p className="underline text-[#3829E0] font-bold hover:cursor-pointer hover:no-underline">
                  Change
                </p>
              </div>

              <button className="text-white bg-[#3829E0] hover:bg-[#3829E0]/70 font-bold py-2 rounded-lg self-stretch mx-2 shadow-[#3829E0]/25 shadow-xl">
                Proceed to Payment
              </button>
              <p className="text-slate-500 font-bold hover:cursor-pointer hover:text-black">
                Cancel order
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
