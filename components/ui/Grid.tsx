import React from "react";
// import { BentoGrid, BentoGridItem } from "./BentoGrid";
import dynamic from "next/dynamic";
import { gridItems } from "@/data";

const BentoGrid = dynamic(
  () => import("./BentoGrid").then((mod) => mod.BentoGrid),
  {
    ssr: false,
  }
);
const BentoGridItem = dynamic(
  () => import("./BentoGrid").then((mod) => mod.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
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
  );
};

export default Grid;
