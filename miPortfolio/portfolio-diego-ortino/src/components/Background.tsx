// Background.tsx
import ShaderSphere from "./ShaderSphere";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",  // queda pegado al viewport
        inset: 0,           // top/right/bottom/left: 0
        zIndex: 0,          // detrás del contenido (ajustable)
        pointerEvents: "none", // deja pasar los clicks
      }}
    >
      <ShaderSphere /> {/* tu componente de Three */}
    </div>
  );
}
