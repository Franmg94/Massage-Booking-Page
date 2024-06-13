import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../index.css';  // Ensure this file includes the Tailwind CSS imports

interface CustomCalendarProps {
  onDateChange: (date: Date) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onDateChange }) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const currentMonth = new Date();

  const handleDateChange = (value: Date | Date[]) => {
    if (value instanceof Date) {
      setDate(value);
      onDateChange(value);
    } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
      setDate(value[0]);
      onDateChange(value[0]);
    }
  };

  const tileClassName = ({ date: tileDate, view }: { date: Date, view: string }) => {
    const day = tileDate.getDay();
    if (view === 'month') {
      if (date && tileDate.toDateString() === date.toDateString()) {
        return 'selected-day';
      }
      if (day === 1 || day === 4) {
        return 'available-day';
      }
      return 'unavailable-day';
    }
    return '';
  };

  const tileDisabled = ({date}: {date: Date}) => {
    return date.getMonth() !== currentMonth.getMonth();
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={(value, event) => handleDateChange(value as Date | Date[])}
        value={date}
        tileClassName={tileClassName}
        minDetail='month'
        maxDetail='month'
        tileDisabled={tileDisabled}
        activeStartDate={currentMonth}
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate?.getMonth() !== currentMonth.getMonth() || activeStartDate?.getFullYear() !== currentMonth.getFullYear()) {
            return false;
          }
        }}
      />
    </div>
  );
};

export default CustomCalendar;
