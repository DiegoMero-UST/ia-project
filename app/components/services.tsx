"use client"

import Workflow from "./workflow";
import WorkflowContent from "./workflowContent";
import Cta from "./cta";
import Automations from "./automations";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col gap-10 items-center pb-20 lg:h-full bg-white text-black border-2 border-[#273950]">
      <div className="p-10 flex flex-col gap-10 items-center">
        <h2 className="lg:text-4xl lg:font-bold text-4xl text-[#1c5a6c]" data-aos="fade-up">How our AI and Automation agency works:</h2>
      </div>
      <div className="relative pb-20">
        <Workflow />
        <WorkflowContent />
      </div>
        <Cta />
        <h2 className="lg:text-4xl font-bold text-[#1c5a6c] lg:pt-20 lg:p-10">The endless use cases of AI and Automation</h2>
        <Automations />
        <Cta />
    </section>
  );
}