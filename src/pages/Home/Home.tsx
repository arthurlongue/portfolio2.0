import ImgFetch from "../../hooks/ImgFetch";

export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-row sm:gap-10">
        <div className="sm:w-full sm:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            className="sidebar-state"
          />
          <label
            htmlFor="sidebar-mobile-fixed"
            className="sidebar-overlay"
          ></label>
          <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
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

                    <li className="menu-item menu-active">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Sobre</span>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="menu-1"
                        className="menu-toggle"
                      />
                      <label
                        className="menu-item justify-between"
                        htmlFor="menu-1"
                      >
                        <div className="flex gap-2">
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
                          <span>Contato</span>
                        </div>

                        <span className="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div className="menu-item-collapse">
                        <div className="min-h-0">
                          <label className="menu-item ml-6">
                            <a
                              href="https://github.com/arthurlongue"
                              target="_blank"
                            >
                              <p>
                                Github <i className="fa-brands fa-github"></i>
                              </p>
                            </a>
                          </label>
                          <label className="menu-item ml-6">
                            <a
                              href="https://www.linkedin.com/in/arthur-longue-freitas"
                              target="_blank"
                            >
                              <p>
                                Linkedin{" "}
                                <i className="fa-brands fa-linkedin"></i>
                              </p>
                            </a>
                          </label>
                          <label className="menu-item ml-6">
                            <a href="mailto:arthurlongue@hotmail.com">
                              <p>
                                Email <i className="fa-solid fa-envelope"></i>
                              </p>
                            </a>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
                <div className="divider my-0"></div>
                <section className="menu-section px-4">
                  <span className="menu-title">Settings</span>
                  <ul className="menu-items">
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-75"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 10l5 -6l5 6"></path>
                        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
                        <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      </svg>
                      Products
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="menu-2"
                        className="menu-toggle"
                      />
                      <label
                        className="menu-item justify-between"
                        htmlFor="menu-2"
                      >
                        <div className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-75"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                            <path d="M9 7l4 0"></path>
                            <path d="M9 11l4 0"></path>
                          </svg>
                          <span>Contracts</span>
                        </div>

                        <span className="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div className="menu-item-collapse">
                        <div className="min-h-0">
                          <label className="menu-item menu-item-disabled ml-6">
                            Create contract
                          </label>
                          <label className="menu-item ml-6">
                            All contracts
                          </label>
                          <label className="menu-item ml-6">
                            Pending contracts
                          </label>
                          <label className="menu-item ml-6">Security</label>
                        </div>
                      </div>
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
              className="btn btn-primary sm:hidden"
            >
              Open Sidebar
            </label>
          </div>
          <div>
            <h1 className="p-2 text-5xl text-red-800 lg:p-6">Projetos</h1>
          </div>
          <div className="my-4 grid grid-flow-row grid-cols-1 gap-8 xl:grid-cols-2">
            <ImgFetch></ImgFetch>
          </div>
        </div>
      </div>
    </section>
  );
}