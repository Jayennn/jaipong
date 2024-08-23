import { Info, Play } from "lucide-react";
import { NavigationBar } from "./components/NavigationBar.tsx";

function App() {

  return (
    <>
      <main>
        <NavigationBar />
        <div className="grid grid-cols-1">
          <div className="md:col-start-1 md:row-start-1 flex flex-col-reverse z-10 relative pt-6 pb-14 px-4 md:px-10 text-[#222628] md:text-white">
            <div className="flex flex-col gap-5 md:max-w-sm lg:max-w-[520px]">
              <h1 className="text-3xl lg:text-5xl font-bold">How To Say Goodbye Before Classes Begin</h1>
              <p className="text-sm md:text-base font-medium text-justify">This is how we dance our stories. Through every step, every gesture,
                every rhythm of Jaipong, we express our farewells and new beginnings.</p>
              <p className="text-base font-medium">Click ‘Play’ to see the details</p>
              <div className="flex items-center gap-4">
                <button className="w-full md:w-fit md:px-14 md:h-12 rounded bg-white h-10 px-4 py-2 inline-flex items-center justify-center gap-3 border shadow">
                  <Play size={20} fill="black" stroke="black"/>
                  <p className="text-sm md:text-lg text-[#222628] font-medium">Play</p>
                </button>
                <button className="w-full md:w-fit md:px-14 md:h-12 rounded bg-[#222628]/80 h-10 px-4 py-2 inline-flex items-center justify-center gap-3">
                  <Info size={20}  stroke="white"/>
                  <p className="text-sm md:text-lg text-white font-medium">Info</p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-3 row-start-1 relative overflow-hidden">
            <div className="-z-[1] bg-[#222628] opacity-[50%] w-full  absolute top-0 h-screen"></div>
            <div className="-z-[2] relative md:max-h-screen ">
              <video loop autoPlay muted>
                <source src="/placeholder.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App