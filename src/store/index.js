import { createStore } from "redux";
import { color } from "./../colors";

function detectPrefersColor() {
  let previousColor = localStorage.getItem("themeColor");
  if (previousColor === "dark" || previousColor === "light")
    return previousColor;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}
function setColorMode(theme) {
  localStorage.setItem("themeColor", theme);
  Object.entries(color[theme]).map(r => {
    document.documentElement.style.setProperty(r[0], r[1]);
  });
}

const INITIAL_STATE = {
  themeColor: detectPrefersColor()
};

function themeColor(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      state.themeColor = state.themeColor === "dark" ? "light" : "dark";
      let { themeColor } = state;
      setColorMode(themeColor);
      return { themeColor };
    default:
      setColorMode(state.themeColor);
      return state;
  }
}

const store = createStore(themeColor);

export default store;
