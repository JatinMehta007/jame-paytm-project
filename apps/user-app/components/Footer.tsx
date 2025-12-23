export function Footer(){
    return ( <>
    <footer className="relative z-10 mt-40 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-blue-100">
      
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">Jame</h3>
            <p className="mt-2 text-blue-200/70">
              Send and spend money worldwide with one global digital card.
            </p>
          </div>
      
          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="font-medium text-white">Product</span>
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
      
          {/* Trust */}
          <div className="flex flex-col gap-2">
            <span className="font-medium text-white">Trust & Legal</span>
            <span className="text-blue-200/70">🔒 Bank-grade security</span>
            <span className="text-blue-200/70">🌍 Used in 120+ countries</span>
          </div>
        </div>
      
        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200/60">
          © {new Date().getFullYear()} Jame. All rights reserved.
        </div>
      </footer>
    </>
      )
}