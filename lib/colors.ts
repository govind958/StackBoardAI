/**
 * StackBoard AI - Global Brand Colors
 * Use these when you need color values in JavaScript/TypeScript
 * (e.g., charts, canvas, dynamic styles, third-party libraries)
 */

export const brandColors = {
  orange: "#FF6B35",
  amber: "#F7931E",
  dark: "#0B0F19",
  light: "#F5F7FA",
} as const;

export const brandColorsRGB = {
  orange: "255, 107, 53",
  amber: "247, 147, 30",
  dark: "11, 15, 25",
  light: "245, 247, 250",
} as const;

// Semantic aliases
export const semanticColors = {
  primary: brandColors.orange,
  secondary: brandColors.amber,
  background: brandColors.light,
  foreground: brandColors.dark,
} as const;

// Gradients
export const gradients = {
  brand: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
  brandReverse: "linear-gradient(135deg, #F7931E 0%, #FF6B35 100%)",
  brandRadial: "radial-gradient(circle at center, #FF6B35 0%, #F7931E 100%)",
} as const;

// Shadows with brand colors
export const shadows = {
  orange: "0 10px 40px -10px rgba(255, 107, 53, 0.3)",
  orangeLg: "0 20px 60px -15px rgba(255, 107, 53, 0.4)",
  amber: "0 10px 40px -10px rgba(247, 147, 30, 0.3)",
  dark: "0 10px 40px -10px rgba(11, 15, 25, 0.3)",
} as const;

// Tailwind class mappings (for dynamic class generation)
export const tailwindBrand = {
  bg: {
    orange: "bg-brand-orange",
    amber: "bg-brand-amber",
    dark: "bg-brand-dark",
    light: "bg-brand-light",
    gradient: "bg-brand-gradient",
  },
  text: {
    orange: "text-brand-orange",
    amber: "text-brand-amber",
    dark: "text-brand-dark",
    light: "text-brand-light",
    gradient: "text-gradient-brand",
  },
  border: {
    orange: "border-brand-orange",
    amber: "border-brand-amber",
    dark: "border-brand-dark",
    light: "border-brand-light",
  },
  shadow: {
    brand: "shadow-brand",
    brandLg: "shadow-brand-lg",
    amber: "shadow-amber",
  },
} as const;

// Helper to get RGBA values
export function getRGBA(color: keyof typeof brandColorsRGB, alpha: number): string {
  return `rgba(${brandColorsRGB[color]}, ${alpha})`;
}

// Example usage:
// import { brandColors, gradients, shadows, getRGBA } from "@/lib/colors";
// <div style={{ background: gradients.brand, boxShadow: shadows.orange }} />
// <div style={{ backgroundColor: getRGBA("orange", 0.2) }} />