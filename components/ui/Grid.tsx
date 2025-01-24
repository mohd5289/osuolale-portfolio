import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  // useEffect(() => {
  //   // This code will only run on the client
  //   const element = document.getElementById("about");
  //   // Perform actions with the element
  //   console.log(element);
  // }, []);
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
