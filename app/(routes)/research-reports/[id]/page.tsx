import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Link as LinkIcon,
} from "lucide-react";

import {
  featuredReport,
  getAllReportIds,
  getReportById,
  reportsList,
} from "@/lib/Dataset/reportData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <p className="text-[#625FD0] text-sm font-mono uppercase">404</p>
        <h1 className="text-black text-4xl ">Report not found</h1>
        <p className="text-gray-600">
          This report does not exist or may have moved.
        </p>
        <Link
          href="/research-reports"
          className="inline-block mt-4 border border-gray-300 text-gray-700 hover:text-[#625FD0] hover:border-[#625FD0] px-5 py-2.5 rounded-lg text-sm transition"
        >
          Back to Reports
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllReportIds().map((id) => ({ id }));
}

export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const report = getReportById(id);

  if (!report) return <NotFound />;

  const allReports = [featuredReport, ...reportsList];

  const related = allReports
    .filter((item) => item.id !== report.id)
    .slice(0, 3);

  return (
    <div className="bg-white text-black min-h-screen  py-12">
      {/* HERO */}
      <section className="bg-white ">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/research-reports" className="hover:text-[#625FD0]">
              Reports
            </Link>
            <span>{">"}</span>
            <span className="text-[#625FD0]">{report.category}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">
            {/* Left */}
            <div>
              <span className="text-xs uppercase text-[#625FD0]  bg-[#625FD0]/10 px-3 py-1 rounded-full">
                {report.category}
              </span>

              <h1 className="text-3xl sm:text-4xl  mt-4 mb-4">
                {report.title}
              </h1>

              <p className="text-gray-600 italic mb-4">{report.tagline}</p>

              <p className="text-gray-700 mb-6">{report.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Clock size={16} />
                <span>{report.readTime}</span>
                <span>•</span>
                <span>{report.publishedDate}</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src={report.image}
                alt={report.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 ">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {report.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl ">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 grid lg:grid-cols-[1fr_300px] gap-12">
        {/* Article */}
        <article>
          <p className="border-l-4 border-[#625FD0] pl-4 text-gray-700 italic mb-10">
            {report.intro}
          </p>

          {report.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl  mb-2">{section.heading}</h2>
              <p className="text-gray-600">{section.body}</p>
            </div>
          ))}

          {/* Quote */}
          <blockquote className="bg-[#625FD0]/5 border border-[#625FD0]/20 p-6 rounded-xl mt-10">
            <p className="text-lg font-medium mb-4">{report.quote.quote}</p>
            <p className="text-sm text-gray-500">— {report.quote.author}</p>
          </blockquote>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Key Takeaways */}
          <div className="bg-gray-50 p-5 rounded-xl border">
            <h3 className=" mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              {report.keyTakeaways.map((t, i) => (
                <li key={i} className="text-sm text-gray-600">
                  • {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Share */}
          <div className="p-5 border rounded-xl">
            <h3 className=" mb-4 flex items-center gap-2">
              <Share2 size={16} /> Share
            </h3>

            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#625FD0]">
                <Linkedin size={16} /> LinkedIn
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#625FD0]">
                <Twitter size={16} /> Twitter
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#625FD0]">
                <LinkIcon size={16} /> Copy Link
              </button>
            </div>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-white  py-16 text-center">
        <h2 className="text-3xl  mb-4">{report.ctaHeading}</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">{report.ctaBody}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/get-in-touch"
            className="bg-[#625FD0] text-white px-6 py-3 rounded-lg hover:bg-[#4f4ca8]"
          >
            Book a Demo
          </Link>

          <Link
            href="/research-reports"
            className="border-2 border-gray-300 px-6 py-3  rounded-lg text-[#625FD0] hover:text-[#625FD0] hover:border-[#625FD0]"
          >
            Reports
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <h2 className="text-2xl  mb-8">Related Reports</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/research-reports/${item.id}`}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  {item.publishedDate}
                </p>
                <h3 className=" hover:text-[#625FD0]">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
