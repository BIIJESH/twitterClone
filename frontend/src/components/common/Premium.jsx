import React, { useState } from "react";
import "/src/index.css";

const Premium = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0); // 0 = first card selected by default

  const plans = [
    {
      title: "Basic",
      priceMonthlyAmount: "$368",
      priceMonthlyDuration: "/ month",
      priceAnnuallyAmount: "$326",
      priceAnnuallyDuration: "/ year",
      features: [
        "Small reply boost",
        "Encrypted direct messages",
        "Bookmark folders",
        "Highlights tab",
        "Edit post",
        "Longer posts",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      priceMonthlyAmount: "$980",
      priceMonthlyDuration: "/ month",
      priceAnnuallyAmount: "$857",
      priceAnnuallyDuration: "/ year",
      features: [
        "Half Ads in For You and Following",
        "Larger reply boost",
        "Get paid to post",
        "Checkmark",
        "Grok with increased limits",
        "X Pro, Analytics, Media Studio",
        "Creator Subscriptions",
      ],
      highlight: false,
    },
    {
      title: "Premium+",
      priceMonthlyAmount: "$6,080",
      priceMonthlyDuration: "/ month",
      priceAnnuallyAmount: "$5,003",
      priceAnnuallyDuration: "/ year",
      features: [
        "Fully ad-free",
        "Largest reply boost",
        "Write Articles",
        "Radar",
        "Grok AI",
        "Highest usage limits",
        "Unlock DeepSearch & Think",
        "Early access to new features",
      ],
      highlight: false,
    },
  ];

  const togglePricing = () => {
    setIsAnnual((prev) => !prev);
  };

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  const compareplans = [
    { name: "Basic", description: "Free forever" },
    { name: "Premium", description: "$39 per month billed annually" },
    { name: "Premium+", description: "$89 per month billed annually" },
  ];

  const features = [
    { name: "Ads", availability: [true, true, true] },
    { name: "Reply boost", availability: [true, true, true] },
    { name: "Radar", availability: [true, true, true] },
    { name: "Edit post", availability: [false, true, true] },
    { name: "Longer posts", availability: [false, true, true] },
    {
      name: "Background video playback",
      availability: [false, true, true],
    },
    { name: "Download videos", availability: [false, true, true] },
  ];

  return (
    <>
      <section className="container mx-auto py-20">
        <div className="relative w-full px-4">
          <div className="lg:pt-20">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl text-white">
                Simple, transparent pricing
              </h2>
              <p className="mt-2 lg:text-lg text-gray-300">
                Whatever your status, our offers evolve according to your needs.
              </p>
            </div>

            <div className="flex justify-center items-center gap-x-3 mb-10">
              <label htmlFor="pricing-switch" className="text-sm text-gray-300">
                Monthly
              </label>
              <label
                htmlFor="pricing-switch"
                className="relative inline-block w-11 h-6 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="pricing-switch"
                  className="peer sr-only"
                  checked={isAnnual}
                  onChange={togglePricing}
                />
                <span className="absolute inset-0 bg-gray-700 rounded-full transition-colors duration-200 peer-checked:bg-purple-600" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-gray-300 rounded-full shadow-xs transition-transform duration-200 peer-checked:translate-x-full" />
              </label>
              <label htmlFor="pricing-switch" className="text-sm text-gray-300">
                Annually
              </label>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectPlan(index)}
                  className={`flex flex-col rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer h-full ${selectedPlan === index
                      ? "border-2 border-sky-600 bg-gray-800"
                      : "border border-transparent bg-gray-800"
                    }`}
                >
                  <h4 className="font-medium text-lg text-white">
                    {plan.title}
                  </h4>

                  <span className="mt-4 flex items-end gap-1 font-bold text-white">
                    <span className="text-4xl">
                      {isAnnual
                        ? plan.priceAnnuallyAmount
                        : plan.priceMonthlyAmount}
                    </span>
                    <span className="text-lg font-normal">
                      {isAnnual
                        ? plan.priceAnnuallyDuration
                        : plan.priceMonthlyDuration}
                    </span>
                  </span>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-x-2 text-gray-300"
                      >
                        <i class="ri-check-line ri-lg"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* detail plan */}
        <div className="px-4 mt-20 mb-20">
          <div>
            <h2 className="text-2xl font-bold">Compare tiers & features</h2>
          </div>

          {/* Header */}
          <div class1Name="sticky top-0 start-0 py-2 mt-4">
            <div className="grid grid-cols-9 gap-6">
              <div className="col-span-3">
                <span className="font-semibold text-lg text-gray-300">
                  Enhanced Experience
                </span>
              </div>

              {compareplans.map((plan, idx) => (
                <div key={idx} className="col-span-2">
                  <span className="font-semibold text-lg text-gray-300">
                    {plan.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* End Header */}

          {/* Features */}
          <div className="space-y-4 lg:space-y-0">
            {features.map((feature, idx) => (
              <ul key={idx} className="grid grid-cols-9 gap-6">
                {/* Feature Name */}
                <li className="lg:col-span-3 pb-1.5 lg:py-3">
                  <span className="font-medium text-base text-gray-300">
                    {feature.name}
                  </span>
                </li>

                {/* Availability per plan */}
                {feature.availability.map((isAvailable, index) => (
                  <li key={index} className="col-span-2 py-1.5 lg:py-3">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                      {isAvailable ? <i className="ri-check-line ri-lg" /> : ""}
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {/* End Features */}
        </div>
      </section>
      <div className="fixed bottom-0 inset-x-0 bg-black border-t border-slate-700 py-4">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <h4 className="text-lg text-white font-medium">Premium+</h4>
            <h3 className="mt-1 flex items-end gap-1 font-bold text-white">
              <span className="text-4xl">¥6,080</span>
              <span className="text-lg font-normal">/ month</span>
            </h3>
            <h4 className="mt-1 text-base text-white font-medium">
              Billed monthly
            </h4>
          </div>
          <div className="col-span-2">
            <button className="bg-sky-600 px-12 py-2.5 w-full rounded-full">
              Subscribe & Pay
            </button>
            <h3 className="text-xs p-1 border border-slate-700 mt-2 rounded-md">
              By subscribing, you agree to our Purchaser Terms of Service.
              Subscriptions auto-renew until canceled. Cancel anytime, at least
              24 hours prior to renewal to avoid additional charges. Manage your
              subscription through the platform you subscribed on.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
