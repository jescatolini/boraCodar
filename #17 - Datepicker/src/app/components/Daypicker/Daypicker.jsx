import DraggableSection from "../DraggableSection/DraggableSection";
import styles from "./styles.module.css";
import Image from "next/image";
import arrowLeft from "../../../../public/chevron-left.svg";
import arrowRight from "../../../../public/chevron-right.svg";
import dropdown from "../../../../public/arrow-drop-down.svg";

const Daypicker = ({
  changePicker,
  calendar,
  selectedDate,
  minimumYearVerification,
  maximumYearVerification,
  changeDate,
}) => {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  function getFirstDayOfWeek(month, year) {
    const date = new Date(Date.UTC(year, month, 1));
    return date.getUTCDay();
  }

  const actualYearList = calendar.find(
    (elem) => elem.year === selectedDate.year
  );
  const beforeActualYearList = calendar.find(
    (elem) => elem.year - 1 === selectedDate.year - 1
  );
  const month = actualYearList.months[selectedDate.month].name;
  const year = actualYearList.year;

  const firstDay = getFirstDayOfWeek(selectedDate.month, selectedDate.year);

  const getFirstRow = () => {
    const row = [];

    const lastMonthSize = firstDay;
    const actualMonthFirstRowSize = 7 - firstDay;
    let lastMonthDays =
      beforeActualYearList.months[
        selectedDate.month === 0 ? 11 : selectedDate.month - 1
      ].days - firstDay;
    //last month
    for (let i = 0; i < lastMonthSize; i++) {
      lastMonthDays++;
      row.push({ type: "last", day: lastMonthDays });
    }

    //first row actual month
    for (let i = 0; i < actualMonthFirstRowSize; i++) {
      row.push({ type: "actual", day: i + 1 });
    }

    return row;
  };

  const getDaysMatrixAfterFirstRow = () => {
    let rows,
      columns = 7;
    const daysOfMonthOfActualYear =
      actualYearList.months[selectedDate.month].days;
    const startOfSecondLine = 7 - firstDay + 1;

    const daysFromSecondLine = daysOfMonthOfActualYear - (7 - firstDay);
    rows = Math.ceil(daysFromSecondLine / 7);
    let count = startOfSecondLine;
    let type = "actual";

    const daysMatrixRows = [getFirstRow()];
    let daysMatrixColumns = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        daysMatrixColumns.push({ type, day: count });
        if (count >= daysOfMonthOfActualYear) {
          count = 0;
          type = "next";
        }
        count++;
      }
      daysMatrixRows.push(daysMatrixColumns);
      daysMatrixColumns = [];
    }

    return daysMatrixRows;
  };

  const matrixDays = getDaysMatrixAfterFirstRow();
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <span
          onClick={() => {
            const month = selectedDate.month - 1;
            if (month === -1) minimumYearVerification(11);
            else minimumYearVerification(selectedDate.month - 1);
          }}
        >
          <Image
            src={arrowLeft}
            alt="Arrow left"
            width={24}
            height={24}
            priority
          />
        </span>
        <div className={styles.calendarMonthYear} onClick={changePicker}>
          <>
            {month} {year}
          </>
          <Image
            src={dropdown}
            alt="Dropdown icon"
            width={24}
            height={24}
            priority
          />
        </div>
        <span
          onClick={() => {
            const month = selectedDate.month + 1;
            if (month === 12) maximumYearVerification(12);
            else maximumYearVerification(selectedDate.month + 1);
          }}
        >
          <Image
            src={arrowRight}
            alt="Arrow right"
            width={24}
            height={24}
            priority
          />
        </span>
      </div>
      <table className={styles.calendar}>
        <thead>
          <tr className={styles.weekDays}>
            {weekDays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <DraggableSection matrixDays={matrixDays} changeDate={changeDate} />
        </tbody>
      </table>
    </div>
  );
};

export default Daypicker;
