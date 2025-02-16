import { Routes, Route } from 'react-router-dom';
import Css from '../pages/css/Css';
// CSS Introduction
import WhatIsCSS from '../pages/css/introduction/WhatIsCSS';
import CSSHistory from '../pages/css/introduction/CSSHistory';
import CSSSyntax from '../pages/css/introduction/CSSSyntax';
// CSS Box Model
import ContentBox from '../pages/css/box-model/ContentBox';
import PaddingBorderMargin from '../pages/css/box-model/PaddingBorderMargin';
import BoxSizing from '../pages/css/box-model/BoxSizing';
// ... import other CSS components ...

const AppRoutes = () => {
  return (
    <Routes>
      // ...existing routes...
      <Route path="/css" element={<Css />}>
        <Route path="intro" element={<WhatIsCSS />} />
        <Route path="history" element={<CSSHistory />} />
        <Route path="syntax" element={<CSSSyntax />} />
        <Route path="content-box" element={<ContentBox />} />
        <Route path="padding-border-margin" element={<PaddingBorderMargin />} />
        <Route path="box-sizing" element={<BoxSizing />} />
        {/* Add other CSS routes */}
      </Route>
      
    </Routes>
  );
};

export default AppRoutes;
