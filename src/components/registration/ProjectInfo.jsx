import {
  Sparkles,
  FolderKanban,
  Link2,
  Presentation,
  Video,
  Globe,
  Code2,
} from "lucide-react";

import FormSection from "./FormSection";

const domainOptions = [
  "AI/ML",
  "Web Development",
  "IoT",
  "Cyber Security",
  "Blockchain",
  "Other",
];

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-[#171624] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10";

const ProjectInfo = ({ register, errors }) => {
  const fields = [
    {
      name: "projectName",
      label: "Project Name",
      placeholder: "Enter your innovative project name",
      icon: FolderKanban,
      type: "text",
      required: true,
    },
    {
      name: "pptLink",
      label: "Presentation (PPT) Link",
      placeholder: "https://drive.google.com/...",
      icon: Presentation,
      type: "url",
      required: true,
      helper: "Share your Google Drive or OneDrive presentation link.",
    },
    {
      name: "prototypeLink",
      label: "Prototype / Source Code Link",
      placeholder: "https://github.com/...",
      icon: Code2,
      type: "url",
      required: true,
      helper: "Provide your GitHub, Figma or live demo link.",
    },
    {
      name: "demoVideoLink",
      label: "Demo Video Link",
      placeholder: "https://youtube.com/...",
      icon: Video,
      type: "url",
      required: false,
      helper: "YouTube or Google Drive link (optional).",
    },
  ];

  return (
    <FormSection
      number="03"
      title="Project Information"
      description="Showcase your creativity and tell us about your innovation."
    >
      <div className="space-y-6">
        {/* Domain Selection */}
        <div>
          <label
            htmlFor="domain"
            className="mb-2.5 block text-sm font-medium text-gray-300"
          >
            Domain / Track
            <span className="ml-1 text-pink-400">*</span>
          </label>

          <div className="relative">
            <Sparkles
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <select
              id="domain"
              {...register("domain")}
              className={`${inputStyles} appearance-none ${
                errors.domain ? "border-red-500/50" : ""
              }`}
            >
              <option value="" className="bg-[#171624]">
                Select your project domain
              </option>

              {domainOptions.map((domain) => (
                <option key={domain} value={domain} className="bg-[#171624]">
                  {domain}
                </option>
              ))}
            </select>
          </div>

          {errors.domain && (
            <p className="mt-2 text-xs text-red-400">{errors.domain.message}</p>
          )}
        </div>

        {/* Project Fields */}
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

                {field.required ? (
                  <span className="ml-1 text-pink-400">*</span>
                ) : (
                  <span className="ml-2 text-xs text-gray-500">Optional</span>
                )}
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
                  {...register(field.name)}
                  className={`${inputStyles} ${
                    error ? "border-red-500/50" : ""
                  }`}
                />
              </div>

              {error ? (
                <p className="mt-2 text-xs text-red-400">{error.message}</p>
              ) : (
                <p className="mt-2 text-xs text-gray-500">{field.helper}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-purple-500/10 bg-purple-500/[0.06] p-4">
        <Globe size={19} className="mt-0.5 shrink-0 text-purple-400" />

        <p className="text-xs leading-6 text-gray-400">
          Ensure your project links are publicly accessible. Our evaluation team
          should be able to review your presentation and prototype.
        </p>
      </div>
    </FormSection>
  );
};

export default ProjectInfo;
