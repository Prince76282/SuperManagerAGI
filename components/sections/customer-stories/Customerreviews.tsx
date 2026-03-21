"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";


type Review = {
  title: string;
  excerpt: string;
  role: string | null;
  company: string;
  rating: number;

};

const gartnerReviews: Review[] = [
  {
    title: "SuperManager AGI became our entire operational intelligence layer",
    excerpt:
      "We deployed SuperManager AGI across operations, finance and logistics simultaneously. Every morning our founding team gets a live intelligence brief from every connected system. We have not needed a manual status report in four months.",
    role: "Chief Operating Officer",
    company: "D2C Brand, 200+ SKUs",
    rating: 3,
    
  },
  {
    title: "True specialist agent intelligence per department",
    excerpt:
      "The difference between SuperManager AGI and every other AI tool we tried is the specialist depth per domain. The finance agent understands reconciliation. The logistics agent understands NDR. These are not generic AI responses  they are grounded in our actual data.",
    role: "Chief Digital Officer",
    company: "Enterprise, 1,000 to 5,000 employees",
    rating: 5,
    
  },
  {
    title: "Strategic intelligence without the intelligence team overhead",
    excerpt:
      "Weekly MIS, monthly P and L, quarterly board reports, OKR tracking, competitor monitoring  all running autonomously. Leadership now operates on live data, not reports that were accurate last Tuesday.",
    role: "VP of Strategy",
    company: "Enterprise, 2,000+ employees",
    rating: 4,
    
  },
  {
    title: "Data sovereignty was the deciding factor",
    excerpt:
      "ADA means our enterprise data never crosses an external boundary during agent reasoning. For a regulated financial services firm, this is not a preference  it is a requirement. Every other platform we evaluated failed this test .",
    role: "Chief Information Security Officer",
    company: "Financial Services, 3,000+ employees",
    rating: 4,
    
  },
  {
    title: "Agents that coordinate across departments automatically",
    excerpt:
      "When our NDR rate spiked in tier-2 cities, the logistics agent automatically fed that data to the marketing agent, which adjusted our geo-targeting within 24 hours. That cross-department coordination happened without a single meeting.",
    role: "Chief of Staff",
    company: "D2C Brand, 1,500+ employees",
    rating: 3,
    
  },
  
];

const g2Reviews: Review[] = [
  {
    title: "The AI workforce our operations team needed",
    excerpt:
      "SuperManager AGI connected 11 disconnected tools under one intelligent agent workforce that understands our actual business context  not generic AI responses but grounded outputs from our actual live data",
    role: "Chief of Staff",
    company: "Head of Operations, D2C Brand",
    rating: 3,
    
  },
   {
    title: "Settlement reconciliation that actually works",
    excerpt:
      "Finance reconciliation that took 2 days every month now runs overnight automatically. The agent caught 12 settlement discrepancies in the first month that would have gone undetected for 60 days under our old process.",
    role: "Chief of Staff",
    company: "Finance Head, E-commerce Brand",
    rating: 3,
    
  },
   {
    title: "Scales with complexity without scaling headcount",
    excerpt:
      "As our SKU count went from 50 to 200 and our channel count doubled, the operational complexity would have required hiring 4 additional team members. Instead we deployed 3 more specialist agents. Same quality. Fraction of the cost.",
    role: "Chief of Staff",
    company: "Founder, Series B D2C Brand",
    rating: 3,
    
  },
   {
    title: "Not a chatbot  an autonomous operational workforce",
    excerpt:
      "Agents proactively detect stock-out risk, reorder at the right threshold, reconcile finance overnight, manage NDR follow-ups and generate our weekly board pack. This is not AI answering questions. This is AI doing the work.",
    role: "Chief of Staff",
    company: "D2C Brand, 1,500+ employees",
    rating: 3,
    
  },
  {
    title: "Finally, AI that executes  not just suggests",
    excerpt:
      "Every other AI tool gave us recommendations and left us to implement them manually. SuperManager AGI executes. The agent does not suggest drafting a PO  it drafts the PO, sends it for approval and after approval sends it to the vendor.",
    role: "Chief of Staff",
    company: "D2C Brand, 1,500+ employees",
    rating: 3,
    
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
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex-shrink-0 w-[85%] sm:w-[300px] lg:w-[360px] bg-white rounded-2xl p-5 sm:p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 snap-start">

      <div className="flex items-start justify-between gap-2">
        <span className="text-xs tracking-widest text-[#625FD0] uppercase">
          Verified Review
        </span>
        <StarRating rating={review.rating} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
          {review.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {review.excerpt}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
        <div>
          {review.role && (
            <span className="text-sm font-semibold text-gray-700 block">
              {review.role}
            </span>
          )}
          <span className="text-xs sm:text-sm text-gray-400">
            {review.company}
          </span>
        </div>

        
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
    setAtStart(el.scrollLeft <= 5);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 5);
  };

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;

    const scrollAmount =
      window.innerWidth < 640 ? 260 : 380;

    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-4">

      {/* arrows */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => scroll(-1)}
          disabled={atStart}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#625FD0] flex items-center justify-center text-gray-700 hover:bg-[#625FD0] hover:text-white disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => scroll(1)}
          disabled={atEnd}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#625FD0] flex items-center justify-center text-gray-700 hover:bg-[#625FD0] hover:text-white disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* scroll area */}
      <div
        ref={ref}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
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
  const totalReviews = 10;

  return (
    <section id="reviews" className="bg-[#F0F6F9] py-12 sm:py-16 px-4 sm:px-6">

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">

        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Powering the Vibe Working Platform Across Every Industry
            </h2>

            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
            SuperManager AGI serves as the autonomous AI workforce layer for organisations across D2C, consulting, SaaS, enterprise, logistics, healthcare and financial services  aligning execution, intelligence and coordination across every department.
            </p>
          </div>

          {/* stats */}
          <div className="flex gap-8 sm:gap-12">

            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {avgRating}
              </span>

              <StarRating rating={5} size={14} />

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Average Rating: 4.9
              </p>
            </div>

            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {totalReviews}+
              </span>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Verified Reviews: 10+
              </p>
            </div>

          </div>
        </div>

        <div className="w-full h-px bg-gray-200" />

        <Carousel reviews={gartnerReviews} />

        <Carousel reviews={g2Reviews} />

      </div>

      <style>{`*::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}