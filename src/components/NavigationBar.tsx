import { Outlet, useLocation } from "react-router-dom";

export function NavigationBar() {
  const router = useLocation();
  return (
    <>
      <nav style={{color: router.pathname !== "/information" ? "#FFFFFF" : "#222628"}} className="mb-5 h-14 fixed top-0 left-0 z-10 px-4 md:px-10 flex items-center w-full">
        <div className="container flex items-center justify-between">
          <h1  className="font-semibold text-sm md:text-xl">Araa</h1>
          {/* {router.pathname !== "/" && (
            <div className="flex items-center font-semibold">
              <Link to="/">Home</Link>
            </div>
          )} */}
        </div>
      </nav>
      <Outlet/>
    </>
  )
}