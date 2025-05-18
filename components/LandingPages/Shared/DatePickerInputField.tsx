"use client";

import { useMemo, useState } from "react";

interface DatePickerInputFieldProps {
  value: string; // Expects ISO format (2025-04-25T00:00:00.000Z)
  onChange: (value: string) => void; // Will return ISO format
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const DatePickerInputField = ({
  value,
  onChange,
  name,
  id,
  placeholder = "Select date",
  label,
  required = false,
}: DatePickerInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // Convert ISO date to YYYY-MM-DD format for input[type="date"]
  const formattedDate = useMemo(() => {
    if (!value) return "";
    try {
      const date = new Date(value);
      if (isNaN(date.getTime())) return "";
      return date.toISOString().split("T")[0];
    } catch {
      return "";
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if (!dateValue) {
      onChange("");
      return;
    }
    // Convert back to ISO format with timezone
    const isoDate = new Date(dateValue).toISOString();
    onChange(isoDate);
  };

  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CalendarIcon />
        </div> */}
        <input
          id={id}
          type=""
          className={`${
            isFocused ? "border-primary" : "border-gray-700"
          } block w-full rounded-md border  bg-gray-900 p-2.5 py-2.5 pl-5 pr-15 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black`}
          placeholder={placeholder}
          name={name}
          value={formattedDate}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

const CalendarIcon = () => (
  <svg
    className="w-4 h-4 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

export default DatePickerInputField;
