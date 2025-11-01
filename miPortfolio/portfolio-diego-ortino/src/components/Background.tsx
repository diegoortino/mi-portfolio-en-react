import ShaderSphere from "./ShaderSphere";
import "./Background.css";

type BackgroundVariant = "full" | "sidebar";

type BackgroundProps = {
  variant: BackgroundVariant;
};

export default function Background({ variant }: BackgroundProps) {
  return (
    <div className={`background-layer background-layer--${variant}`}>
      <ShaderSphere />
    </div>
  );
}
