"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
export function CardsStack() {
  return (
    <div className="h-fit flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Rishabh Khandelwal",
    designation: "Review on Play Store",
    content: (
      <p>
        Superb for manage <Highlight>day to day expense</Highlight> and split feature is also good.
      </p>
    ),
  },
  {
    id: 1,
    name: "Gunjan Sharma",
    designation: "Xpensease User",
    content: (
      <p>
        Such a innovative app with easy access ...u can <Highlight>track ur expenses</Highlight> without providing data to the app authorities ......this idea of tracking is very useful Love this app.
      </p>
    ),
  },
  {
    id: 2,
    name: "Raj Chahar",
    designation: "Xpensease User",
    content: (
      <p>
        UI is very clean and easy to use. <Highlight>Track your expenses</Highlight> in a very simple way. love this app.
      </p>
    ),
  },
];
