import { api } from "./api";

async function findCategories() {
  const res = await api.get("/items/categories");

  return res.data;
}

async function findItemsByCategoryId(id) {
  const res = await api.get(`/items/categories/${id}`);

  return res.data;
}

export const itemsApi = { findCategories, findItemsByCategoryId };
