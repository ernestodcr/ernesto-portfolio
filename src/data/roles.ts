export const roles = [
  "Junior Software Developer",
  "Junior Full Stack Developer",
  "Junior Python Developer"
] as const;

export type ProfessionalRole = typeof roles[number];