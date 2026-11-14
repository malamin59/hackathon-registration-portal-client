
import { UserRound, Mail, Phone } from "lucide-react";

import FormSection from "./FormSection";

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-[#171624] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10";

const PersonalInfo = ({ register, errors }) => {
  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
      icon: UserRound,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      type: "email",
      icon: Mail,
      autoComplete: "email",
    },
    {
      name: "mobile",
      label: "Mobile Number",
      placeholder: "Enter 10-digit mobile number",
      type: "tel",
      icon: Phone,
      autoComplete: "tel",
    },
  ];

  return (
    <FormSection
      number="01"
      title="Personal Information"
      description="Let's start with your basic information."
    >
      <div className="space-y-6">
        {fields.map((field) => {
          const Icon = field.icon;
          const error = errors[field.name];

          return (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-2.5 block text-sm font-medium text-gray-300"
              >
                {field.label}
                <span className="ml-1 text-pink-400">*</span>
              </label>

              <div className="relative">
                <Icon
                  size={18}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    error ? "text-red-400" : "text-gray-500"
                  }`}
                />

                <input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  inputMode={
                    field.name === "mobile" ? "numeric" : undefined
                  }
                  maxLength={
                    field.name === "mobile" ? 10 : undefined
                  }
                  {...register(field.name)}
                  className={`${inputStyles} ${
                    error
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />
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
        <UserRound
          size={17}
          className="mt-0.5 shrink-0 text-purple-400"
        />

        <p className="text-xs leading-6 text-gray-400">
          Please provide accurate personal information.
          Your details will be used for hackathon communication
          and registration purposes.
        </p>
      </div>
    </FormSection>
  );
};

export default PersonalInfo;
