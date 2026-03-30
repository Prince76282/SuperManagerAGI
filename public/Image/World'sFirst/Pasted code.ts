// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Building2,
//   DollarSign,
//   Cog,
//   TrendingUp,
//   Megaphone,
//   Users,
//   Truck,
//   AlertTriangle,
//   Package,
//   LineChart,
//   Calendar,
//   Bug,
//   GitBranch,
//   Target,
//   SlidersVertical,
//   PieChart,
//   Map,
//   Network,
//   Database,
//   Globe,
//   Zap,
//   Shield,
//   FileText,
//   TrendingDown,
//   Minus,
//   CheckCircle2,
//   ChevronRight,
//   type LucideIcon,
// } from "lucide-react";
// import {
//   getIntelligenceItem,
//   getIntelligenceSectionForItem,
//   intelligenceItems,
//   type IntelligenceIconKey,
//   type IntelligenceStat,
// } from "@/lib/Dataset/Intelligencedata";

// const iconMap: Record<IntelligenceIconKey, LucideIcon> = {
//   Building2,
//   DollarSign,
//   Cog,
//   TrendingUp,
//   Megaphone,
//   Users,
//   Truck,
//   AlertTriangle,
//   Package,
//   LineChart,
//   Calendar,
//   Bug,
//   GitBranch,
//   Target,
//   Sliders: SlidersVertical,
//   PieChart,
//   Map,
//   Network,
//   Database,
//   Globe,
//   Zap,
//   Shield,
//   FileText,
// };

// function MiniChart({
//   data,
//   color,
// }: {
//   data: number[];
//   color: string;
// }) {
//   const max = Math.max(...data);
//   const min = Math.min(...data);
//   const range = max - min || 1;
//   const width = 320;
//   const height = 84;

//   const points = data.map((value, index) => {
//     const x = (index / Math.max(data.length - 1, 1)) * width;
//     const y = height - ((value - min) / range) * height;
//     return `${x},${y}`;
//   });

//   const areaPath = `M${points[0]} ${points.join(" L")} L${width},${height} L0,${height} Z`;

