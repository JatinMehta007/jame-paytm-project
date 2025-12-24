import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import { LandingFeatureOne } from "../components/FeatureSectionOne";
import GlobeSection from "../components/FeatureSectionTwo";
import { LampSection } from "../components/LampSection";
import { Footer } from "../components/Footer";



export default async function Page() {
  
  const session = await getServerSession(authOptions);
  
  if (session?.user) {
    redirect('/dashboard')
  }
  return<>
  <div className="text-8xl font-title text-green-600 bg-gradient-to-b from-blue-600/90 via-blue-700 to-slate-950  overflow-x-hidden">
    <LandingFeatureOne></LandingFeatureOne>
    <GlobeSection></GlobeSection>
    <div className="grid grid-cols-2">
<div>
  <LampSection></LampSection>
</div>

  <div className="flex flex-col mt-20 ">
      <p className="">Your digital card</p>
      <p className="text-gray-300"> <span className="text-white/30">Built for a</span> borderless world</p>
      <div className="  w-32 text-center
    rounded-full border border-white/20 px-4 py-1
    text-xs uppercase tracking-widest text-white/60
    bg-white/10">
    Coming Soon
      </div>
      </div>

    </div>

    <Footer></Footer>
  </div>
   </>
}
