import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  return (
    <div>
      <p className="flex mt-3">
        <CircleCheckBig className="mr-2 text-bold"></CircleCheckBig> {feature}
      </p>
    </div>
  );
};

export default PricingFeature;
