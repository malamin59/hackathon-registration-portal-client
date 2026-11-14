
import { useState } from "react";
import {
  useForm,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import RegistrationLayout from "../components/registration/RegistrationLayout";
import RegistrationProgress from "../components/registration/RegistrationProgress";

import PersonalInfo from "../components/registration/PersonalInfo";
import AcademicInfo from "../components/registration/AcademicInfo";
import ProjectInfo from "../components/registration/ProjectInfo";
import TeamInfo from "../components/registration/TeamInfo";

import {
  registrationSchema,
  registrationStepSchemas,
} from "../components/registration/validation/registrationSchema";

const defaultValues = {
  fullName: "",
  email: "",
  mobile: "",

  college: "",
  course: "",
  branch: "",
  year: "",

  domain: "",
  projectName: "",
  pptLink: "",
  prototypeLink: "",
  demoVideoLink: "",

  teamSize: 1,
  teamMembers: [],
};

const stepFields = [
  ["fullName", "email", "mobile"],
  ["college", "course", "branch", "year"],
  ["domain", "projectName", "pptLink", "prototypeLink", "demoVideoLink"],
  ["teamSize", "teamMembers"],
];

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues,
    mode: "onTouched",
  });

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "teamMembers",
  });

  const teamSize = watch("teamSize");

  // Validate only the current step
  const handleNext = () => {
    const currentSchema = registrationStepSchemas[currentStep];
    const result = currentSchema.safeParse(getValues());

    clearErrors(stepFields[currentStep]);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path.join(".");

        if (fieldName) {
          setError(fieldName, {
            type: "manual",
            message: issue.message,
          });
        }
      });

      return;
    }

    setCurrentStep((previous) => previous + 1);
  };

  // Navigate to the previous step
  const handlePrevious = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 0));
  };

  // Final form submission
  const onSubmit = async (data) => {
    console.log("Registration Data:", data);

    // Next step: connect this form with the backend API.
  };

  // Move to the step containing the first invalid field
  const handleInvalidSubmit = (formErrors) => {
    const firstError = Object.keys(formErrors)[0];

    const errorStep = stepFields.findIndex((fields) =>
      fields.includes(firstError)
    );

    if (errorStep !== -1) {
      setCurrentStep(errorStep);
    }
  };

  return (
    <RegistrationLayout>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <RegistrationProgress currentStep={currentStep} />

        <form
          onSubmit={handleSubmit(onSubmit, handleInvalidSubmit)}
          className="mt-8"
          noValidate
        >
          {currentStep === 0 && (
            <PersonalInfo
              register={register}
              errors={errors}
            />
          )}

          {currentStep === 1 && (
            <AcademicInfo
              register={register}
              errors={errors}
            />
          )}

          {currentStep === 2 && (
            <ProjectInfo
              register={register}
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <TeamInfo
              register={register}
              errors={errors}
              teamSize={teamSize}
              fields={fields}
              append={append}
              remove={remove}
              setValue={setValue}
            />
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {currentStep < stepFields.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:scale-[1.02]"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            )}
          </div>
        </form>
      </div>
    </RegistrationLayout>
  );
};

export default Registration;
