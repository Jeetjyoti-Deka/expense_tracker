import { useState } from "react";
import InfoInput from "./InfoInput";
import { Entry } from "../lib/types";

type InfoFormProps = {
  handleSetEntry: (entry: Entry) => void;
};

const InfoForm = ({ handleSetEntry }: InfoFormProps) => {
  const [entry, setEntry] = useState<Entry>({
    title: "",
    amount: 0,
    type: undefined,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(entry);

    if (entry.amount === 0 || entry.type === undefined) {
      return;
    }

    handleSetEntry(entry);
    setEntry((prev) => ({
      ...prev,
      title: "",
      amount: 0,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <InfoInput inputType="title" entry={entry} setEntry={setEntry} />
          <InfoInput inputType="amount" entry={entry} setEntry={setEntry} />
          <div className="input-wrapper">
            <label htmlFor="" className="input-label">
              <h2>Type</h2>
            </label>
            <select
              required
              className="input-field"
              onChange={(e) =>
                setEntry((prev) => ({
                  ...prev,
                  type: e.target.value === "expense" ? "expense" : "income",
                }))
              }
            >
              <option value={undefined}>Select a Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-btn-wrapper">
            <button className="form-btn">+</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default InfoForm;
