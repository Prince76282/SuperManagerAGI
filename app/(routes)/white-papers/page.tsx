"use client";

import { useState } from "react";
import { ChevronRight, BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { WHITEPAPERS } from "@/lib/Dataset/whitepapersData";

const PRIMARY = "#625FD0";

export default function WhitepapersPage() {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = WHITEPAPERS.filter((w) =>
    w.title.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl lg:text-5xl mb-12">Whitepapers and Research</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((paper, i) => {
            const Icon = paper.icon;

            return (
              <Link
                key={paper.id}
                href={`/white-papers/${paper.id}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="border rounded-xl p-6 flex flex-col gap-4 bg-white transition"
                style={{
                  borderColor: hovered === i ? PRIMARY : `${PRIMARY}40`,
                  boxShadow: hovered === i ? `4px 4px 0px ${PRIMARY}` : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor:
                          hovered === i ? PRIMARY : `${PRIMARY}10`,
                        color: hovered === i ? "white" : PRIMARY,
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: PRIMARY }}
                    >
                      {paper.tag}
                    </span>
                  </div>

                  <ChevronRight size={16} />
                </div>

                <h3 className="text-lg font-medium">{paper.title}</h3>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {paper.intro}
                </p>

                <div
                  className="flex items-center gap-1 text-xs pt-2 border-t"
                  style={{ borderColor: `${PRIMARY}20`, color: PRIMARY }}
                >
                  <BookOpen size={12} />
                  Whitepaper
                </div>
              </Link>
            );
          })}
        </div>

        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="flex items-center gap-2 px-6 py-3 border rounded-lg"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              Show More <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
