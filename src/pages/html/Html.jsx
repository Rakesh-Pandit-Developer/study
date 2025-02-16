import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import HtmlSidebar from '../../components/htmlSidebar/HtmlSidebar';
import Typography from '@mui/material/Typography';

// Import Introduction section components
import WhatIsHTML from './sections/introduction/WhatIsHTML';
import HTMLHistory from './sections/introduction/HTMLHistory';
import BasicHTMLStructure from './sections/introduction/BasicHTMLStructure';

// Elements & Attributes
import TagsElements from './sections/elements-attributes/TagsElements';
import GlobalAttributes from './sections/elements-attributes/GlobalAttributes';

// Text Formatting
import Headings from './sections/text-formatting/Headings';
import Lists from './sections/text-formatting/Lists';

// Links & Navigation
import AnchorTag from './sections/links-navigation/AnchorTag';
import InternalExternalLinks from './sections/links-navigation/InternalExternalLinks';
import LinkTargets from './sections/links-navigation/LinkTargets';

// Images & Multimedia
import Images from './sections/images-multimedia/Images';
import VideoAudio from './sections/images-multimedia/VideoAudio';
import SVGCanvas from './sections/images-multimedia/SVGCanvas';

// Tables
import BasicTables from './sections/tables/BasicTables';
import TableSpanning from './sections/tables/TableSpanning';

// Forms
import FormBasics from './sections/forms-inputs/FormBasics';
import InputTypes from './sections/forms-inputs/InputTypes';
import FormValidation from './sections/forms-inputs/FormValidation';

// Import new components
import DocumentStructure from './sections/semantic-html/DocumentStructure';
import WebStorage from './sections/html-apis/WebStorage';
import MetaTags from './sections/meta-tags-seo/MetaTags';
import CanvasAPI from './sections/html-apis/CanvasAPI';
import OpenGraph from './sections/meta-tags-seo/OpenGraph';
import ShadowDOM from './sections/advanced-topics/ShadowDOM';
import HTMLWithJSandCSS from './sections/advanced-topics/HTMLWithJSandCSS';
import GeolocationAPI from './sections/html-apis/GeolocationAPI';
import WebComponents from './sections/advanced-topics/WebComponents';

const MainContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>Welcome to HTML</Typography>
    <Typography variant="body1" paragraph>
      HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications.
    </Typography>
    <Typography variant="h6" gutterBottom>Basic HTML</Typography>
    <Typography variant="body1" paragraph>
      HTML elements are the building blocks of HTML pages. They are represented by tags such as &lt;h1&gt;, &lt;p&gt;, &lt;div&gt;, etc.
    </Typography>
  </Box>
);

const Html = () => {
  const location = useLocation();
  const isMainPath = location.pathname === '/html' || location.pathname === '/html/';

  return (
    <Box sx={{ display: 'flex', mt: '64px' }}>
      <HtmlSidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          ml: { xs: 0, md: '20px' },
          width: { xs: '100%', md: `calc(100% - 20px)` },
          minHeight: 'calc(100vh - 64px)', // Add this
        }}
      >
        {isMainPath ? (
          <MainContent />
        ) : (
          <Routes>
            {/* Introduction Section Routes */}
            <Route path="intro" element={<WhatIsHTML />} />
            <Route path="history" element={<HTMLHistory />} />
            <Route path="structure" element={<BasicHTMLStructure />} />
            {/* Add other section routes following the same pattern */}

            {/* Elements & Attributes routes */}
            <Route path="elements" element={<TagsElements />} />
            <Route path="attributes" element={<GlobalAttributes />} />

            {/* Text Formatting routes */}
            <Route path="headings" element={<Headings />} />
            <Route path="lists" element={<Lists />} />
            
            {/* Links & Navigation routes */}
            <Route path="anchor" element={<AnchorTag />} />
            <Route path="links" element={<InternalExternalLinks />} />
            <Route path="link-targets" element={<LinkTargets />} />

            {/* Images & Multimedia routes */}
            <Route path="images" element={<Images />} />
            <Route path="media" element={<VideoAudio />} />
            <Route path="graphics" element={<SVGCanvas />} />

            {/* Tables routes */}
            <Route path="tables" element={<BasicTables />} />
            <Route path="table-span" element={<TableSpanning />} />

            {/* Forms routes */}
            <Route path="forms" element={<FormBasics />} />
            <Route path="input-types" element={<InputTypes />} />
            <Route path="form-validation" element={<FormValidation />} />

            {/* Semantic HTML */}
            <Route path="document-structure" element={<DocumentStructure />} />
            
            {/* HTML APIs */}
            <Route path="storage" element={<WebStorage />} />
            <Route path="canvas" element={<CanvasAPI />} />
            <Route path="geolocation" element={<GeolocationAPI />} />

            {/* Meta Tags & SEO */}
            <Route path="meta-tags" element={<MetaTags />} />
            <Route path="open-graph" element={<OpenGraph />} />

            {/* Advanced Topics */}
            <Route path="shadow-dom" element={<ShadowDOM />} />
            <Route path="integration" element={<HTMLWithJSandCSS />} />
            <Route path="web-components" element={<WebComponents />} />

            {/* Add other section routes as you create them */}
          </Routes>
        )}
      </Box>
    </Box>
  );
};

export default Html;