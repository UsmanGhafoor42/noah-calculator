"use client";
import MainLayout from "@/components/main-layout";
import React, { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(1);
  const [propertyUsage, setPropertyUsage] = useState("");

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handlePropertyUsage = (usage: string) => {
    setPropertyUsage(usage);
  };

  return (
    <div className="p-4 mx-auto max-w-3xl flex flex-col gap-4">
      <p className="font-bold text-[40px] text-center">
        Tell Us <span className="text-[color:var(--green)]">About</span> Your
        New property
      </p>
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">
              What city is your property on?
            </p>
            <input
              type="text"
              placeholder="City Name Here"
              className="border p-2 mt-2 w-full border-[color:var(--green)] py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-semibold">
                How do you use this property
              </p>
              <p className="text-sm text-gray-500">
                The use of your property affects the mortgage rates you can
                access.
              </p>
            </div>
            <div className="flex gap-4 justify-between flex-shrink ">
              <button
                onClick={() => handlePropertyUsage("Owner-occupied")}
                className={`border border-[color:var(--green)] p-2 rounded ${
                  propertyUsage === "Owner-occupied"
                    ? "bg-[color:var(--green)]/50"
                    : ""
                } w-full py-4`}
              >
                Owner-occupied
              </button>
              <button
                onClick={() => handlePropertyUsage("Owner-occupied and rental")}
                className={`border border-[color:var(--green)] p-2 rounded ${
                  propertyUsage === "Owner-occupied and rental"
                    ? "bg-[color:var(--green)]/50"
                    : ""
                } w-full py-4`}
              >
                Owner-occupied and rental
              </button>
            </div>
            <div className="flex gap-4 justify-between flex-shrink ">
              <button
                onClick={() => handlePropertyUsage("Rental")}
                className={`border border-[color:var(--green)] p-2 rounded ${
                  propertyUsage === "Rental" ? "bg-[color:var(--green)]/50" : ""
                } w-full py-4`}
              >
                Rental
              </button>
              <button
                onClick={() => handlePropertyUsage("Second home")}
                className={`border border-[color:var(--green)] p-2 rounded ${
                  propertyUsage === "Second home"
                    ? "bg-[color:var(--green)]/50"
                    : ""
                } w-full py-4`}
              >
                Second home
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-semibold">Purchase Price</p>
              <p className="text-sm text-gray-500">
                Your home's purchase price determines the minimum down payment
                you'll be required to put down along with which mortgage rates
                you qualify for.
              </p>
            </div>
            <div className="relative mt-2">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                $
              </span>
              <input
                type="number"
                placeholder="  Enter Amount"
                className="border p-2 pl-4 w-full border-[color:var(--green)] py-4 outline-none"
                style={{ appearance: "none" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-semibold">
                How much is your down payment? Enter percentage or amount.
              </p>
              <p className="text-sm text-gray-500">
                Your down payment will determine which rates you are eligible
                for and if you will need to purchase mortgage default insurance.
              </p>
            </div>
            <div className="flex gap-4 justify-between flex-shrink ">
            <div className="relative flex-3">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                $
              </span>
              <input
                type="number"
                placeholder="  Enter Amount"
                className="border p-2 pl-4 w-full border-[color:var(--green)] py-4 outline-none "
              />
            </div>
            <div className="relative flex-1">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                %
              </span>
              <input
                type="number"
                className="border p-2 pl-6 w-full border-[color:var(--green)] py-4 outline-none flex-1"
              />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleContinue}
              className="mt-4 bg-[color:var(--green)] text-white p-2 rounded px-14 "
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {step === 2 && (


        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">
            What’s your name?
            </p>
            <input
              type="text"
              placeholder="Enter Your Name Here"
              className="border p-2 mt-2 w-full border-[color:var(--green)] py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">
            What is your phone number?
            </p>
            <input
              type="phone"
              placeholder="000-000-0000"
              className="border p-2 mt-2 w-full border-[color:var(--green)] py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">
            What is your email?
            </p>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="border p-2 mt-2 w-full border-[color:var(--green)] py-4 outline-none"
            />
          </div>
          

          <div className="flex items-center justify-center">
            <button
              onClick={handleContinue}
              className="mt-4 bg-[color:var(--green)] text-white p-2 rounded px-14 "
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
