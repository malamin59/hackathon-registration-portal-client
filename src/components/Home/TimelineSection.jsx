import Container from "../common/Container";
import Card from "../common/Card";

const steps = [
  {
    phase: "Phase 01",
    date: "Nov 15 – Nov 25, 2026",
    title: "Registration & OTP Verification",
    desc: "Create your Code-A-Nova account, verify your email via OTP, and unlock your personal dashboard.",
  },
  {
    phase: "Phase 02",
    date: "Nov 26 – Nov 30, 2026",
    title: "Team Formation & Event Entry",
    desc: "Form a team of 1–5 members, manage invites from your dashboard, and receive your Nodemailer confirmation.",
  },
  {
    phase: "Phase 03",
    date: "Dec 05, 2026 • 10:00 AM",
    title: "Hacking Kickoff (48 Hours)",
    desc: "Problem statements go live. Start coding, collaborate with mentors, and push commits to GitHub.",
  },
  {
    phase: "Phase 04",
    date: "Dec 07, 2026 • 04:00 PM",
    title: "Final Submission & Demo Day",
    desc: "Submit your repository and live demo link. Top teams pitch live to the judging panel.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative bg-[#07070D] py-24 text-white">
      <Container>
        <div className="w-full">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Roadmap
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Event <span className="text-purple-400">Timeline</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Follow the journey from registration to the final hackathon
              submission.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            {steps.map((item, idx) => (
              <Card
                key={item.phase}
                className="group relative flex h-full flex-col !rounded-2xl !border-white/10 !bg-white/[0.03] !p-6 hover:!border-sky-500/40 hover:!bg-white/[0.05]"
              >
                {/* Phase & Date */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
                    {item.phase}
                  </span>

                  <span className="text-xs font-medium text-sky-400">
                    {item.date}
                  </span>
                </div>

                {/* Step Number */}
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-lg font-bold text-sky-400">
                  0{idx + 1}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-sky-300 sm:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TimelineSection;
