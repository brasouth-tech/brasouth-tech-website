import { Clock, CurrencyDollar, XCircle } from "phosphor-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <XCircle
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500"
          weight="duotone"
        />
      ),
      title: "Frustrated with Unreliable Handymen?",
      description:
        "Tired of no-shows, poor quality work, and having to call multiple people to get simple repairs done right?",
    },
    {
      icon: (
        <Clock
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500"
          weight="duotone"
        />
      ),
      title: "Waiting Weeks for Service?",
      description:
        "Most contractors are booked solid or don't return calls. Your home repairs keep getting pushed to 'next week.'",
    },
    {
      icon: (
        <CurrencyDollar
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500"
          weight="duotone"
        />
      ),
      title: "Worried About Hidden Costs?",
      description:
        "Surprise charges, upfront fees, and inflated estimates make you hesitant to call anyone for help.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-red-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Tired of Unreliable Home Repair Services?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We understand your frustration. When you need quality repairs for
            your home, you deserve professional service you can count on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center max-w-sm mx-auto sm:max-w-none"
            >
              <div className="mb-4 flex justify-center">{problem.icon}</div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-neutral-900 mb-3 sm:mb-4 leading-tight">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 mb-3 sm:mb-4 leading-tight">
            You Deserve Better. You Deserve Professional, Reliable Service.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed">
            That's exactly what we deliver - quality repairs by bonded & insured
            professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
