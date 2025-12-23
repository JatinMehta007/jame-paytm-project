export function LandingFeatureOne(){
    return (
        <div className=" pt-10">
            <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
       style={{ backgroundImage: "url('/noise.png')" }} />
      <div className="flex flex-col items-center z-10">
      <h1 className=" font-bold font-title rounded-2xl h-24 bg-black/50  ">SEND AND SPEND</h1>
      <p className="text-green-600 rounded-2xl bg-black/60 h-24 ">MONEY WORLDWIDE</p>
      <button className="mt-6 text-2xl px-4 py-2 bg-blue-800 text-white/80 border-8 border-green-600 rounded-full hover:bg-blue-700 ">
        Get Started
      </button>
      <img src="./image.png" alt="loog"  className="w-[70%] rounded-3xl mt-10"/>
      </div>
        </div>
    )
}