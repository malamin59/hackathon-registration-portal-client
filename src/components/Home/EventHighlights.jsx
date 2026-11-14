import Container from "../common/Container";
import Card from "../common/Card";
import { tracks } from "../data/tracks";

const EventHighlights = () => {
  return (
    <section
      id="events"
      className="border-t border-white/5 bg-[#090912] py-12 text-white sm:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Hackathon Tracks
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Innovation <span className="text-sky-400">Domains</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
            Choose a track that aligns with your team's strengths and build a
            working prototype within 48 hours.
          </p>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map(({ icon: Icon, color, title, desc }) => (
            <Card
              key={title}
              className="group flex h-full flex-col !border-white/10 !bg-white/[0.03] hover:!border-purple-500/50 hover:!bg-white/[0.06]"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                <Icon className={`h-7 w-7 ${color}`} />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventHighlights;
