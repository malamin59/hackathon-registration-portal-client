import { z } from "zod";

// Team Member Validation
const teamMemberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Member name must be at least 3 characters")
    .regex(/^[A-Za-z ]+$/, "Name can only contain letters"),

  email: z.string().trim().email("Please enter a valid email address"),
});

// Step 1: Personal Information
const personalInfoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .regex(/^[A-Za-z ]+$/, "Name can only contain letters"),


  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
});

// Step 2: Academic Information
const academicInfoSchema = z.object({
  college: z.string().min(1, "Please select your college"),
  course: z.string().min(1, "Please select your course"),
  branch: z.string().min(1, "Please select your branch"),
  year: z.string().min(1, "Please select your academic year"),
});

// Step 3: Project Information
const projectInfoSchema = z.object({
  domain: z.string().min(1, "Please select a domain"),

  projectName: z
    .string()
    .trim()
    .min(5, "Project name must be at least 5 characters"),

  pptLink: z.string().trim().url("Please enter a valid PPT URL"),

  prototypeLink: z.string().trim().url("Please enter a valid prototype URL"),

  demoVideoLink: z
    .union([
      z.string().trim().url("Please enter a valid video URL"),
      z.literal(""),
    ])
    .optional(),
});

// Step 4: Team Information
const teamInfoObject = z.object({
  teamSize: z.number().int().min(1).max(5),

  teamMembers: z.array(teamMemberSchema),
});

// Team Size Validation
const validateTeamSize = (data, ctx) => {
  if (data.teamMembers.length !== data.teamSize - 1) {
    ctx.addIssue({
      code: "custom",
      message: "Team members must match your selected team size",
      path: ["teamMembers"],
    });
  }
};

const teamInfoSchema = teamInfoObject.superRefine(validateTeamSize);

// Step-wise Validation
export const registrationStepSchemas = [
  personalInfoSchema,
  academicInfoSchema,
  projectInfoSchema,
  teamInfoSchema,
];

// Final Registration Validation
export const registrationSchema = personalInfoSchema
  .extend(academicInfoSchema.shape)
  .extend(projectInfoSchema.shape)
  .extend(teamInfoObject.shape)
  .superRefine(validateTeamSize);
