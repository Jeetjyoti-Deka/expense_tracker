import { Entry } from "../lib/types";
import EntryBar from "./EntryBar";
import Reset from "./Reset";
import SummaryBar from "./SummaryBar";

const InfoDisplay = ({
  entryList,
  resetEntryList,
}: {
  entryList: Entry[];
  resetEntryList: () => void;
}) => {
  return (
    <div className="info-wrapper">
      <div className="info">
        {entryList.length > 0 ? (
          <div className="entry-list">
            {entryList.map((entry, index) => (
              <>
                <EntryBar key={index} entry={entry} />
                {/* <div className="separator" aria-hidden /> */}
              </>
            ))}
            <SummaryBar entryList={entryList} />
            <Reset resetEntryList={resetEntryList} />
          </div>
        ) : (
          <h3>No Records Found...</h3>
        )}
      </div>
    </div>
  );
};
export default InfoDisplay;
