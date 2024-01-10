import { Entry } from "../lib/types";
import { formatMoney } from "../lib/utils";

const SummaryBar = ({ entryList }: { entryList: Entry[] }) => {
  let expense = 0;
  let income = 0;

  if (entryList && entryList.length > 0) {
    entryList.forEach((entry) => {
      if (entry.type === "expense") {
        expense +=
          typeof entry.amount === "number"
            ? entry.amount
            : parseInt(entry.amount);
      } else {
        income +=
          typeof entry.amount === "number"
            ? entry.amount
            : parseInt(entry.amount);
      }
    });
  }

  return (
    <div className="table-bar summary-bar">
      <h3>Summary</h3>
      <div className="summary-income-wrapper">
        <p>Income: {formatMoney(income)}</p>
      </div>
      <div className="summary-expense-wrapper">
        <p>Expense: {formatMoney(expense)}</p>
      </div>
    </div>
  );
};
export default SummaryBar;
