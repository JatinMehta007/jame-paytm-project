
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import { LandingFeatureOne } from "../components/FeatureSectionOne";
import GlobeSection from "../components/FeatureSectionTwo";
import { LampSection } from "../components/LampSection";
import { Footer } from "../components/Footer";
import { AppbarClient } from "../components/AppbarClient";

export default async function Page() {
  
  const session = await getServerSession(authOptions);
  
  if (session?.user) {
    redirect('/dashboard')
  }
  return<>
  <div className="text-4xl md:text-6xl lg:text-8xl font-title text-green-600 bg-gradient-to-b from-blue-600/90 via-blue-700 to-slate-950 overflow-x-hidden">
  <div className="bg-white/90">
  <AppbarClient />
  </div>
    <LandingFeatureOne></LandingFeatureOne>
    <GlobeSection></GlobeSection>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
<div>
  <LampSection></LampSection>
</div>

  <div className="flex flex-col mt-10 md:mt-20 px-4 md:px-0">
      <p className="text-xl md:text-2xl lg:text-8xl">Your digital card</p>
      <p className="text-gray-300 text-lg md:text-xl lg:text-8xl"> <span className="text-white/30">Built for a</span> borderless world</p>
      <div className="w-32 text-center
    rounded-full border border-white/20 px-4 py-1
    text-xs uppercase tracking-widest text-white/60
    bg-white/10 mt-4">
    Coming Soon
      </div>
      </div>

    </div>

    <Footer></Footer>
  </div>
   </>
}
