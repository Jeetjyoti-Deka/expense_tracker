import { Entry } from "../lib/types";
import { capitalizeString, formatMoney } from "../lib/utils";

const EntryBar = ({ entry }: { entry: Entry }) => {
  return (
    <div
      className={`table-bar ${
        entry.type === "income" ? "bg-light-green" : "bg-light-red"
      }`}
    >
      <h3>{capitalizeString(entry.title)}</h3>
      <p>{formatMoney(entry.amount)}</p>
      <p>{capitalizeString(entry.type!)}</p>
    </div>
  );
};
export default EntryBar;
