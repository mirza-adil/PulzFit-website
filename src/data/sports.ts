import { pulzPalette } from "@/lib/theme";
import {
  Footprints,
  Bike,
  Waves,
  Dumbbell,
  Trophy,
  Mountain,
  PersonStanding,
  Snowflake,
  CircleDot,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface SportCategory {
  name: string;
  icon: LucideIcon;
}

export const sportCategories: SportCategory[] = [
  { name: "Running", icon: Footprints },
  { name: "Cycling", icon: Bike },
  { name: "Walking", icon: Footprints },
  { name: "Swimming", icon: Waves },
  { name: "Yoga", icon: PersonStanding },
  { name: "Gym", icon: Dumbbell },
  { name: "Football", icon: Trophy },
  { name: "Basketball", icon: CircleDot },
  { name: "Tennis", icon: Target },
  { name: "Hiking", icon: Mountain },
  { name: "Skiing", icon: Snowflake },
  { name: "Golf", icon: Target },
];

export interface ActivityStat {
  label: string;
  value: number;
  unit: string;
  goal: number;
  color: string;
}

export const activityStats: ActivityStat[] = [
  { label: "Steps", value: 12480, unit: "", goal: 12000, color: pulzPalette.dark },
  { label: "Calories", value: 742, unit: "kcal", goal: 800, color: pulzPalette.dark },
  { label: "Distance", value: 8.6, unit: "km", goal: 10, color: pulzPalette.accent },
  {
    label: "Active Minutes",
    value: 96,
    unit: "min",
    goal: 90,
    color: pulzPalette.light,
  },
];
