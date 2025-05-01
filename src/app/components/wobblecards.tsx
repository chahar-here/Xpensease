"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCards() {
  return (
    <div>
        <div className="container mx-auto p-8 pt-5 font-sans">
      <h1 className="mb-4 text-center font-bold text-4xl">
        Track All Your Expenses, Smarter. Simpler.
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
      Xpensease connects your UPI, credit card, and bank transactions to give you real-time insights and full control over your spending.
      </p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Automatic Expense Tracker:
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Track your spending effortlessly Automatically tracks expenses from UPI, credit/debit cards, and bank transactions, with categorized insights and detailed filters.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Single Split System:
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Quickly split expenses with contacts Select a transaction and your contacts, and instantly generate a split summary to share with ease
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-lg">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Group Splits and Roomies Feature:
          </h2>
          <p className="mt-4 max-w-md text-left  text-base/6 text-neutral-200">
          Manage group and roommate expenses seamlessly Create groups, add members, and share UPI details for quick settlements, with monthly summaries and PDF reports for roommates.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard> */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Budget Management System:
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Take control of your finances Set budgets, track progress, and manage all your expenses in one place, ensuring you stay within your financial limits.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        PayAlert by Xpensease:
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Stay on top of money owed or received Set custom alerts for reminders about money you’ve given or owe, with dates and automatic tracking for timely settlements.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        CashWise:
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Track your cash transactions effortlessly Manually log cash expenses, categorize them, and analyze your finances with insightful monthly income and expense dashboards.
        </p>
      </WobbleCard>
    </div>
    </div>
  );
}
