import { useEffect, useState } from "react";
import InfoDisplay from "./components/InfoDisplay";
import InfoForm from "./components/InfoForm";
import { Entry } from "./lib/types";

function App() {
  const [entryList, setEntryList] = useState<Entry[]>([]);

  useEffect(() => {
    const entryList = localStorage.getItem("entryList");

    if (entryList) {
      setEntryList(JSON.parse(entryList));
    }
  }, []);

  const handleSetEntry = (entry: Entry) => {
    setEntryList((prev) => [...prev, entry]);
    localStorage.setItem("entryList", JSON.stringify([...entryList, entry]));
  };

  const resetEntryList = () => {
    setEntryList([]);
    localStorage.setItem("entryList", JSON.stringify([]));
  };

  return (
    <>
      <h1 className="heading">Expense Tracker</h1>
      <InfoDisplay entryList={entryList} resetEntryList={resetEntryList} />
      <InfoForm handleSetEntry={handleSetEntry} />
    </>
  );
}

export default App;
