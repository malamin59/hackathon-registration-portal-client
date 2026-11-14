
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Card from "../common/Card";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#07070D] py-20 text-white sm:py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[130px]" />

      <Container>
        <Card className="relative overflow-hidden !rounded-3xl !border-purple-500/30 !bg-gradient-to-r !from-purple-900/30 !via-[#111122] !to-blue-900/30 !p-8 !text-center sm:!p-12 lg:!p-16">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-300">
              <Sparkles className="h-4 w-4" />
              Your Next Big Idea Starts Here
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
              Register now, verify your account via OTP, assemble your squad,
              and secure your spot in Code-A-Nova. Turn your ideas into
              something extraordinary.
            </p>

            {/* CTA Button */}
            <div className="mt-9 flex justify-center">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9333EA] to-[#3B82F6] px-8 py-4 font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]"
              >
                Register Your Team

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CTASection;
