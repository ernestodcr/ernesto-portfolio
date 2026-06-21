interface Contact {
  name: string;
  url: string;
  icon: string;
}

export const contacts: readonly Contact[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ernesto-delacruz-delrio/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/ernestodcr",
    icon: "/icons/github.svg",
  },
  {
    name: "Email",
    url: "mailto:ernesto.delacruz.delrio@gmail.com",
    icon: "/icons/email.svg",
  },
  {
    name: "Credly",
    url: "https://www.credly.com/users/ernesto-de-la-cruz-del-rio/badges/credly",
    icon: "/icons/credly.svg",
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com/drive/folders/1UnvXGeHl9pFlhtWW_GFBT6-ukRlpx0AY?usp=drive_link",
    icon: "/icons/drive.svg",
  },
] as const;
