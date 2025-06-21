import { CardsStack } from "./cardstack";

export default function Highlights(){
    return(
        <div className="text-center pt-30">
            <h1 className="text-6xl">How to get your<br />
            <span className="text-[#8EDB05]">money into shape?</span>
            </h1>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            {/* First Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Track your cash flow.<br />
                    <span className="text-[#8EDB05]">Smarter. Simpler.</span>
                    </h1>
                <ul className=" my-1 lg:list-disc pl-5 text-s text-gray-300 items-center">
                    <li><span className="lg:hidden">1.</span> Automatically tracks your bank, UPI, and card expenses.</li>
                    <li><span className="lg:hidden">2.</span> Helps you spot and cut unnecessary spending with smart categorization.</li>
                    <li><span className="lg:hidden">3.</span> Keeps you within budget with alerts and spending summaries.</li>
                    <li><span className="lg:hidden">4.</span> Manages splits with friends and family to avoid confusion or delays.</li>
                    <li><span className="lg:hidden">5.</span> Sends reminders for pending dues and lets you log even cash transactions.</li>
                </ul>
            </div>
            {/* Right Cards */}
            <div className="w-[50%] hidden lg:block">
                <CardsStack/>
            </div>
            </div>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"/>
            {/* Second Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
                {/* Right Cards */}
            <div className="w-[50%] hidden lg:block">
                <CardsStack/>
            </div>
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-3xl md:text-3xl font-extrabold text-white leading-tight">
                Understand your financial habits<br />
                    <span className="text-[#8EDB05]">The First Step to Financial Freedom</span>
                    </h1>
                <ul className=" my-1 lg:list-disc pl-5 text-s text-gray-300">
                    <li><span className="lg:hidden">1.</span> Visualize where they spend the most — food, shopping, bills, etc.</li>
                    <li><span className="lg:hidden">2.</span> Get categorized summaries that show frequent and unnecessary expenses.</li>
                    <li><span className="lg:hidden">3.</span> Track monthly trends to compare spending over weeks or months.</li>
                    <li><span className="lg:hidden">4.</span> Use budgets to identify overspending and stay in control.</li>
                    <li><span className="lg:hidden">5.</span> Review dashboards for both digital and cash expenses to get the full picture.</li>
                </ul>
            </div>
            </div>
            {/* Line */}
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            {/* Third Section */}
            <div className=" h-[30rem] flex w-full lg:px-30 justify-center items-center gap-2">
            {/* Left Text */}
            <div className="flex-1 text-center lg:text-left w-[50%]">
                <h1 className="text-3xl md:text-3xl font-extrabold text-white leading-tight">
                Make your spending stress–free<br />
                    <span className="text-[#8EDB05]">Let Xpensease Do the Heavy Lifting</span>
                    </h1>
                <ul className=" my-1 lg:list-disc pl-5 text-s text-gray-300">
                    <li><span className="lg:hidden">1.</span> Automate expense tracking — no manual entry, no missed transactions.</li>
                    <li><span className="lg:hidden">2.</span> Set reminders for dues and repayments through PayAlert.</li>
                    <li><span className="lg:hidden">3.</span> Split expenses effortlessly with friends and family, no awkward conversations.</li>
                    <li><span className="lg:hidden">4.</span> Track budgets and avoid surprise overspending.</li>
                    <li><span className="lg:hidden">5.</span> Monitor cash flow with real-time dashboards and reports.</li>
                </ul>
            </div>
            {/* Right Cards */}
            <div className="w-[50%] hidden lg:block">
                <CardsStack/>
            </div>
            </div>
        </div>
    );
}