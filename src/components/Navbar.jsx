import React, { useEffect, useState } from "react";
import { Navbar_li } from "../config/rawItems";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const location = useLocation();

  const [menu_btn, setmenu_btn] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated]);

  const [liHover, setliHover] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected_link, setselected_link] = useState("");

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#navbar div , #navbar li , #navbar button",
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 1,
        yPercent: 0,
        duration: 1,
      }
    );
  }, []);

  useEffect(() => {}, [location]);

  useEffect(() => {
    if (selected_link) {
      setmenu_btn(false);
    }
  }, [selected_link]);

  const onClick_menu_btn = () => {
    setmenu_btn(!menu_btn);
  };
  return (
    <>
      <nav
        className={` max-sm:relative max-sm:w-auto max-md:w-[100vw] flex flex-row bg-[#0a0a0c] justify-between
       items-center py-3 px-4 border-b-[1px] border-purple-950 z-[999] shadow-md shadow-[#0a0a0c] drop-shadow-2xl
       max-sm:flex-col max-sm:gap-9 lg:h-auto max-lg:h-auto max-md:h-auto ${
         menu_btn ? "" : "max-sm:h-[10vh]"
       }
       `}
        id="nav"
      >
        {/* left */}
        {/* <div className="flex max-sm:flex-row justify-between items-center w-full"> */}
        <div className="max-sm:hidden flex justify-center items-center">
          <Link
            to="/"
            className="flex flex-row justify-center 
        items-center gap-3"
          >
            <img
              src="https://github.com/BilalShahid-13/Vision.ai/public/download.svg"
              width={40}
              height={40}
            />
            <h6 className="text-white font-bold Josefin-Sans leading-loose tracking-wider">
              Vision.<span className="text-base font-extralight">ai</span>
            </h6>
          </Link>
          <CgMenuRightAlt
            className="max-md:hidden max-sm:flex max-sm:text-[#ff00cc]"
            id="menu-btn"
            size={40}
            onClick={onClick_menu_btn}
          />
        </div>

        {/* for mobile navbar */}
        <div className="max-sm:flex max-sm:flex-row justify-between items-center w-full lg:hidden md:hidden max-md:hidden max-lg:hidden">
          <Link
            to="/"
            className="flex flex-row justify-center 
        items-center gap-3"
            onClick={() => {
              setmenu_btn(false);
            }}
          >
            <img src="download.svg" width={40} height={40} />
            <h6 className="text-white font-bold Josefin-Sans leading-loose tracking-wider">
              Vision.<span className="text-base font-extralight">ai</span>
            </h6>
          </Link>
          <p className="text-neutral-300 Josefin-Sans text-center flex justify-center items-center">
            {location.pathname === "/" ? "Home" : selected_link}
            {/* {location.pathname} */}
          </p>
          <CgMenuRightAlt
            className="max-md:hidden max-sm:flex max-sm:text-[#ff00cc] cursor-pointer"
            id="menu-btn"
            size={40}
            onClick={onClick_menu_btn}
          />
        </div>

        {/* middle */}
        <div
          id="middle"
          className={`${
            menu_btn
              ? "max-sm:h-full max-sm:opacity-100"
              : "max-sm:h-0 max-sm:opacity-0"
          }`}
        >
          <ul
            className="flex flex-row gap-5 max-sm:flex-col max-sm:justify-center
           max-sm:items-center max-sm:gap-9"
          >
            {Navbar_li.map((items, index) => (
              <Link
                to={items.link}
                key={index}
                className={`text-zinc-500 max-md:text-sm text-base cursor-pointer ease-linear duration-300
                Josefin-Sans ${
                  index === liHover
                    ? "border-b-[2px] border-b-purple-800"
                    : "border-b-[1px] border-transparent"
                }`}
                onMouseEnter={() => {
                  setliHover(index);
                }}
                onClick={() => {
                  setselected_link(items.title);
                }}
                onMouseLeave={() => {
                  setliHover("");
                }}
              >
                {items.title}
              </Link>
            ))}
          </ul>
        </div>
        {/* right */}
        <div
          id="right"
          className={`flex ${
            isAuthenticated
              ? "flex-row-reverse max-sm:flex-col-reverse"
              : "flex-row"
          } gap-3 Josefin-Sans 
        justify-center items-center max-sm:flex-col max-sm:justify-center max-sm:items-center
        ${
          menu_btn
            ? "max-sm:h-full max-sm:opacity-100"
            : "max-sm:h-0 max-sm:opacity-0"
        }
        `}
        >
          {isAuthenticated ? (
            <>
              <div>
                {isAuthenticated && (
                  <div className="relative inline-block">
                    <div
                      className="cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <img
                        src={user.picture}
                        alt="User picture"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    {isOpen && (
                      <div
                        className="absolute mt-2 right-0 bg-zinc-900 
              shadow-lg rounded-lg p-4 z-[999] text-neutral-300 w-fit flex flex-col justify-center items-center gap-2"
                      >
                        <p className="text-base font-semibold Josefin-Sans text-neutral-100">
                          {user.name}
                        </p>
                        <p className="text-sm Josefin-Sans w-full whitespace-nowrap overflow-hidden text-ellipsis">
                          {user.email}
                        </p>
                        <button
                          className="border-[1px] border-purple-800 rounded-md 
                          px-2 py-1 hover:bg-purple-950 hover:text-neutral-200 max-sm:text-zinc-500"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Log out
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                className="text-neutral-300 max-sm:text-zinc-500"
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Login in
              </button>
            </>
          )}

          <Link
            to="/generate"
            className="border-[2px] bg-zinc-900 text-neutral-300 max-sm:text-zinc-500
           border-[#35195e] px-5 py-2 shadow
            shadow-[#242563] rounded-md"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
