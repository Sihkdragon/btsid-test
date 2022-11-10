import React from "react";
import { DeleteAChecklist } from "../service/API/checklist";
import { useNavigate } from "react-router-dom";

const DeleteAChecklistComp = ({ id }) => {
  const navigate = useNavigate();
  return (
    <button
      className="p-1 bg-red-500 rounded text-white text-xs ml-2"
      onClick={async () => {
        await DeleteAChecklist(id);

        navigate(0);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteAChecklistComp;
