"use client";

import { cn } from "@/utils/cn";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";

const ShaderComponent = dynamic(
  () => Promise.resolve(InternalShaderComponent),
  { ssr: false }
);

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          animationSpeed={animationSpeed}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  animationSpeed: number;
  totalSize?: number;
  dotSize?: number;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = React.memo(
  ({
    colors = [[0, 0, 0]],
    opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
    animationSpeed,
    totalSize = 4,
    dotSize = 2,
    center = ["x", "y"],
  }) => {
    const uniforms = useMemo(() => {
      const colorsArray =
        colors.length === 2
          ? [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]]
          : colors.length === 3
          ? [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]]
          : Array(6).fill(colors[0]);

      return {
        u_colors: {
          value: colorsArray.map((color) => [
            color[0] / 255,
            color[1] / 255,
            color[2] / 255,
          ]),
        },
        u_opacities: { value: opacities },
        u_total_size: { value: totalSize },
        u_dot_size: { value: dotSize },
      };
    }, [colors, opacities, totalSize, dotSize]);

    const shader = useMemo(
      () => `
        precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
          return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }
        void main() {
          vec2 st = fragCoord.xy;
          ${
            center.includes("x")
              ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }
          ${
            center.includes("y")
              ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }
          float opacity = step(0.0, st.x) * step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
          opacity *= u_opacities[int(random(st2) * 10.0)];
          fragColor = vec4(u_colors[0], opacity);
        }
      `,
      [center]
    );

    return <ShaderComponent source={shader} uniforms={uniforms} />;
  }
);

const InternalShaderComponent: React.FC<ShaderProps> = ({
  source,
  uniforms,
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: `
          precision mediump float;
          in vec2 coordinates;
          uniform vec2 u_resolution;
          out vec2 fragCoord;
          void main() {
            gl_Position = vec4(position, 1.0);
            fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          }
        `,
        fragmentShader: source,
        uniforms: {
          ...uniforms,
          u_resolution: { value: new THREE.Vector2(size.width, size.height) },
          u_time: { value: 0 },
        },
      }),
    [source, size, uniforms]
  );

  useFrame(({ clock }) => {
    if (ref.current) {
      const material = ref.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

interface ShaderProps {
  source: string;
  uniforms: {
    [key: string]: { value: any };
  };
}
