export type Theme = "dark" | "light";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("synapto-theme") as Theme) || "dark";
}

export function applyTheme(theme: Theme) {
  localStorage.setItem("synapto-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}
