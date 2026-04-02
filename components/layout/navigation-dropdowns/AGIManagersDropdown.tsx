"use client";

import Image from "next/image";
import Link from "next/link";

import { managers } from "@/lib/Dataset/contentData";
import { agiManagersDropdownData } from "@/lib/Dataset/navigationDropdownData";

type DropdownProps = {
  onClose?: () => void;
};

type ListBlockProps = {
  title: string;
  items: string[];
};

function ListBlock({ title, items }: ListBlockProps) {
  return (
    <div>
      <h4 className="mb-3 text-xs  uppercase text-[#625FD0]">{title}</h4>

      <ul className="space-y-2 text-sm text-gray-700">
        {(items || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function QuickLinks({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <h4 className="mb-3 text-md  uppercase text-[#625FD0]">QUICK LINKS</h4>

      <ul className="space-y-2 text-sm text-gray-700">
        {agiManagersDropdownData.quickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="transition-colors hover:text-[#625FD0]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AGIManagersDropdown({ onClose }: DropdownProps) {
  const handleClose = () => onClose?.();

  return (
    <div className="absolute  left-0 top-full z-50 w-full dropdown-open md:mt-2 lg:left-1/2 lg:ml-74 lg:w-screen lg:max-w-322.5 lg:-translate-x-1/2">
      <div className="max-h-[90vh]   overflow-y-auto p-4 scrollbar-hide sm:p-6 lg:p-8">
        <div className="mb-25 grid   grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="space-y-4  rounded-2xl bg-white p-6 lg:col-span-2">
            {agiManagersDropdownData.sections.map((section) => (
              <div
                key={section.href}
                className="rounded-2xl border border-[#625FD0]/10 p-5 transition-all duration-300 hover:border-[#625FD0]/20 hover:bg-[#625FD0]/5"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h3 className="mb-2 text-lg text-black">{section.title}</h3>

                    <p className="mb-4 text-sm text-gray-600">
                      {section.description}
                    </p>

                    <Link
                      href={section.href}
                      onClick={handleClose}
                      className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2  text-white transition hover:bg-[#625FD0]/90"
                    >
                      Learn More
                    </Link>
                  </div>

                  {section.categories.map((category) => (
                    <ListBlock
                      key={category.title}
                      title={category.title}
                      items={category.items}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 rounded-2xl bg-white p-6">
            <div className="rounded-xl bg-[#625FD0]/5 p-5">
              <h4 className="mb-4 text-md  uppercase text-[#625FD0]">
                TOP RESOURCES
              </h4>

              {managers.map((item) => (
                <Link
                  key={item.id}
                  href={`/resource/${item.id}`}
                  onClick={handleClose}
                  className="group mb-4 block"
                >
                  <div className="flex gap-3">
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={80}
                      height={60}
                      className="rounded-lg object-cover"
                    />

                    <p className="line-clamp-2 text-sm text-gray-700 transition-colors group-hover:text-[#625FD0]">
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <QuickLinks onClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
