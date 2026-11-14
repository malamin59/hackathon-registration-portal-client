import { Code2, Rocket, Mouse } from "lucide-react";
import heroImage from "../../assets/heroImage.png";

import Container from "../common/Container";
import LeftContent from "./LeftContent";

import { Trophy } from "lucide-react";

const floatingCards = [
  {
    icon: Code2,
    className: "top-[12%] left-[2%]",
    color: "text-indigo-400",
  },
  {
    icon: Rocket,
    className: "top-[8%] right-[1%]",
    color: "text-purple-400",
  },
  {
    icon: Trophy,
    className: "bottom-[14%] right-[0%]",
    color: "text-yellow-400",
  },
];

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-[#05050B] text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute right-[15%] top-[30%] -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Main Content */}
      <Container className="relative z-10 grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-12  lg:grid-cols-12 lg:gap-10 lg:py-0">
        {/* LeftContent */}

        <LeftContent />

        {/* Right Illustration */}
        <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[480px] lg:col-span-5 lg:min-h-[560px]">
          {/* Outer Glow */}
          <div className="absolute h-[75%] w-[75%] rounded-full bg-blue-600/20 blur-[100px]" />

          {/* Orbit Rings */}
          <div className="absolute h-[85%] w-[85%] rounded-full border border-purple-500/20" />

          <div className="absolute h-[65%] w-[65%] rounded-full border border-sky-400/20" />

          {/* Robot Image */}
          <img
            src={heroImage}
            alt="Code-A-Nova Coding Robot"
            className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-[0_0_45px_rgba(37,99,235,0.4)] animate-[float_5s_ease-in-out_infinite]"
          />

          {/* Floating Cards */}
          {floatingCards.map(({ icon: Icon, className, color }, index) => (
            <div
              key={index}
              className={`absolute z-20 flex h-16 w-20 items-center justify-center rounded-2xl border border-indigo-400/50 bg-indigo-950/60 shadow-[0_0_25px_rgba(99,102,241,0.15)] backdrop-blur-xl sm:h-24 sm:w-32 ${className}`}
            >
              <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${color}`} />
            </div>
          ))}
        </div>
      </Container>

      {/* Giant Background Watermark */}
      <div className="pointer-events-none absolute -bottom-2 left-0 z-0 w-full select-none overflow-hidden text-center">
        <span className="block whitespace-nowrap bg-gradient-to-r from-blue-500/10 via-indigo-400/10 to-purple-500/15 bg-clip-text text-[17vw] font-black leading-[0.85] tracking-[-0.04em] text-transparent">
          HACKAVERSE
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap text-xs text-slate-400">
        <span className="h-px w-10 bg-white/30" />
        <Mouse className="h-7 w-5 text-white" />
        <span>Scroll Down</span>
        <span className="h-px w-10 bg-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
