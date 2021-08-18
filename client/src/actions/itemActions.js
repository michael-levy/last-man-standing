import axios from "axios";
export async function getItems(callback) {
  axios.get("/api/users").then((res) => callback(res.data));
}

export async function addItem(item) {
  axios.post("/api/users", item).then((res) => res);
}

export async function deleteItem(id) {
  axios.delete(`/api/users/${id}`).then((res) => res);
}
