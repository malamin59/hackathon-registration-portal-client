
import RegistrationSidebar from "./RegistrationSidebar";

const RegistrationLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080811] px-4 py-6 text-white sm:px-6 lg:p-8">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-[1440px] flex-col gap-6 lg:flex-row">
        <RegistrationSidebar />

        <section className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-[#0E0D18] p-5 sm:p-8 lg:p-10 xl:p-12">
          {children}
        </section>
      </div>
    </main>
  );
};

export default RegistrationLayout;
