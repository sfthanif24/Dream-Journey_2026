import logoFooterImg from "../../assets/logo-footer.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="relative mt-64 lg:mt-[400px]">
      <Newsletter />

      <footer className="bg-[#0b0c16] text-white pt-64 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex justify-center">
            <img
              src={logoFooterImg}
              alt="BPL Dream 11 footer logo"
              className="h-[120px] w-auto sm:h-[140px]"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3 md:gap-8 lg:gap-20">
            {/* About Us */}
            <div className="flex flex-col md:text-left">
              <h3 className="mb-5 text-lg font-semibold text-white">
                About Us
              </h3>
              <p className="text-base leading-7 text-white/60 md:pr-4 lg:pr-10">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:mx-auto md:w-3/4">
              <h3 className="mb-5 text-lg font-semibold text-white">
                Quick Links
              </h3>
              <ul className="space-y-3 pl-5 text-base list-disc text-white/60">
                <li>
                  <a href="#home" className="transition hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="flex flex-col">
              <h3 className="mb-5 text-lg font-semibold text-white">
                Subscribe
              </h3>
              <p className="mb-5 text-base leading-7 text-white/60">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex w-full items-stretch">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full min-w-0 flex-1 rounded-l-xl border-y border-l border-white/20 bg-white px-5 py-3 text-base text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="rounded-r-xl bg-gradient-to-r from-pink-400 to-yellow-400 px-6 py-3 text-base font-bold text-[#131313] transition hover:brightness-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center text-[16px] text-white/60">
            @2024 Your Company All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
