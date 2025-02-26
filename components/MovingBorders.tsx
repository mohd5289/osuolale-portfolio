"use client";
import React, {
  ElementType,
  ReactNode,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";

// Define prop types for Button
type ButtonProps<C extends ElementType = "button"> = {
  borderRadius?: string;
  children: ReactNode;
  as?: C; // Generic type for the 'as' prop to allow any component
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  // Merge props of the component passed via `as`
  [key: string]: React.HTMLProps<C>[keyof React.HTMLProps<C>];
} & React.ComponentProps<C>; // This extends the props of the component being used

// Define the Button component as a generic component
export function Button<C extends ElementType = "button">({
  borderRadius = "1.75rem",
  children,
  as: Component = "button" as C, // Default component is 'button'
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps<C>) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps} // spread the remaining props
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

// Define props for the MovingBorder component
import { SVGProps } from "react";

type MovingBorderProps = SVGProps<SVGSVGElement> & {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
};

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const rectRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);
  const [isClient, setIsClient] = useState(false); // Track if we're on the client side

  // Set isClient to true after component mounts to ensure the DOM is available
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't run the animation frame logic on SSR
  useAnimationFrame((time) => {
    if (isClient && rectRef.current) {
      const length = rectRef.current?.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    }
  });

  const x = useTransform(
    progress,
    (val) => rectRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => rectRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      {isClient && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
          {...otherProps}
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            ref={rectRef}
          />
        </svg>
      )}
      {isClient && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
