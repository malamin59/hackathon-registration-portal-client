
import { Award, Crown, Medal, Check } from "lucide-react";

import Container from "../common/Container";
import Card from "../common/Card";

const prizes = [
  {
    rank: "1st Runner-Up",
    amount: "৳30,000",
    icon: Medal,
    iconColor: "text-sky-400",
    perks: [
      "Cash Prize + Trophy",
      "Official Certificates",
      "Exclusive Swag Kit",
    ],
    featured: false,
  },
  {
    rank: "Grand Champion",
    amount: "৳50,000",
    icon: Crown,
    iconColor: "text-yellow-400",
    perks: [
      "Champion Trophy & Cash",
      "Direct Internship Interviews",
      "Premium Developer Swags",
    ],
    featured: true,
  },
  {
    rank: "2nd Runner-Up",
    amount: "৳20,000",
    icon: Award,
    iconColor: "text-purple-400",
    perks: [
      "Cash Prize + Crest",
      "Official Certificates",
      "Cloud Credits & Swags",
    ],
    featured: false,
  },
];

const PrizeSection = () => {
  return (
    <section
      id="prizes"
      className="border-t border-white/5 bg-[#090912] py-24 text-white"
    >
      <Container>
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Rewards & Perks
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Exciting{" "}
            <span className="text-sky-400">Prize Pool</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Celebrate innovation, creativity, and teamwork with exciting
            rewards for the top-performing teams.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {prizes.map((prize) => {
            const Icon = prize.icon;

            return (
              <Card
                key={prize.rank}
                className={`group relative flex h-full flex-col items-center overflow-hidden !rounded-3xl !p-7 text-center transition-all duration-300 sm:!p-8 ${
                  prize.featured
                    ? "!border-purple-500/50 !bg-gradient-to-b !from-purple-900/30 !to-[#0D0D1A] shadow-[0_0_40px_rgba(147,51,234,0.15)] md:-translate-y-3"
                    : "!border-white/10 !bg-white/[0.03] hover:!border-sky-500/40 hover:!bg-white/[0.05]"
                }`}
              >
                {/* Featured Badge */}
                {prize.featured && (
                  <span className="mb-5 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-300">
                    <Crown className="mr-1 inline h-3.5 w-3.5" />
                    Top Winner
                  </span>
                )}

                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon
                    className={`h-10 w-10 ${prize.iconColor}`}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Rank */}
                <h3 className="text-lg font-semibold text-gray-200">
                  {prize.rank}
                </h3>

                {/* Amount */}
                <p className="my-4 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                  {prize.amount}
                </p>

                {/* Perks */}
                <div className="mt-5 w-full border-t border-white/10 pt-6">
                  <ul className="space-y-4 text-left">
                    {prize.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                          <Check className="h-3.5 w-3.5 text-sky-400" />
                        </span>

                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-center text-xs text-slate-500">
          More exciting rewards and opportunities await participating teams.
        </p>
      </Container>
    </section>
  );
};

export default PrizeSection;
