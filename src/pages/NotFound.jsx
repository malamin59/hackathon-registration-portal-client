import NotFoundBadge from "../components/notFound/NotFoundBadge";
import NotFoundIllustration from "../components/notFound/NotFoundIllustration";
import NotFoundContent from "../components/notFound/NotFoundContent";
import NotFoundActions from "../components/notFound/NotFoundActions";
import NotFoundFooter from "../components/notFound/NotFoundFooter";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07070D] px-5 py-16 text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-purple-700/15 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[140px]" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <NotFoundBadge />

        <NotFoundIllustration />

        <NotFoundContent />

        <NotFoundActions />

        <NotFoundFooter />
      </div>
    </main>
  );
};

export default NotFound;
