import { motion } from "framer-motion";
import Welcome from "../../hooks/Welcome";
import About from "../About/About";
import Hightlights from "../Highlights/Hightlights";
import Projects from "../Projects/Projects";
export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-row bg-[url(/assets/matrixdarkredbg.jpg)] bg-contain ">
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
                    <li className="menu-item p-0">
                      <a className="w-full" href="#highlights">
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
                      </a>
                    </li>
                    <li className="menu-item p-0">
                      <a className="w-full" href="#about">
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
                      </a>
                    </li>
                    <div className="divider my-0"></div>
                    <a href="https://github.com/arthurlongue" target="_blank">
                      <li>
                        <label className="menu-item ml-1">
                          <p>
                            <i className="fa-brands fa-github"></i> Github
                          </p>
                        </label>
                      </li>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/arthur-longue-freitas"
                      target="_blank"
                    >
                      <li>
                        <label className="menu-item ml-1">
                          <p>
                            <i className="fa-brands fa-linkedin"></i> Linkedin{" "}
                          </p>
                        </label>
                      </li>
                    </a>
                    <a href="mailto:arthurlongue@hotmail.com">
                      <li>
                        <label className="menu-item ml-1">
                          <p>
                            <i className="fa-solid fa-envelope"></i> Email
                          </p>
                        </label>
                      </li>
                    </a>
                    <a
                      href="\assets\Currículo Arthur Longue Programador Front.pdf"
                      target="_blank"
                    >
                      <li>
                        <label className="menu-item ml-1">
                          <p>
                            <i className="fa-solid fa-envelope"></i> Currículo
                          </p>
                        </label>
                      </li>
                    </a>
                  </ul>
                </section>
              </nav>
            </section>
            <section className="sidebar-footer justify-end bg-gray-2 pt-2">
              <div className="divider my-0"></div>
              <div className="dropdown z-50 flex h-fit w-full">
                <label
                  className="whites mx-2 flex h-fit w-full p-0 "
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
              </div>
            </section>
          </aside>
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <motion.label
              animate={{
                x: [10, 0, 10],
                y: [0, 10, 0],
                scale: [0.9, 1.2, 0.9],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              htmlFor="sidebar-mobile-fixed"
              className="btn fixed bottom-4 left-3 z-10 h-[60px] w-[60px] rounded-full bg-blue-400 p-0 shadow-inner shadow-blue-200 bg-opacity-30 sm:left-10 sm:top-10 3xl:hidden"
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NS45OTQ4OCwyNTYpIHJvdGF0ZSgxODApIHNjYWxlKDUuMTIsNS4xMikiPjxwYXRoIGQ9Ik0xNSwxLjkwNmwtMy45OTgsMi4zMDhsLTAuMDAyLC0wLjAwMWwtMC4wMDEsNC42MjJsMjQuMDAxLDEzLjg1Nmw0LC0yLjMxdi00LjYxOXoiIGZpbGw9IiM5OTFiMWIiPjwvcGF0aD48cGF0aCBkPSJNMzksMTUuNzYybC0yNCwtMTMuODU2bC00LDIuMzA5bDI0LDEzLjg1N3oiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMzUsMTguMDcydjQuNjE5bDQsLTIuMzF2LTQuNjE5eiIgZmlsbD0iIzk5MWIxYiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNSwyNy4zMDlsLTMuOTk4LDIuMzA4bC0wLjAwMiwtMC4wMDFsLTAuMDAxLDQuNjIybDI0LjAwMSwxMy44NTZsNCwtMi4zMDl2LTQuNjE5eiIgZmlsbD0iIzk5MWIxYiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOSw0MS4xNjZsLTI0LC0xMy44NTdsLTQsMi4zMWwyNCwxMy44NTZ6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTM1LDQzLjQ3NXY0LjYxOWw0LC0yLjMwOXYtNC42MTl6IiBmaWxsPSIjOTkxYjFiIj48L3BhdGg+PHBhdGggZD0iTTE1LDE0LjYwOGwtMy45OTgsMi4zMDhsLTAuMDAyLC0wLjAwMmwtMC4wMDEsNC42MjNsMjQuMDAxLDEzLjg1NWw0LC0yLjMwOXYtNC42MTl6IiBmaWxsPSIjOTkxYjFiIj48L3BhdGg+PHBhdGggZD0iTTM5LDI4LjQ2NGwtMjQsLTEzLjg1NmwtNCwyLjMwOWwyNCwxMy44NTd6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTM1LDMwLjc3NHY0LjYxOGw0LC0yLjMwOXYtNC42MTl6IiBmaWxsPSIjOTkxYjFiIj48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
              />
            </motion.label>
          </div>
          <Welcome></Welcome>
          <Hightlights></Hightlights>
          <About></About>
          <Projects></Projects>
        </div>
      </div>
    </section>
  );
}
