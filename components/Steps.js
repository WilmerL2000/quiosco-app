import { useRouter } from "next/router";
import React from "react";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen", url: "/summary" },
  { step: 3, name: "Datos y Total", url: "/global" },
];

const Steps = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let value;
    if (router.pathname === "/") {
      value = 4;
    } else if (router.pathname === "/summary") {
      value = 47;
    } else {
      value = 100;
    }
    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            key={step.step}
            type="button"
            className="text-2xl font-bold"
            onClick={() => router.push(step.url)}
          >
            {step.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
