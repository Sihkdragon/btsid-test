import { getHeadrsWithToken } from "../../resource/headersAPI";
import { CHECKLIST_URL } from "../../resource/urls";

export const getAllItemInAChecklist = async (id) => {
  const response = await fetch(CHECKLIST_URL + "/" + id + "/item", {
    method: "GET",
    headers: getHeadrsWithToken(),
  });

  const result = await response.json();

  if (response.status === 200) {
    return result;
  }
};

export const getAnItemInAChecklist = async (chklistID, ItemID) => {
  const response = await fetch(CHECKLIST_URL + "/" + chklistID + "/item/" + ItemID, {
    method: "GET",
    headers: getHeadrsWithToken(),
  });

  const result = await response.json();

  if (response.status === 200) {
    return result;
  }
};

export const CreateAnItemInChecklist = async (chklistID, itemName) => {
  const response = await fetch(CHECKLIST_URL + "/" + chklistID + "/item", {
    method: "POST",
    headers: getHeadrsWithToken(),
    body: JSON.stringify({ itemName }),
  });
  const result = await response.json();

  if (result.statusCode === 2000) {
    alert("Item Berhasl Ditambahkan");
  } else {
    alert(result.message);
  }
};

export const UpdateItemStatus = async (chklistID, ItemID) => {
  const response = await fetch(CHECKLIST_URL + "/" + chklistID + "/item/" + ItemID, {
    method: "PUT",
    headers: getHeadrsWithToken(),
  });

  const result = await response.json();

  alert(result.message);
};

export const DeleteItemStatus = async (chklistID, ItemID) => {
  const response = await fetch(CHECKLIST_URL + "/" + chklistID + "/item/" + ItemID, {
    method: "DELETE",
    headers: getHeadrsWithToken(),
  });

  const result = await response.json();

  alert(result.message);
};

export const RenameItem = async (chklistID, ItemID, itemName) => {
  const response = await fetch(CHECKLIST_URL + "/" + chklistID + "/item/rename/" + ItemID, {
    method: "PUT",
    headers: getHeadrsWithToken(),
    body: JSON.stringify({ itemName }),
  });

  const result = await response.json();

  alert(result.message);
};
