import React, { useState } from "react";
import { getAllItemInAChecklist } from "../service/API/checklistItem";

const GetAllCheckListItem = () => {
  const [listItem, setListItem] = useState([]);
  const [id, setID] = useState();
  return (
    <>
      <div className="flex py-2 items-center  my-5 gap-x-3">
        <h1 className="text-4xl font-bold">Get All CheckList In Item CheckListID:</h1>
        <input
          type="number"
          className="inline h-10 px-2"
          step={1}
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 rounded w-16 h-10 text-white"
          onClick={async () => {
            if (id) {
              getAllItemInAChecklist(id).then((r) => {
                setListItem(r.data);
              });
            }
          }}
        >
          Search
        </button>
      </div>
      <div>
        <ul className="list-disc">
          {listItem.length < 1 ? (
            <h1>Pilih CheckList</h1>
          ) : (
            listItem.map((item, i) => {
              return (
                <li key={i} className="text-slate-800 font-semibold">
                  {item.name}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default GetAllCheckListItem;
