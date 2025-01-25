import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { gridItems } from "@/data";

// Dynamically import BentoGrid and BentoGridItem
const BentoGrid = dynamic(
  () => import("./BentoGrid").then((mod) => mod.BentoGrid),
  { ssr: false }
);
const BentoGridItem = dynamic(
  () => import("./BentoGrid").then((mod) => mod.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="about">
        <BentoGrid>
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </BentoGrid>
      </section>
    </Suspense>
  );
};

export default Grid;
