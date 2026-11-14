
import {
  Code2,
  Trophy,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Exciting Prizes",
    description: "Showcase your innovation and win rewards.",
  },
  {
    icon: Users,
    title: "Collaborative Teams",
    description: "Build a team of up to 5 members.",
  },
  {
    icon: Sparkles,
    title: "Innovate & Create",
    description: "Turn your ideas into real-world solutions.",
  },
];

const RegistrationSidebar = () => {
  return (
    <aside className="relative hidden min-h-full overflow-hidden rounded-3xl border border-white/10 bg-[#11101E] p-8 lg:flex lg:w-[340px] lg:flex-col xl:w-[380px]">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-600/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
            <Code2 size={23} className="text-white" />
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-wide text-white">
              Code-a-Nova
            </h2>
            <p className="text-[11px] tracking-widest text-gray-500">
              INNOVATE. BUILD. COMPETE.
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="my-auto py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
            <Sparkles size={13} />
            Registration is Open
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.2] tracking-tight text-white xl:text-5xl">
            Build Your Ideas.
            <span className="mt-2 block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shape The Future.
            </span>
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
            Join a community of innovators, collaborate with
            talented minds, and transform your ideas into
            something extraordinary.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-6">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-500/10 text-purple-400">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs text-gray-500">
            © 2026 Code-a-Nova
          </span>

          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 size={14} />
            Secure Registration
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RegistrationSidebar;
