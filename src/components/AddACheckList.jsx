import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CreateAChecklist } from "../service/API/checklist";

const AddACheckList = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const onSaveHandler = async () => {
    await CreateAChecklist(name);

    setName("");

    navigate(0);
  };

  return (
    <div className="w-full h-28 px-32 py-8 flex">
      <input
        type="text"
        name=""
        id=""
        className="w-full h-full rounded-tl rounded-bl px-5 text-lg"
        placeholder="Tambah checklist"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 text-white rounded-tr rounded-br px-10"
        onClick={onSaveHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default AddACheckList;
