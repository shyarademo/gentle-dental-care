import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeId = "blue-lavender" | "medical-blue" | "teal-aqua" | "navy-gold" | "healing-green";

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
}

export const themes: Theme[] = [
  {
    id: "blue-lavender",
    name: "Soft Blue & Lavender",
    description: "Calm & Approachable",
    primaryColor: "hsl(214, 65%, 55%)",
    secondaryColor: "hsl(264, 55%, 65%)",
  },
  {
    id: "medical-blue",
    name: "Classic Medical Blue",
    description: "Trusted & Professional",
    primaryColor: "hsl(217, 91%, 60%)",
    secondaryColor: "hsl(214, 95%, 93%)",
  },
  {
    id: "teal-aqua",
    name: "Teal & Aqua",
    description: "Fresh & Clinical",
    primaryColor: "hsl(168, 84%, 32%)",
    secondaryColor: "hsl(167, 85%, 89%)",
  },
  {
    id: "navy-gold",
    name: "Navy & Gold",
    description: "Premium & Prestigious",
    primaryColor: "hsl(210, 53%, 24%)",
    secondaryColor: "hsl(44, 75%, 66%)",
  },
  {
    id: "healing-green",
    name: "Healing Green",
    description: "Natural & Wellness",
    primaryColor: "hsl(160, 94%, 22%)",
    secondaryColor: "hsl(149, 80%, 90%)",
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem("color-theme");
    return (saved as ThemeId) || "blue-lavender";
  });

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    localStorage.setItem("color-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
