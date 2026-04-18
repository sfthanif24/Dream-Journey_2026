import React from "react";
import PricingFeature from "../PricingFeature/PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col p-4 border bg-amber-700 rounded-2xl">
      {/* Card Header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* Card Body */}
      <div className="flex-1 p-4 mt-10 bg-amber-400 rounded-2xl">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </div>
      <button className="w-full mt-4 btn">Subscribe</button>
    </div>
  );
};

export default PricingCard;
