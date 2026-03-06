"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Quote,
} from "lucide-react";



type Review = {
  title: string;
  excerpt: string;
  role: string | null;
  company: string;
  rating: number;
  href: string;
};

const gartnerReviews: Review[] = [
  {
    title: "SupermanageAGI became our autonomous management layer",
    excerpt:
      "We deployed SupermanageAGI as an executive operating system. It coordinates cross functional execution, resolves bottlenecks, and continuously reprioritizes initiatives without manual oversight.",
    role: "Chief Operating Officer",
    company: "Global Enterprise, 5,000+ employees",
    rating: 3,
    href: "/learnmore/",
  },
  {
    title: "True multi-agent intelligence across departments",
    excerpt:
      "Specialized AI agents for finance, product, operations, and engineering collaborate autonomously under strategic constraints we define.",
    role: "Chief Digital Officer",
    company: "Enterprise, 1,000–5,000 employees",
    rating: 5,
    href: "/learnmore/",
  },
  {
    title: "Strategic execution without operational drag",
    excerpt:
      "Weekly reporting, dependency mapping, risk escalation, stakeholder updates fully automated. Leadership now operates at a strategic altitude.",
    role: "VP of Strategy",
    company: "Enterprise, 2,000+ employees",
    rating: 4,
    href: "/learnmore/",
  },
  {
    title: "Governed autonomy at enterprise scale",
    excerpt:
      "Policy-aware agents, role-based constraints, and complete audit trails satisfied both compliance and innovation teams.",
    role: "Chief Information Security Officer",
    company: "Financial Services, 3,000+ employees",
    rating: 4,
    href: "/learnmore/",
  },
  {
    title: "From coordination chaos to AGI-powered alignment",
    excerpt:
      "The platform synthesizes signals across systems and proactively corrects misalignment before delivery impact.",
    role: "Chief of Staff",
    company: "Enterprise, 1,500+ employees",
    rating: 3,
    href: "/learnmore/",
  },
];

const g2Reviews: Review[] = [
  {
    title: "The AGI execution engine our company needed",
    excerpt:
      "SupermanageAGI unified 12 disconnected tools under an intelligent orchestration layer that understands business context.",
    role: null,
    company: "Head of Operations · SaaS",
    rating: 5,
    href: "/learnmore/",
  },
  {
    title: "Autonomous prioritization changed everything",
    excerpt:
      "Teams receive dynamically optimized priorities based on revenue impact, dependencies, and risk signals.",
    role: null,
    company: "Senior Product Manager · FinTech",
    rating: 5,
    href: "/learnmore/",
  },
  {
    title: "Scales from startup chaos to structured execution",
    excerpt:
      "As complexity increased, governance layers and execution models evolved automatically.",
    role: null,
    company: "Founder · Series B Startup",
    rating: 5,
    href: "/learnmore/",
  },
  {
    title: "Not a chatbot — a decision-making infrastructure",
    excerpt:
      "Agents proactively detect blockers, reallocate work, escalate risks, and drive outcomes independently.",
    role: null,
    company: "Director of Engineering · HealthTech",
    rating: 4,
    href: "/learnmore/",
  },
  {
    title: "Finally, AI that executes — not just suggests",
    excerpt:
      "SupermanageAGI triggers workflows, updates stakeholders, adjusts timelines, and closes loops automatically.",
    role: null,
    company: "Operations Lead · Logistics",
    rating: 5,
    href: "/learnmore/",
  },
];



function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-100 text-gray-100"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: Review;
}) {
  return (
    <article className="flex-shrink-0 w-[320px] lg:w-[360px] bg-white rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 snap-start">
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-bold tracking-widest text-[#625FD0] uppercase">
          Verified Review
        </span>
        <StarRating rating={review.rating} />
      </div>

      <div className="flex flex-col gap-2">
     
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {review.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {review.excerpt}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
        <div>
          {review.role && (
            <span className="text-md font-semibold text-gray-700 block">
              {review.role}
            </span>
          )}
          <span className="text-sm text-gray-400">{review.company}</span>
        </div>

        <a
          href={review.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-[#625FD0] transition-colors group"
        >
          Read
          <ExternalLink
            size={10}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </article>
  );
}

function Carousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-1">
        <button
          onClick={() => scroll(-1)}
          disabled={atStart}
          className="w-10 h-10 rounded-full border-2 border-[#625FD0]  flex items-center justify-center text-gray-800 hover:bg-[#625FD0]  hover:text-white disabled:opacity-20"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={atEnd}
          className="w-10 h-10 rounded-full border-2 border-[#625FD0]  flex items-center justify-center text-gray-400 hover:bg-[#625FD0]  hover:text-white disabled:opacity-20"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div
        ref={ref}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}



export default function CustomerReviews() {
  const avgRating = 4.9;
  const totalReviews = gartnerReviews.length + g2Reviews.length;

  return (
    <section id="reviews" className="bg-[#F0F6F9] py-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
          
            <h2 className="text-4xl sm:text-5xl  text-gray-900 tracking-tight">
              Powering Autonomous Enterprises
            </h2>
            <p className="mt-4 text-gray-500 text-md max-w-xl leading-relaxed">
              SupermanageAGI serves as the autonomous orchestration layer for
              modern organizations  aligning strategy, execution, and
              intelligence across every department.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="text-center">
              <span className="text-4xl font-semibold text-gray-900">
                {avgRating}
              </span>
              <StarRating rating={5} size={14} />
              <p className="text-md  text-gray-400 mt-1">Average Rating</p>
            </div>

            <div className="text-center">
              <span className="text-4xl font-semibold text-gray-900">
                {totalReviews}+
              </span>
              <p className="text-md text-gray-400 mt-1">Verified Reviews</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200" />

        <Carousel reviews={gartnerReviews} />
        <Carousel reviews={g2Reviews} />
      </div>

      <style>{`*::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}