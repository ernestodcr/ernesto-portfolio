export const roles = [
  "Full Stack Developer",
  "Python & Backend Developer"
] as const;

export type ProfessionalRole = typeof roles[number];