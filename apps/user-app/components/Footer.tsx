import { LinkedinIcon } from "@repo/ui/linkedinIcon";
import { GithubIcon } from "@repo/ui/githubIcon";

export function Footer(){
    return ( <>
    <footer className="relative z-10 mt-20 md:mt-40 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10">
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-20 xl:px-24">
          <div className="mt-8 md:mt-0">
            <div className="flex items-center">
          <img src="./images/final.svg" alt="font" className="ml-2 md:ml-10 xl:h-[40px] md:h-[20px] hidden md:block lg:mt-10 md:mt-5" />
          <p className="mt-6 md:mt-10 text-2xl md:text-3xl ml-3">JAME</p>
            </div>
          <p className="text-gray-500 text-xs md:text-sm ml-3 md:ml-[70px] xl:ml-[90px] mt-2">A product by <a href="https://github.com/JatinMehta007"><span className="text-green-500"> Jatin Mehta</span></a></p>
          <p className="text-gray-500 text-xs md:text-sm ml-3 md:ml-[70px] xl:ml-[90px] mt-2 mb-8 md:mb-16">Building in public <a href="https://twitter.com/JatinMehta35630"> <span className="text-green-500"> @JatinMehta35630 </span></a></p>
          </div>

          <div className="xl:mx-32 mx-4 md:mx-8 flex flex-row md:flex-col items-center justify-center md:justify-start gap-6 md:gap-10 py-6 md:py-10">
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