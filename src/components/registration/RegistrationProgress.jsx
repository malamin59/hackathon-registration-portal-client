
import {
  UserRound,
  GraduationCap,
  FolderKanban,
  Users,
  Check,
} from "lucide-react";

const steps = [
  {
    title: "Personal",
    description: "Basic details",
    icon: UserRound,
  },
  {
    title: "Academic",
    description: "Education details",
    icon: GraduationCap,
  },
  {
    title: "Project",
    description: "Your innovation",
    icon: FolderKanban,
  },
  {
    title: "Team",
    description: "Team members",
    icon: Users,
  },
];

const RegistrationProgress = ({ currentStep = 0 }) => {
  return (
    <div className="mb-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            Registration Process
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            Complete Your Application
          </h2>
        </div>

        <span className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-xs font-semibold text-purple-300">
          Step {currentStep + 1} of 4
        </span>
      </div>

      <div className="flex items-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={step.title}
              className="relative flex flex-1 flex-col items-center"
            >
              <div className="flex w-full items-center">
                {index !== 0 && (
                  <div
                    className={`h-[2px] flex-1 ${
                      isCompleted
                        ? "bg-purple-500"
                        : "bg-white/10"
                    }`}
                  />
                )}

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isCompleted
                      ? "border-purple-500 bg-purple-500 text-white"
                      : isActive
                        ? "border-purple-400 bg-purple-500/15 text-purple-300 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-white/[0.03] text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check size={18} />
                  ) : (
                    <Icon size={18} />
                  )}
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`h-[2px] flex-1 ${
                      isCompleted
                        ? "bg-purple-500"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>

              <div className="mt-3 text-center">
                <p
                  className={`text-xs font-semibold ${
                    isActive || isCompleted
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </p>

                <p className="mt-1 hidden text-[10px] text-gray-500 sm:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationProgress;
