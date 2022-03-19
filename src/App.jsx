import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import HomeScreen from './pages/HomeScreen';
import StylePage from './pages/StylePage';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/styles" element={<StylePage />} />
          <Route index path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
