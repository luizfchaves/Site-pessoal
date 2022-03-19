import { createStore } from 'redux';
import { color } from '../colors';

function detectPrefersColor() {
  const previousColor = localStorage.getItem('themeColor');
  if (previousColor === 'dark' || previousColor === 'light') { return previousColor; }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}
function setColorMode(theme) {
  // let funnyColors = localStorage.getItem("funnyColors");
  // if (funnyColors) {
  //   try {
  //     funnyColors = JSON.parse(funnyColors);
  //     Object.entries(funnyColors).map(r => {
  //       document.documentElement.style.setProperty(r[0], r[1]);
  //     });
  //   } catch (r) {
  //     localStorage.removeItem("funnyColors");
  //     setColorMode(setColorMode(detectPrefersColor));
  //   }
  //   return;
  // }
  localStorage.setItem('themeColor', theme);
  document
    .querySelector('meta[name=theme-color]')
    .setAttribute('content', color[theme]['--background-color']);
  // eslint-disable-next-line array-callback-return
  Object.entries(color[theme]).map((r) => {
    document.documentElement.style.setProperty(r[0], r[1]);
  });
}

const INITIAL_STATE = {
  themeColor: detectPrefersColor(),
};

// TODO(Luiz) Consertar essa função e remover esses eslint-disables
// eslint-disable-next-line default-param-last
function themeColor(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      // eslint-disable-next-line no-param-reassign
      state.themeColor = state.themeColor === 'dark' ? 'light' : 'dark';
      // eslint-disable-next-line
      const { themeColor } = state;
      setColorMode(themeColor);
      return { themeColor };
    default:
      setColorMode(state.themeColor);
      return state;
  }
}

const store = createStore(themeColor);

export default store;
