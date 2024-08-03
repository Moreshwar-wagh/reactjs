import {
  BellAlertIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const navbarMenuBtn = [
    {
      name: "Home",
    },
    {
      name: "Transaction",
      icon: <ChevronDownIcon className="size-4" />,
    },
    {
      name: "Accounts",
      icon: <ChevronDownIcon className="size-4" />,
    },
  ];
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 rounded-br-full rounded-bl-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* logo */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Xpentra
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-2 justify-center">
            <div className="flex items-center p-2 rounded-full gap-2 bg-gray-300">
              <p className="flex items-center w-full p-2 bg-blue-500 rounded-full text-[#183870] font-semibold">
                03
              </p>
              <BellAlertIcon className="size-6 text-gray-700 w-full" />
            </div>
            <div className="p-2 bg-gray-300 rounded-full">
              <div className="p-1 bg-[#1c396c] rounded-full">
                <UserCircleIcon className="size-7 text-white" />
              </div>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-[#8d9cb5]">
            {navbarMenuBtn.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    className="flex py-2 px-3 text-[#1c396c] rounded md:bg-transparent md:p-0 hover:text-blue-600 items-center gap-1"
                    aria-current="page"
                  >
                    {item?.name} {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
