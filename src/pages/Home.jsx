import React, { useEffect, useState } from "react";
import AddACheckList from "../components/AddACheckList";
import DeleteAChecklistComp from "../components/DeleteAChecklistComp";
import GetAllCheckListItem from "../components/GetAllCheckListItem";
import { getAllChecklist } from "../service/API/checklist";

const Home = () => {
  const [checklist, setChecklist] = useState([]);

  useEffect(() => {
    getAllChecklist().then((c) => {
      setChecklist(c.data);
    });
  }, []);

  return (
    <main className="container flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold my-5">Get All CheckList</h1>
      {!checklist ? (
        <h1>Loading</h1>
      ) : (
        <ol className="list-decimal list-outside">
          {checklist.map((item, i) => {
            return (
              <li key={i}>
                <strong>
                  {item.name}

                  <DeleteAChecklistComp id={item.id} />
                </strong>
                {item.items && (
                  <ul className="list-disc  list-inside">
                    {item.items.map((thing, i) => {
                      return (
                        <li key={i} className="flex gap-x-4">
                          <span>{thing.name}</span>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={!thing.itemCompletionStatus}
                            readOnly
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      )}
      <AddACheckList />
      <GetAllCheckListItem />
    </main>
  );
};

export default Home;
