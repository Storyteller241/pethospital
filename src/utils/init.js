import store from "@/store";

if (localStorage.getItem("amnn")) {
  store.commit("login/setUser", JSON.parse(localStorage.getItem("amnn")))
}