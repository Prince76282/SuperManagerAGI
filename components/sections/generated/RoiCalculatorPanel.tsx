"use client";

import { useState } from "react";

function parseNumericInput(value: string, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

type FieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
};

function Field({ label, value, onChange, suffix }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <div className="flex items-center rounded-2xl border border-[#625FD0]/20 bg-white px-4 py-3 shadow-sm">
        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) =>
            onChange(parseNumericInput(e.target.value, value))
          }
          className="w-full bg-transparent text-base text-gray-900 outline-none"
        />

        {suffix && (
          <span className="ml-3 text-sm font-medium text-[#625FD0]/70">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

export default function RoiCalculatorPanel() {
  const [managerCount, setManagerCount] = useState(20);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(8);
  const [blendedHourlyRate, setBlendedHourlyRate] = useState(55);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [platformCost, setPlatformCost] = useState(120000);

  const annualHoursRecovered = managerCount * hoursSavedPerWeek * weeksPerYear;
  const annualValueRecovered = annualHoursRecovered * blendedHourlyRate;
  const netImpact = annualValueRecovered - platformCost;
  const roiPercentage =
    platformCost > 0 ? (netImpact / platformCost) * 100 : 0;
  const paybackMonths =
    annualValueRecovered > 0 ? (platformCost / annualValueRecovered) * 12 : 0;

  return (
    <section className="rounded-[32px] border border-[#625FD0]/20 bg-gradient-to-br from-[#625FD0]/10 via-white to-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#625FD0]">
            ROI Calculator
          </p>

          <h2 className="mt-3 text-3xl text-gray-950 sm:text-4xl">
            Estimate the return from autonomous management
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Model the operational upside from reducing manual work and improving efficiency.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Field label="Managers impacted" value={managerCount} onChange={setManagerCount} suffix="people" />
            <Field label="Hours saved/week" value={hoursSavedPerWeek} onChange={setHoursSavedPerWeek} suffix="hrs" />
            <Field label="Hourly cost" value={blendedHourlyRate} onChange={setBlendedHourlyRate} suffix="USD" />
            <Field label="Weeks/year" value={weeksPerYear} onChange={setWeeksPerYear} suffix="weeks" />
            <Field label="Platform cost" value={platformCost} onChange={setPlatformCost} suffix="USD" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-[28px] border border-[#625FD0]/20 bg-white p-6 shadow-lg shadow-[#625FD0]/20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#625FD0]">
            Estimated Impact
          </p>

          <div className="mt-6 grid gap-4">
            
            {/* NET */}
            <div className="rounded-2xl bg-[#625FD0] p-5 text-white">
              <p className="text-sm text-white/80">Net annual impact</p>
              <p className="mt-2 text-3xl">{formatCurrency(netImpact)}</p>
            </div>

            {/* VALUE */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#625FD0]/10 p-5">
                <p className="text-sm text-gray-500">Recovered value</p>
                <p className="mt-2 text-2xl text-gray-950">
                  {formatCurrency(annualValueRecovered)}
                </p>
              </div>

              <div className="rounded-2xl bg-[#625FD0]/10 p-5">
                <p className="text-sm text-gray-500">Hours returned</p>
                <p className="mt-2 text-2xl text-gray-950">
                  {annualHoursRecovered.toLocaleString()}
                </p>
              </div>
            </div>

            {/* ROI */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#625FD0]/20 p-5">
                <p className="text-sm text-gray-500">ROI</p>
                <p className="mt-2 text-2xl text-gray-950">
                  {roiPercentage.toFixed(0)}%
                </p>
              </div>

              <div className="rounded-2xl border border-[#625FD0]/20 p-5">
                <p className="text-sm text-gray-500">Payback</p>
                <p className="mt-2 text-2xl text-gray-950">
                  {paybackMonths.toFixed(1)} months
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Directional estimate. For deeper analysis include revenue lift & efficiency gains.
          </p>
        </div>
      </div>
    </section>
  );
}