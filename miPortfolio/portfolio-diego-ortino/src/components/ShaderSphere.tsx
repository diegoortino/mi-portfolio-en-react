// src/components/ShaderSphere.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

type ShaderSphereProps = {
  variant: "full" | "sidebar";
};

export default function ShaderSphere({ variant }: ShaderSphereProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const shiftTweenRef = useRef<gsap.core.Tween | null>(null);
  const scaleTweenRef = useRef<gsap.core.Tween | null>(null);

  // ====== SHADERS (copiados de tus <script id="...">) ======
  const backgroundFragment = `
    float hue2rgb(float f1, float f2, float hue) {
      if (hue < 0.0) hue += 1.0;
      else if (hue > 1.0) hue -= 1.0;
      float res;
      if ((6.0 * hue) < 1.0) res = f1 + (f2 - f1) * 6.0 * hue;
      else if ((2.0 * hue) < 1.0) res = f2;
      else if ((3.0 * hue) < 2.0) res = f1 + (f2 - f1) * ((2.0/3.0) - hue) * 6.0;
      else res = f1;
      return res;
    }
    vec3 hsl2rgb(vec3 hsl) {
      vec3 rgb;
      if (hsl.y == 0.0) { rgb = vec3(hsl.z); }
      else {
        float f2;
        if (hsl.z < 0.5) f2 = hsl.z * (1.0 + hsl.y);
        else f2 = hsl.z + hsl.y - hsl.y * hsl.z;
        float f1 = 2.0 * hsl.z - f2;
        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = hue2rgb(f1, f2, hsl.x);
        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
      }
      return rgb;
    }
    vec3 hsl2rgb(float h, float s, float l) { return hsl2rgb(vec3(h,s,l)); }
    vec3 random3(vec3 c) {
      float j = 4096.0*sin(dot(c,vec3(17.0,59.4,15.0)));
      vec3 r; r.z = fract(512.0*j); j *= .125; r.x = fract(512.0*j); j *= .125; r.y = fract(512.0*j);
      return r-0.5;
    }
    const float F3 = 0.3333333; const float G3 = 0.1666667;
    float simplex3d(vec3 p) {
      vec3 s = floor(p + dot(p, vec3(F3)));
      vec3 x = p - s + dot(s, vec3(G3));
      vec3 e = step(vec3(0.0), x - x.yzx);
      vec3 i1 = e*(1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy*(1.0 - e);
      vec3 x1 = x - i1 + G3;
      vec3 x2 = x - i2 + 2.0*G3;
      vec3 x3 = x - 1.0 + 3.0*G3;
      vec4 w, d;
      w.x = dot(x, x); w.y = dot(x1, x1); w.z = dot(x2, x2); w.w = dot(x3, x3);
      w = max(0.6 - w, 0.0);
      d.x = dot(random3(s), x);
      d.y = dot(random3(s + i1), x1);
      d.z = dot(random3(s + i2), x2);
      d.w = dot(random3(s + 1.0), x3);
      w *= w; w *= w; d *= w; return dot(d, vec4(52.0));
    }
    float hash(vec2 p){ return fract(1e4 * sin(17.0*p.x + p.y*0.1) * (0.1 + abs(sin(p.y*13.0 + p.x)))); }
    varying vec2 vUv;
    uniform float u_progress; uniform float u_time;
    void main() {
      float n = simplex3d(vec3(vUv.xy, u_time * 1.0));
      vec3 color = hsl2rgb(0.0 + n*0.1, 0.0, 0.03);
      float val = hash(vUv + u_time);
      gl_FragColor = vec4(color + vec3(val/20.), 1.0);
    }
  `;

  const backgroundVertex = `
    varying vec2 vUv; uniform float u_time;
    void main() {
      vec3 p = position;
      vec4 mvPosition = modelViewMatrix * vec4(p,1.0);
      gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      vUv = uv;
    }
  `;

  const fragmentParticle = `
    uniform float u_progress;
    void main(){ gl_FragColor = vec4(0.4,0.4,0.4, u_progress); }
  `;

  const vertexParticle = `
    uniform float u_time;
    void main() {
      vec3 p = position;
      p.y += 0.25*(sin(p.y*5.0 + u_time)*0.5 + 0.5);
      p.z += 0.05*(sin(p.y*10.0 + u_time)*0.5 + 0.5);
      vec4 mvPosition = modelViewMatrix * vec4(p,1.0);
      gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragment = `
    varying vec2 vUv; varying vec3 v_color; varying vec3 v_normal;
    void main() {
      vec3 light = vec3(0.0);
      vec3 skyColor = vec3(1.000,1.000,0.547);
      vec3 groundColor = vec3(0.562,0.275,0.111);
      vec3 lightDirection = normalize(vec3(0.0,-1.0,-1.0));
      light += dot(lightDirection, v_normal);
      light = mix(skyColor, groundColor, dot(lightDirection, v_normal));
      gl_FragColor = vec4(light * v_color, 1.0);
    }
  `;

  const vertex = `
    varying vec2 vUv; varying vec3 v_color; varying vec3 v_normal;
    uniform float u_time; uniform float u_progress;
    vec3 hsv2rgb(vec3 c){
      vec4 K = vec4(1.0,2.0/3.0,1.0/3.0,3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx,0.0,1.0), c.y);
    }
    vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x,289.0); }
    vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + 1.0*C.xxx;
      vec3 x2 = x0 - i2 + 2.0*C.xxx;
      vec3 x3 = x0 - 1.0 + 3.0*C.xxx;
      i = mod(i, 289.0);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0,i1.z,i2.z,1.0)) + i.y + vec4(0.0,i1.y,i2.y,1.0)) + i.x + vec4(0.0,i1.x,i2.x,1.0));
      float n_ = 1.0/7.0; vec3 ns = n_*D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m*m; return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    void main(){
      vUv = uv;
      float noise = snoise(position * u_progress + u_time/10.0);
      vec3 newPos = position * (noise + 0.7);
      v_color = hsv2rgb(vec3(noise*0.1 + 0.03, .7, 0.7));
      v_normal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;

  useEffect(() => {
    const container = containerRef.current!;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene / Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 10000);
    camera.position.set(0, 0, 10);

    // Materials
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        u_time: { value: 0 },
        u_progress: { value: 0 }
      }
    });

    const pointsMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexParticle,
      fragmentShader: fragmentParticle,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        u_time: { value: 0 },
        u_progress: { value: 0 }
      }
    });

    const clock = new THREE.Clock();

    // Mesh: sphere
    const geo = new THREE.SphereGeometry(1, 162, 162);
    const sphere = new THREE.Mesh(geo, material);

    const modelGroup = new THREE.Group();
    modelGroup.add(sphere);

    // Points (fibonacci sphere)
    const N = 30000;
    const positions = new Float32Array(N * 3);
    const inc = Math.PI * (3 - Math.sqrt(5));
    const offset = 2 / N;
    const radius = 2;
    for (let i = 0; i < N; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * inc;
      positions[3 * i] = radius * Math.cos(phi) * r;
      positions[3 * i + 1] = radius * y;
      positions[3 * i + 2] = radius * Math.sin(phi) * r;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(particleGeometry, pointsMaterial);
    modelGroup.add(points);
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Background plane
    const bgGeo = new THREE.PlaneGeometry(100, 15, 16);
    const backgroundMaterial = new THREE.ShaderMaterial({
      vertexShader: backgroundVertex,
      fragmentShader: backgroundFragment,
      uniforms: {
        u_time: { value: 0 },
        u_progress: { value: 0 }
      }
    });
    const bgMesh = new THREE.Mesh(bgGeo, backgroundMaterial);
    bgMesh.position.z = -2;
    scene.add(bgMesh);

    // Animate uniforms (GSAP)
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(material.uniforms.u_progress, { value: 5, duration: 5, ease: "power3.inOut" })
      .to(material.uniforms.u_progress, { value: 1, duration: 5, ease: "power3.inOut" });
    gsap.to(pointsMaterial.uniforms.u_progress, { value: 0.4, duration: 5, ease: "power3.inOut" });

    // Resize handling
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Render loop
    let raf = 0;
    const renderLoop = () => {
      raf = requestAnimationFrame(renderLoop);
      const t = clock.getElapsedTime();
      material.uniforms.u_time.value = t;
      pointsMaterial.uniforms.u_time.value = t;
      backgroundMaterial.uniforms.u_time.value = t;
      modelGroup.rotation.y += 0.003;
      points.rotation.y += 0.005;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      tl.kill();
      shiftTweenRef.current?.kill();
      scaleTweenRef.current?.kill();
      shiftTweenRef.current = null;
      scaleTweenRef.current = null;
      renderer.dispose();
      geo.dispose();
      particleGeometry.dispose();
      bgGeo.dispose();
      material.dispose();
      pointsMaterial.dispose();
      backgroundMaterial.dispose();
      scene.remove(modelGroup);
      modelGroupRef.current = null;
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const group = modelGroupRef.current;
    if (!group) return;

    const targetX = variant === "sidebar" ? -3.4 : 0;
    const targetScale = variant === "sidebar" ? 0.55 : 1;

    shiftTweenRef.current?.kill();
    scaleTweenRef.current?.kill();

    shiftTweenRef.current = gsap.to(group.position, {
      x: targetX,
      duration: 1.2,
      ease: "power3.inOut",
      overwrite: "auto"
    });

    scaleTweenRef.current = gsap.to(group.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: 1.2,
      ease: "power3.inOut",
      overwrite: "auto"
    });

    return () => {
      shiftTweenRef.current?.kill();
      scaleTweenRef.current?.kill();
      shiftTweenRef.current = null;
      scaleTweenRef.current = null;
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    />
  );
}
