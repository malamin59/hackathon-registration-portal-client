
import { ArrowRight, Trophy, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Trophy,
    title: "Exciting",
    subtitle: "Prizes",
  },
  {
    icon: Users,
    title: "1–5 Members",
    subtitle: "Team Size",
  },
  {
    icon: Zap,
    title: "Innovation",
    subtitle: "Ideas",
  },
];

export default function LeftContent() {
  return (
    <div className="z-20 lg:col-span-7">
     

      {/* Hero Heading */}
     <h1 className="mt-4 lg:mt-0   max-w-none text-[clamp(2rem,5.4vw,5.5rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
  Build Your Ideas.
  <br />
  <span className="bg-gradient-to-r from-[#38BDF8] via-[#6366F1] to-[#D946EF] bg-clip-text text-transparent">
    Shape The Future.
  </span>
</h1>

      {/* Description */}
      <p className="mt-4 max-w-[680px] text-base leading-[1.8] text-slate-300 sm:text-lg md:text-xl">
        Transform your innovative ideas into real-world solutions. Collaborate,
        create, and compete in an exciting hackathon.
      </p>

      {/* CTA Button */}
      <div className="mt-6 flex gird-wrap items-center gap-5">
        <Link
          to="/signup"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C026D3] via-[#9333EA] to-[#2563EB] px-7 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] sm:px-9 sm:text-lg"
        >
          Register Now
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
        </Link>
         {/* Announcement Badge */}
      <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/70 bg-sky-400/5 px-5 py-2 text-sm font-semibold tracking-wider text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.08)]">
        <Zap className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        CODE-A-NOVA PRESENTS
      </div>
      </div>

      {/* Highlights */}
      <div className="mt-2 grid max-w-[680px] grid-cols-3 divide-x divide-white/15 border-t border-white/10 pt-8 sm:pt-9">
        {highlights.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-2 px-1 text-center sm:flex-row sm:gap-4 sm:px-4 sm:text-left"
          >
            <Icon className="h-7 w-7 shrink-0 text-sky-400 sm:h-9 sm:w-9" />

            <div>
              <p className="text-xs font-semibold text-white sm:text-base">
                {title}
              </p>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
