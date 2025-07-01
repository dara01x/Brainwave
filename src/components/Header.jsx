import { brainwave } from "../assets";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm"
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </div>

        <nav className="hidden lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <div
                key={item.id}
                className={`block relative font-code text-2xl uppercase text-n-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 xl:px-12`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

       

        {/* Hamburger menu removed */}
      </div>
    </div>
  );
};

export default Header;
