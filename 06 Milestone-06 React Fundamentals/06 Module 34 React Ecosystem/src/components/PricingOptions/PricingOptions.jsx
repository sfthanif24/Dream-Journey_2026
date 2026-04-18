import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="grid grid-cols-2 gap-8 md: lg:grid-cols-3">
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))} */}
        {
            pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;
