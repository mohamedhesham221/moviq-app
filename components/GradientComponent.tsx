import { LinearGradient } from "expo-linear-gradient";
import type { GradientProps } from "@/types/gradient.types";
const GradientComponent = ({ children, startY = 1 }: GradientProps) => {
  return (
    <LinearGradient
      colors={["#111111", "#111111", "transparent"]}
      locations={[0, 0.3, 1]}
      start={{ x: 0.5, y: startY }}
      end={{ x: 0.5, y: 0 }}
      className="flex-1 w-full"
    >
      {children}
    </LinearGradient>
  );
};
export default GradientComponent;
