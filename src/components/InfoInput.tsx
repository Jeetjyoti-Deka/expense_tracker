import { Entry } from "../lib/types";
import { capitalizeString } from "../lib/utils";

type InfoInputProps = {
  entry: Entry;
  setEntry: React.Dispatch<React.SetStateAction<Entry>>;
  inputType: "amount" | "title";
};

const InfoInput = ({ entry, setEntry, inputType }: InfoInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="" className="input-label">
        <h2>{capitalizeString(inputType)}</h2>
      </label>
      <input
        required
        className="input-field"
        type={inputType === "amount" ? "number" : "text"}
        value={entry[inputType]}
        onChange={(e) =>
          setEntry((prev) => ({ ...prev, [inputType]: e.target.value }))
        }
      />
    </div>
  );
};
export default InfoInput;
