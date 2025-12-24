import { LinkedinIcon } from "@repo/ui/linkedinIcon";
import { GithubIcon } from "@repo/ui/githubIcon";

export function Footer(){
    return ( <>
    <footer className="relative z-10 mt-40 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10">
    <div className="flex justify-between ">
          <div className="xl:mx-24 ml-20 mt-8 md:mt-0">
            <div className="flex ">
          <img src="./images/final.svg" alt="font" className="ml-10 xl:h-[40px] md:h-[20px] hidden md:block  lg:mt-10 md:mt-5   " />
          <p className="mt-10 text-3xl ml-3">JAME</p>
            </div>
          <p className="text-gray-500 text-sm ml-7 xl:ml-[90px] md:ml-[70px]">A product by <a href="https://github.com/JatinMehta007"><span className="text-green-500"> Jatin Mehta</span></a></p>
          <p className="text-gray-500 text-sm ml-7 xl:ml-[90px] mt-2 md:ml-[70px]  mb-16">Building in public <a href="https://twitter.com/JatinMehta35630"> <span className="text-green-500"> @JatinMehta35630 </span></a></p>
          </div>

          <div className="xl:mx-32 mx-8 flex flex-col items-center gap-10 py-10 ">
            <a href="https://github.com/JatinMehta007/DocPlatter" target="_blank" rel="noopener noreferrer">
            <GithubIcon></GithubIcon>
            </a>
            <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferre">
            <LinkedinIcon></LinkedinIcon>
            </a>
          </div>
          </div>
      </footer>
    </>
      )
}