import { Info, Play } from "lucide-react";
import { Link } from "react-router-dom";
function App() {

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="container col-start-1 row-start-1 flex flex-col-reverse z-10 relative pt-6 pb-14 px-4 md:px-10 text-white">
          <div className="flex flex-col gap-5 md:max-w-sm lg:max-w-[880px]">
            {/* <h1 className="text-3xl lg:text-5xl font-bold">How To Say Goodbye Before Classes Begin</h1>
            <p className="text-sm md:text-base font-medium text-justify">This is how we dance our stories. Through every step, every gesture,
              every rhythm of Jaipong, we express our farewells and new beginnings.</p> */}
              <h1 className="text-2xl lg:text-4xl font-bold">🏆 Legendary Achievement Unlocked!</h1>
              <p className="lg:max-w-md text-sm md:text-base font-medium text-justify">Selamat Mutiara telah menerima Achievement "Legendary"! Pencapaian luar biasa ini merupakan bukti dedikasi dan kerja kerasmu selama ini. Teruslah berjuang dan menginspirasi!</p>
            <p className="text-sm md:text-base font-medium">Click ‘Play’ to see the details</p>
            <div className="flex items-center gap-4">
              <Link to="https://youtu.be/ucRVDoFkcxc?si=OOcJvou_4av6SUt-" className="w-full md:w-fit md:px-14 md:h-12 rounded bg-white h-10 px-4 py-2 inline-flex items-center justify-center gap-3 border shadow">
                <Play size={14} fill="black" stroke="black"/>
                <p className="text-sm md:text-lg text-[#222628] font-medium">Play her song</p>
              </Link>
              <Link to="/information" className="w-full md:w-fit md:px-14 md:h-12 rounded bg-[#222628]/80 h-10 px-4 py-2 inline-flex items-center justify-center gap-3">
                <Info size={20}  stroke="white"/>
                <p className="text-sm md:text-lg text-white font-medium">Info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-start-1 relative overflow-hidden">
          <div className="-z-[1] bg-[#222628] opacity-[50%] w-full  absolute top-0 h-screen"></div>
          <img className="bg-black -z-[2] relative h-screen object-contain w-screen" src="/mutiara.jpg" alt="Placeholder"/>
          {/* <div className="-z-[2] relative hidden md:block md:max-h-screen ">
            <video className="w-full min-h-screen object-cover" loop autoPlay muted>
              <source src="/placeholder.webm" type="video/webm"/>
            </video>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App