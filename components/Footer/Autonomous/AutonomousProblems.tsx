"use client";

type Problem = {
  icon: string;
  title: string;
  body: string;
};

const problems: Problem[] = [
  {
    icon: "💬",
    title: "Manual Coordination That Agents Eliminate",
    body: "Every morning, operations teams manually check inventory across multiple platforms. Finance teams manually download settlement files and build reconciliation sheets. Logistics teams manually pull NDR reports and chase courier portals. Marketing teams manually export campaign data from 4 to 6 platforms and combine it into a performance sheet. Customer care teams manually switch between 5 systems to track a single return. SuperManager AGI agents eliminate every one of these manual workflows and execute them autonomously on schedule.",
  },
  {
    icon: "😤",
    title: "Information Latency That Agents Collapse",
    body: "By the time a weekly MIS reaches the founder, the data in it is 3 to 7 days old. By the time a finance team identifies a settlement discrepancy, 30 to 60 days of undetected shortfalls have accumulated. By the time a marketing team notices a campaign is fatiguing, significant budget has been wasted. SuperManager AGI agents monitor connected systems continuously and surface intelligence in real time, not in the next report cycle.",
  },
  {
    icon: "⏳",
    title: "Decision Bottlenecks That Agents Unblock",
    body: "When cross-department coordination requires a meeting, decisions wait for calendars to align. When a procurement decision requires data from 3 systems, someone manually compiles it. When a founder needs org status, they spend an hour gathering it from department heads. SuperManager AGI agents retrieve any cross-system data in under 65ms and surface it in a structured format before the question is finished being asked.",
  },
  {
    icon: "🗂️",
    title: "Execution Depends on Human Follow-Ups",
    body: "Projects move forward only when someone remembers to follow up, update tasks, or reconnect teams. Without intelligent automation, progress becomes dependent on manual effort instead of continuous execution.",
  },
];

function ProblemCard({ icon, title, body }: Problem) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-[#625FD0] opacity-60" />

      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#625FD0]/10 text-xl text-[#625FD0]">
        {icon}
      </div>

      <div>
        <h3 className="mb-2 text-base font-semibold leading-snug text-black">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600">{body}</p>
      </div>
    </div>
  );
}

export default function AutonomousProblems() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white py-16">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 py-16 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl leading-tight text-black lg:text-5xl">
            What Slows Every Organisation Down
            <span className="text-[#625FD0]"> And How Agents Fix It</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The biggest execution problems in every organisation are not caused
            by lack of talent or effort. They are caused by the coordination
            overhead that sits between intention and outcome: the manual status
            gathering, the follow-up chasing, the report compilation, and the
            data reconciliation that consumes 40 to 60 percent of operational
            team time without producing any output.
          </p>
        </div>

        <div className="mb-12 h-px bg-gray-200" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
