import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateNumber = (num: number, precision = 2) =>
  parseFloat(num.toFixed(precision));

export const getPercentage = (num: number) => {
  const parts = truncateNumber(Math.abs(num)).toString().split(".");
  if (parts.length !== 2) return parts[0].concat(".00%");

  parts[1] = parts[1].padEnd(2, "0");
  return parts.join(".").concat("%");
};
