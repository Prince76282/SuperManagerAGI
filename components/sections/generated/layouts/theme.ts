import type { PageTheme } from "@/lib/Dataset/navigation-pages";

const accentPalette = {
  border: "border-[#625FD0]/20",
  badge: "bg-[#625FD0]/10 text-[#625FD0]",
  accentText: "text-[#625FD0]",
  solid: "bg-[#625FD0] hover:bg-[#625FD0]/90",
  softShadow: "shadow-[#625FD0]/15",
  glowOne: "bg-[#625FD0]/20",
  glowTwo: "bg-[#625FD0]/12",
} as const;

export const pageThemes = {
  indigo: {
    canvas:
      "bg-[linear-gradient(180deg,rgba(98,95,208,0.08)_0%,#FFFFFF_26%,#FFFFFF_100%)]",
    surface: "bg-[#625FD0]/8",
    ...accentPalette,
  },
  sky: {
    canvas:
      "bg-[linear-gradient(180deg,rgba(98,95,208,0.12)_0%,#FFFFFF_24%,#FFFFFF_100%)]",
    surface: "bg-[#625FD0]/6",
    ...accentPalette,
  },
  emerald: {
    canvas:
      "bg-[radial-gradient(circle_at_top_left,rgba(98,95,208,0.12),transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)]",
    surface: "bg-[#625FD0]/7",
    ...accentPalette,
  },
  amber: {
    canvas:
      "bg-[linear-gradient(180deg,rgba(98,95,208,0.06)_0%,#FFFFFF_22%,#FFFFFF_100%)]",
    surface: "bg-[#625FD0]/9",
    ...accentPalette,
  },
  rose: {
    canvas:
      "bg-[radial-gradient(circle_at_top_right,rgba(98,95,208,0.1),transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)]",
    surface: "bg-[#625FD0]/7",
    ...accentPalette,
  },
} as const;

export function getTheme(theme: PageTheme) {
  if (theme in pageThemes) {
    return pageThemes[theme as keyof typeof pageThemes];
  }

  return pageThemes.indigo;
}
