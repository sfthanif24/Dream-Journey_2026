import bgShadowImg from "../../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className="absolute left-0 top-0 w-full -translate-y-1/2 px-4 sm:px-6 lg:px-8 z-20">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-white bg-white/20 p-4 shadow-lg backdrop-blur-md sm:p-6">
        <div
          className="rounded-3xl bg-white px-5 py-20 text-center sm:px-8 lg:px-12"
          style={{
            backgroundImage: `url(${bgShadowImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-2xl font-bold text-[#131313] sm:text-3xl lg:text-[32px]">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-4 text-[20px] text-[#131313]/70 font-medium">
            Get the latest updates and news right in your inbox!
          </p>
          <form className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3 text-base text-slate-700 outline-none placeholder:text-[#131313]/60 sm:max-w-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 px-8 py-3 text-base font-bold text-[#131313] transition hover:brightness-105 shadow-[0_4px_14px_rgba(230,195,65,0.4)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
