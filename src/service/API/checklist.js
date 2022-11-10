import { getHeadrsWithToken } from "../../resource/headersAPI";
import { CHECKLIST_URL } from "../../resource/urls";

export const getAllChecklist = async () => {
  const response = await fetch(CHECKLIST_URL, {
    method: "GET",
    headers: getHeadrsWithToken(),
  });

  const result = await response.json();

  if (response.status === 200) {
    return result;
  }
};

export const CreateAChecklist = async (name) => {
  const response = await fetch(CHECKLIST_URL, {
    method: "POST",
    headers: getHeadrsWithToken(),
    body: JSON.stringify({ name }),
  });
  const result = await response.json();

  if (result.statusCode === 2000) {
    alert("Checklist Berhasl Ditambahkan");
  } else {
    alert(result.message);
  }
};

export const DeleteAChecklist = async (id) => {
  const response = await fetch(CHECKLIST_URL + "/" + id, {
    method: "DELETE",
    headers: getHeadrsWithToken(),
  });
  const result = await response.json();

  if (result.statusCode === 2000) {
    alert("Checklist Berhasil Dihapus");
  } else {
    alert(result.message);
  }
};
