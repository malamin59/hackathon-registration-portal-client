
import {
  GraduationCap,
  Building2,
  BookOpen,
  GitBranch,
  CalendarDays,
} from "lucide-react";

import FormSection from "./FormSection";
const collegeOptions = [
  "IIT Delhi",
  "IIT Bombay",
  "IIT Madras",
  "NIT Trichy",
  "NIT Warangal",
  "Other",
];

const courseOptions = [
  "B.Tech",
  "M.Tech",
  "BCA",
  "MCA",
  "BSc",
  "MSc",
  "Other",
];

const branchOptions = [
  "CSE",
  "IT",
  "ECE",
  "ME",
  "CE",
  "EEE",
  "Other",
];

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
];
const selectStyles =
  "w-full appearance-none rounded-xl border border-white/10 bg-[#171624] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10";

const AcademicInfo = ({ register, errors }) => {
  const fields = [
    {
      name: "college",
      label: "College / University",
      placeholder: "Select your college",
      icon: Building2,
      options: collegeOptions,
    },
    {
      name: "course",
      label: "Course",
      placeholder: "Select your course",
      icon: BookOpen,
      options: courseOptions,
    },
    {
      name: "branch",
      label: "Branch / Department",
      placeholder: "Select your branch",
      icon: GitBranch,
      options: branchOptions,
    },
    {
      name: "year",
      label: "Year of Study",
      placeholder: "Select your year",
      icon: CalendarDays,
      options: yearOptions,
    },
  ];

  return (
    <FormSection
      number="02"
      title="Academic Information"
      description="Tell us about your educational background."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const Icon = field.icon;
          const error = errors[field.name];

          return (
            <div
              key={field.name}
              className={field.name === "college" ? "sm:col-span-2" : ""}
            >
              <label
                htmlFor={field.name}
                className="mb-2.5 block text-sm font-medium text-gray-300"
              >
                {field.label}
                <span className="ml-1 text-pink-400">*</span>
              </label>

              <div className="relative">
                <Icon
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <select
                  id={field.name}
                  {...register(field.name)}
                  className={`${selectStyles} pl-11 ${
                    errors[field.name]
                      ? "border-red-500/50"
                      : ""
                  } ${
                    !register && "text-gray-500"
                  }`}
                >
                  <option value="" className="bg-[#171624] text-gray-500">
                    {field.placeholder}
                  </option>

                  {field.options
                    .filter((option) => option !== "Select your college")
                    .map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#171624] text-white"
                      >
                        {option}
                      </option>
                    ))}
                </select>
              </div>

              {error && (
                <p className="mt-2 text-xs text-red-400">
                  {error.message}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex items-start gap-3 rounded-xl border border-purple-500/10 bg-purple-500/[0.06] p-4">
        <GraduationCap
          size={19}
          className="mt-0.5 shrink-0 text-purple-400"
        />

        <p className="text-xs leading-6 text-gray-400">
          Make sure your academic information is accurate.
          This information helps us understand your educational
          background.
        </p>
      </div>
    </FormSection>
  );
};

export default AcademicInfo;
