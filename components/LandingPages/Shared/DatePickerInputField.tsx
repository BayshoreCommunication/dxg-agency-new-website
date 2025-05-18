// components/DatePickerComponent.tsx
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInputField() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full ">
      <div className="flex justify-between items-center  w-full appearance-none rounded-md border border-gray-700 bg-gray-900 p-2.5 py-3 pl-5  text-lg text-gray-300 focus:border-black focus:ring-black">
        <>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Date"
            className="w-full outline-none bg-gray-900 text-white min-w-96"
            calendarClassName="text-gray-100 rounded-lg shadow-lg border border-gray-700 !p-4"
            popperClassName="z-50"
            weekDayClassName={() => "text-gray-400"}
          />

          <style jsx global>{`
            .react-datepicker__header {
              background-color: transparent !important;
            }
          `}</style>
        </>

        <CalendarIcon className="w-5 h-5 text-gray-500 ml-2" />
      </div>
    </div>
  );
}
