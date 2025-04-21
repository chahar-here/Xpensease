import { CardsStack } from "./cardstack";

export default function Highlights(){
    return(
        <div className="text-center pt-30">
            <h1 className="text-6xl">How to get your<br />
            <span className="text-indigo-500">money into shape?</span>
            </h1>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            {/* First Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    Track your cash flow.<br />
                    <span className="text-indigo-500">Smarter. Simpler.</span>
                    </h1>
                <ul className=" list-disc pl-5 text-s text-gray-300">
                    <li>Connect your bank accounts and all your transactions will get automatically imported to Spendee. </li>
                    <li>Connect your crypto wallet and E-Wallet for complete overview of your cash flow. </li>
                    <li>Add your cash expenses manually.</li>
                </ul>
            </div>
            {/* Right Cards */}
            <div className="w-[50%]">
                <CardsStack/>
            </div>
            </div>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            {/* Second Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
                {/* Right Cards */}
            <div className="w-[50%]">
                <CardsStack/>
            </div>
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Understand your financial habits<br />
                    <span className="text-indigo-500">Smarter. Simpler.</span>
                    </h1>
                <ul className=" list-disc pl-5 text-s text-gray-300">
                    <li>Analyze your finance with beautiful, simple and easy to understand graphic. No need for complicated Excel sheets.</li>
                    <li>See where your money goes and where they come from every month.</li>
                    <li>See whether you spend less than you earn in one place and on 1 tap.</li>
                </ul>
            </div>
            </div>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            {/* Third Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Make your spending stress–free<br />
                    <span className="text-indigo-500">Smarter. Simpler.</span>
                    </h1>
                <ul className=" list-disc pl-5 text-s text-gray-300">
                    <li>Set smart budgets to help you not to overspend in chosen category.</li>
                    <li>Know how much you can spend daily in order to stick to your budget.</li>
                    <li>Save money for your future dreams.</li>
                </ul>
            </div>
            {/* Right Cards */}
            <div className="w-[50%]">
                <CardsStack/>
            </div>
            </div>
        </div>
    );
}