import React from "react";
import { FeatureTab } from "../../types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image1, image2 } = featureTab;

  return (
    <>
      <div className="flex h-full items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        {/* <div className="relative mx-auto hidden aspect-[562/366] md:block md:w-1/2">
          <Image src={image1} alt={title} fill className="" />
          <Image
            src={image2}
            alt={title}
            fill
            className=""
          />
        </div> */}
        <div className="relative mx-auto hidden aspect-[562/366] md:block md:w-1/2 h-[600px] overflow-hidden rounded-xl shadow-lg">
  <div className="absolute inset-0 flex">
    <div className="w-1/2 relative">
      <Image
        src={image1}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="w-1/2 relative">
      <Image
        src={image2}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default FeaturesTabItem;
