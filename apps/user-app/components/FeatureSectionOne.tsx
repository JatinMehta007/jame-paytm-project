export function LandingFeatureOne(){
    return (
        <div className="pt-6 md:pt-10 px-4">
      <div className="flex flex-col items-center z-10">
      <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold font-title rounded-2xl h-auto md:h-20 lg:h-24 bg-black/50 ">SEND AND SPEND</h1>
      <p className="text-2xl md:text-4xl lg:text-8xl text-green-600 rounded-2xl bg-black/60 h-auto md:h-20 lg:h-24  ">MONEY WORLDWIDE</p>
      <button className="mt-6 text-lg md:text-xl lg:text-2xl px-4 py-2 bg-blue-600 text-white/80 border-4 md:border-6 lg:border-8 border-green-600 rounded-full hover:bg-blue-800 cursor-pointer transition-colors">
        Get Started
      </button>
      <img src="./image.png" alt="image"  className="w-full md:w-[85%] lg:w-[70%] max-w-4xl rounded-3xl mt-6 md:mt-10"/>
      </div>
        </div>
    )
}