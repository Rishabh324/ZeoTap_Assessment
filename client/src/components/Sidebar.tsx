import { Link, useLocation } from "react-router-dom";
import { useScreen } from "../context/ScreenContext";
import { FiDatabase } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import { LuCombine } from "react-icons/lu";
import { FaRegCheckSquare } from "react-icons/fa";

const sidebarLinks = [
  {
    pathname: "/",
    title: "Home",
    icons: <IoHomeOutline />,
  },
  {
    pathname: "/create",
    title: "Create AST",
    icons: <MdOutlineCreate />,
  },
  {
    pathname: "/combine",
    title: "Combine Rules",
    icons: <LuCombine />,
  },
  {
    pathname: "/evaluate",
    title: "Evaluate JSON Data",
    icons: <FaRegCheckSquare />,
  },
  {
    pathname: "/available-rules",
    title: "Available Rules",
    icons: <FiDatabase />,
  },
]

const Sidebar = (): React.JSX.Element => {
  // @ts-expect-error "unexpected error"
  const { isMobile, sidebarOpen } = useScreen();

  return (
    <>
      <div className={`${isMobile && !sidebarOpen ? "hidden": ""} ${isMobile && sidebarOpen ? "absolute": ""} w-1/5 h-full bg-green-700 flex flex-col items-center p-6 min-w-[300px] z-10`}>
        {sidebarLinks.map(({ pathname, title, icons }) => (
          <SidebarComponent
            key={pathname}
            pathname={pathname}
            title={title}
            icons={icons}
          />
        ))}
      </div>
    </>
  );
}

const SidebarComponent = ({ pathname, title, icons }: {
  pathname: string,
  title: string,
  icons: JSX.Element,
}): React.JSX.Element => {
  const { pathname: locationPathName } = useLocation();
  // @ts-expect-error "unexpected error"
  const { toggleSidebar } = useScreen();

  return (
    <Link to={pathname} onClick={toggleSidebar} className={
      locationPathName === pathname ?
        "text-white bg-green-900 w-full m-2 p-3 rounded-md transition-all flex items-center gap-2" :
      "text-white bg-green-500 w-full m-2 p-3 rounded-md hover:bg-green-900 transition-all flex items-center gap-2"
    }>
      {icons}{title}
    </Link>
  );
}

export default Sidebar