
export default function Information() {
  return (
    <>
      <div className="h-screen container grid gap-4 justify-items-center place-content-center">
        <img
          src="/coming-soon.svg"
          alt="coming-soon"
          width={ 240 }
          height={ 240 }
        />
        <div className="flex flex-col gap-2 justify-center text-center">
          <h1 className="text-4xl font-bold text-[#1D2739]">Coming Soon!</h1>
          <p className="text-lg font-medium text-[#475367]">We are curently working on this feature and will launce
            soon</p>
        </div>
      </div>
    </>
  )
}