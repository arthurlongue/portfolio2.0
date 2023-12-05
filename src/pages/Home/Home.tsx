import Welcome from "../../hooks/Welcome";
import About from "../About/About";
import Hightlights from "../Highlights/Hightlights";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-row sm:gap-10">
        <div className="3xl:w-full 3xl:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            className="sidebar-state"
          />
          <label
            htmlFor="sidebar-mobile-fixed"
            className="sidebar-overlay"
          ></label>
          <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-3xl:fixed max-3xl:-translate-x-full">
            <section className="sidebar-title items-center p-4">
              <svg
                fill="none"
                height="42"
                viewBox="0 0 32 32"
                width="42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="100%" rx="16" width="100%"></rect>
                <path
                  clipRule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span>Arthur</span>
                <span className="text-xs font-normal text-content2">
                  Longue
                </span>
              </div>
            </section>
            <section className="sidebar-content">
              <nav className="menu rounded-md">
                <section className="menu-section px-4">
                  <span className="menu-title">Menu</span>
                  <ul className="menu-items">
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Projetos</span>
                    </li>

                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Sobre</span>
                    </li>
                    <div className="divider my-0"></div>
                    <li>
                      <label className="menu-item ml-1">
                        <a
                          href="https://github.com/arthurlongue"
                          target="_blank"
                        >
                          <p>
                            <i className="fa-brands fa-github"></i> Github
                          </p>
                        </a>
                      </label>
                    </li>
                    <li>
                      <label className="menu-item ml-1">
                        <a
                          href="https://www.linkedin.com/in/arthur-longue-freitas"
                          target="_blank"
                        >
                          <p>
                            <i className="fa-brands fa-linkedin"></i> Linkedin{" "}
                          </p>
                        </a>
                      </label>
                    </li>
                    <li>
                      <label className="menu-item ml-1">
                        <a href="mailto:arthurlongue@hotmail.com">
                          <p>
                            <i className="fa-solid fa-envelope"></i> Email
                          </p>
                        </a>
                      </label>
                    </li>
                  </ul>
                </section>
              </nav>
            </section>
            <section className="sidebar-footer justify-end bg-gray-2 pt-2">
              <div className="divider my-0"></div>
              <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                <label
                  className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                  tabIndex={0}
                >
                  <div className="flex flex-row gap-4 p-4">
                    <div className="avatar-square avatar avatar-md rounded-full ">
                      <img src="assets/foto perfil.jpg" alt="avatar" />
                    </div>

                    <div className="flex flex-col">
                      <span>Arthur Longue</span>
                    </div>
                  </div>
                </label>
                <div className="dropdown-menu dropdown-menu-right-top ml-2">
                  <a className="dropdown-item text-sm">Profile</a>
                  <a tabIndex={1} className="dropdown-item text-sm">
                    Account settings
                  </a>
                  <a tabIndex={1} className="dropdown-item text-sm">
                    Change email
                  </a>
                  <a tabIndex={1} className="dropdown-item text-sm">
                    Subscriptions
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="btn bg-red-800 3xl:hidden"
            >
              Menu
            </label>
          </div>
          <Welcome></Welcome>
          <Hightlights></Hightlights>
          <Projects></Projects>
          <About></About>
        </div>
      </div>
    </section>
  );
}
