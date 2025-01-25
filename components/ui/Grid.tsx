import React from "react";
// import dynamic from "next/dynamic";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

// Dynamically import BentoGrid and BentoGridItem

const Grid = () => {
  return (
    <div>
      <section id="about">
        <BentoGrid>
          <div>
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
          </div>
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