//   return (
//     <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
//       <defs>
//         <linearGradient
//           id={`chart-${color.replace("#", "")}`}
//           x1="0"
//           y1="0"
//           x2="0"
//           y2="1"
//         >
//           <stop offset="0%" stopColor={color} stopOpacity="0.22" />
//           <stop offset="100%" stopColor={color} stopOpacity="0.02" />
//         </linearGradient>
//       </defs>
//       <path d={areaPath} fill={`url(#chart-${color.replace("#", "")})`} />
//       <polyline
//         points={points.join(" ")}
//         fill="none"
//         stroke={color}
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function TrendBadge({ stat }: { stat: IntelligenceStat }) {
//   const trend =
//     stat.trend ??
//     (stat.change?.startsWith("+")
//       ? "up"
//       : stat.change?.startsWith("-")
//         ? "down"
//         : "neutral");

//   if (!stat.change) {
//     return null;
//   }

//   return (
//     <span
//       className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs  ${
//         trend === "up"
//           ? "bg-emerald-50 text-emerald-600"
//           : trend === "down"
//             ? "bg-rose-50 text-rose-600"
//             : "bg-slate-100 text-slate-500"
//       }`}
//     >
//       {trend === "up" ? (
//         <TrendingUp size={12} />
//       ) : trend === "down" ? (
//         <TrendingDown size={12} />
//       ) : (
//         <Minus size={12} />
//       )}
//       {stat.change}
//     </span>
//   );
// }

// export default function IntelligenceDetailPage() {
//   const { id } = useParams<{ id: string }>();
//   const item = getIntelligenceItem(id);

//   if (!item) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-500">
//         Intelligence module not found.
//       </div>
//     );
//   }

//   const section = getIntelligenceSectionForItem(item);
//   const Icon = iconMap[item.icon];
//   const currentIndex = intelligenceItems.findIndex((entry) => entry.id === item.id);
//   const prev = intelligenceItems[currentIndex - 1];
//   const next = intelligenceItems[currentIndex + 1];
//   const related = intelligenceItems
//     .filter((entry) => entry.sectionId === item.sectionId && entry.id !== item.id)
//     .slice(0, 4);

//   return (
//     <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)]">
//       <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
//         <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
//           <Link
//             href="/intelligence"
//             className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to Intelligence
//           </Link>

//           <div className="hidden items-center gap-2 text-xs text-slate-400 md:flex">
//             <span>{section.title}</span>
//             <ChevronRight size={12} />
//             <span className=" text-slate-700">{item.title}</span>
//           </div>

//           <div className="flex items-center gap-3 text-sm">
//             {prev ? (
//               <Link
//                 href={prev.href}
//                 className="inline-flex items-center gap-1 text-slate-500 transition hover:text-slate-900"
//               >
//                 <ArrowLeft size={13} />
//                 Prev
//               </Link>
//             ) : null}
//             {next ? (
//               <Link
//                 href={next.href}
//                 className="inline-flex items-center gap-1 font-medium transition"
//                 style={{ color: section.accent }}
//               >
//                 Next
//                 <ArrowRight size={13} />
//               </Link>
//             ) : null}
//           </div>
//         </div>
//       </header>

//       <section className="mx-auto max-w-[1200px] px-6 pb-8 pt-12 sm:px-8 lg:px-10">
//         <div
//           className="overflow-hidden rounded-[2rem] p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12"
//           style={{
//             background: `linear-gradient(135deg, ${section.accent} 0%, ${section.accentAlt} 100%)`,
//           }}
//         >
//           <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
//             <div>
//               <p className="mb-3 text-xs  uppercase tracking-[0.3em] text-white/70">
//                 {section.eyebrow}
//               </p>
//               <div className="mb-5 inline-flex rounded-2xl bg-white/15 p-3 backdrop-blur">
//                 <Icon size={26} />
//               </div>
//               <h1 className="max-w-3xl text-4xl  tracking-tight sm:text-5xl">
//                 {item.title}
//               </h1>
//               <p className="mt-3 text-base text-white/80">{item.subtitle}</p>
//               <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
//                 {item.longDescription}
//               </p>
//             </div>

//             <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
//               <p className="text-xs  uppercase tracking-[0.25em] text-white/65">
//                 Module Focus
//               </p>
//               <p className="mt-3 text-2xl  text-white">{item.tagline}</p>
//               <p className="mt-4 text-sm leading-7 text-white/80">
//                 {item.description}
//               </p>
//               <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
//                 {item.stats.map((stat) => (
//                   <div
//                     key={stat.label}
//                     className="rounded-2xl border border-white/15 bg-white/10 p-4"
//                   >
//                     <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
//                       {stat.label}
//                     </p>
//                     <p className="mt-2 text-2xl  text-white">
//                       {stat.value}
//                     </p>
//                     <div className="mt-3">
//                       <TrendBadge stat={stat} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto grid max-w-[1200px] gap-6 px-6 pb-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
//         <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
//           <p
//             className="mb-3 text-xs  uppercase tracking-[0.25em]"
//             style={{ color: section.accent }}
//           >
//             What&apos;s included
//           </p>
//           <h2 className="text-2xl  text-slate-950">
//             Core capabilities inside this module
//           </h2>
//           <ul className="mt-6 space-y-4">
//             {item.highlights.map((highlight) => (
//               <li key={highlight} className="flex items-start gap-3">
//                 <CheckCircle2
//                   size={16}
//                   className="mt-1 shrink-0"
//                   style={{ color: section.accent }}
//                 />
//                 <span className="text-sm leading-7 text-slate-600">
//                   {highlight}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
//           <div className="mb-5 flex items-center justify-between gap-4">
//             <div>
//               <p
//                 className="text-xs  uppercase tracking-[0.25em]"

//               >
//                 Performance trend
//               </p>
//               <h2 className="mt-2 text-2xl  text-slate-950">
//                 Latest {item.chartData.length} checkpoints
//               </h2>
//             </div>
//             <div
//               className="rounded-full px-3 py-1 text-xs "

//             >
//               Connected view
//             </div>
//           </div>

//           <div className="h-28">
//             <MiniChart data={item.chartData} />
//           </div>

//           <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
//             {item.chartData.map((value, index) => (
//               <div
//                 key={`${item.id}-${index}`}
//                 className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-center"
//               >
//                 <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
//                   P{index + 1}
//                 </p>
//                 <p className="mt-1 text-sm  text-slate-900">{value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-8 lg:px-10">
//         <div className="mb-6 flex items-end justify-between gap-4">
//           <div>
//             <p
//               className="mb-2 text-xs  uppercase tracking-[0.25em]"
//               style={{ color: section.accent }}
//             >
//               Related modules
//             </p>
//             <h2 className="text-2xl  text-slate-950">
//               More from {section.title}
//             </h2>
//           </div>
//           <Link
//             href="/intelligence"
//             className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
//           >
//             Explore all modules
//           </Link>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//           {related.map((relatedItem) => {
//             const RelatedIcon = iconMap[relatedItem.icon];

//             return (
//               <Link
//                 key={relatedItem.id}
//                 href={relatedItem.href}
//                 className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
//               >
//                 <div
//                   className="mb-4 inline-flex rounded-2xl p-3 text-white"
//                   style={{
//                     background: `linear-gradient(135deg, ${section.accent} 0%, ${section.accentAlt} 100%)`,
//                   }}
//                 >
//                   <RelatedIcon size={18} />
//                 </div>
//                 <h3 className="text-lg  text-slate-950">
//                   {relatedItem.title}
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   {relatedItem.description}
//                 </p>
//                 <p
//                   className="mt-4 text-xs  uppercase tracking-[0.22em]"
//                   style={{ color: section.accent }}
//                 >
//                   {relatedItem.subtitle}
//                 </p>
//               </Link>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// }
