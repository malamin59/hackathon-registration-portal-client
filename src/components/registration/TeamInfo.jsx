import {
  Users,
  UserRound,
  Mail,
  Plus,
  Trash2,
  Crown,
  UserPlus,
  Info,
} from "lucide-react";

import FormSection from "./FormSection";

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-[#171624] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10";

const TeamInfo = ({
  register,
  errors,
  teamSize,
  fields,
  append,
  remove,
  setValue,
}) => {
  const handleTeamSizeChange = (event) => {
    const newSize = Number(event.target.value);
    const requiredMembers = newSize - 1;

    if (requiredMembers < fields.length) {
      for (let i = fields.length - 1; i >= requiredMembers; i--) {
        remove(i);
      }
    } else {
      for (let i = fields.length; i < requiredMembers; i++) {
        append({
          name: "",
          email: "",
        });
      }
    }

    setValue("teamSize", newSize, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleRemoveMember = (index) => {
    remove(index);

    setValue("teamSize", Number(teamSize) - 1, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <FormSection
      number="04"
      title="Team Information"
      description="Build your team and get ready to innovate together."
    >
      <div className="space-y-7">
        {/* Team Size */}
        <div>
          <label
            htmlFor="teamSize"
            className="mb-2.5 block text-sm font-medium text-gray-300"
          >
            Select Team Size
            <span className="ml-1 text-pink-400">*</span>
          </label>

          <div className="relative">
            <Users
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <select
              id="teamSize"
              value={teamSize}
              onChange={handleTeamSizeChange}
              className="w-full appearance-none rounded-xl border border-white/10 bg-[#171624] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
            >
              {[1, 2, 3, 4, 5].map((size) => (
                <option key={size} value={size} className="bg-[#171624]">
                  {size} {size === 1 ? "Member" : "Members"}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            You can register individually or create a team of up to 5 members.
          </p>
        </div>

        {/* Team Leader */}
        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.06] p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <Crown size={19} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Team Leader
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your registered account
                </p>
              </div>
            </div>

            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] font-semibold text-purple-300">
              YOU
            </span>
          </div>

          <p className="text-xs leading-6 text-gray-400">
            Your personal information will automatically be used as the team
            leader details.
          </p>
        </div>

        {/* Additional Members */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Additional Team Members
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Add your teammates' information.
              </p>
            </div>

            <span className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-gray-300">
              {fields.length} / 4
            </span>
          </div>

          {fields.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-gray-500">
                <UserPlus size={22} />
              </div>

              <h4 className="mt-4 text-sm font-semibold text-white">
                Solo Registration
              </h4>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-gray-500">
                You're registering individually. No additional team members are
                required.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {fields.map((field, index) => {
                const memberErrors = errors.teamMembers?.[index];

                return (
                  <div
                    key={field.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-sm font-bold text-purple-400">
                          {String(index + 2).padStart(2, "0")}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            Team Member {index + 2}
                          </h4>

                          <p className="mt-1 text-[11px] text-gray-500">
                            Additional participant
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveMember(index)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/10 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                        aria-label={`Remove team member ${index + 2}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="space-y-5">
                      {/* Member Name */}
                      <div>
                        <label
                          htmlFor={`teamMembers.${index}.name`}
                          className="mb-2 block text-xs font-medium text-gray-300"
                        >
                          Member Name
                          <span className="ml-1 text-pink-400">*</span>
                        </label>

                        <div className="relative">
                          <UserRound
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />

                          <input
                            id={`teamMembers.${index}.name`}
                            type="text"
                            placeholder="Enter member's full name"
                            {...register(`teamMembers.${index}.name`)}
                            className={`${inputStyles} ${
                              memberErrors?.name ? "border-red-500/50" : ""
                            }`}
                          />
                        </div>

                        {memberErrors?.name && (
                          <p className="mt-2 text-xs text-red-400">
                            {memberErrors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Member Email */}
                      <div>
                        <label
                          htmlFor={`teamMembers.${index}.email`}
                          className="mb-2 block text-xs font-medium text-gray-300"
                        >
                          Member Email
                          <span className="ml-1 text-pink-400">*</span>
                        </label>

                        <div className="relative">
                          <Mail
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />

                          <input
                            id={`teamMembers.${index}.email`}
                            type="email"
                            placeholder="Enter member's email"
                            {...register(`teamMembers.${index}.email`)}
                            className={`${inputStyles} ${
                              memberErrors?.email ? "border-red-500/50" : ""
                            }`}
                          />
                        </div>

                        {memberErrors?.email && (
                          <p className="mt-2 text-xs text-red-400">
                            {memberErrors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Team Summary */}
        <div className="flex items-start gap-3 rounded-xl border border-purple-500/10 bg-purple-500/[0.06] p-4">
          <Info size={18} className="mt-0.5 shrink-0 text-purple-400" />

          <p className="text-xs leading-6 text-gray-400">
            Your account will be considered the team leader. Additional members
            must provide valid names and email addresses. Maximum team size is
            5.
          </p>
        </div>
      </div>
    </FormSection>
  );
};

export default TeamInfo;
