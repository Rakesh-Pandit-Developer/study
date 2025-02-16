import React from 'react';
import BaseSidebar from '../common/BaseSidebar';

const HTML_SECTIONS = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is HTML?', path: '/html/intro' },
      { title: 'HTML History', path: '/html/history' },
      { title: 'Basic Structure', path: '/html/structure' },
    ]
  },
  {
    title: 'Elements & Attributes',
    items: [
      { title: 'Tags & Elements', path: '/html/elements' },
      { title: 'Global Attributes', path: '/html/attributes' },
    ]
  },
  {
    title: 'Text Formatting',
    items: [
      { title: 'Headings', path: '/html/headings' },
      { title: 'Paragraphs & Line Breaks', path: '/html/paragraphs' },
      { title: 'Text Formatting', path: '/html/text-formatting' },
      { title: 'Lists', path: '/html/lists' },
    ]
  },
  {
    title: 'Links & Navigation',
    items: [
      { title: 'Anchor Tag', path: '/html/anchor' },
      { title: 'Internal & External Links', path: '/html/links' },
      { title: 'Link Targets', path: '/html/link-targets' },
    ]
  },
  {
    title: 'Images & Multimedia',
    items: [
      { title: 'Images', path: '/html/images' },
      { title: 'Video & Audio', path: '/html/media' },
      { title: 'SVG & Canvas', path: '/html/graphics' },
    ]
  },
  {
    title: 'Tables',
    items: [
      { title: 'Basic Tables', path: '/html/tables' },
      { title: 'Table Spanning', path: '/html/table-span' },
    ]
  },
  {
    title: 'Forms & Inputs',
    items: [
      { title: 'Form Basics', path: '/html/forms' },
      { title: 'Input Types', path: '/html/input-types' },
      { title: 'Form Validation', path: '/html/form-validation' },
    ]
  },
  {
    title: 'Semantic HTML',
    items: [
      { title: 'Semantic Elements', path: '/html/semantic' },
      { title: 'Document Structure', path: '/html/document-structure' },
    ]
  },
  {
    title: 'HTML APIs',
    items: [
      { title: 'Geolocation API', path: '/html/geolocation' },
      { title: 'Web Storage', path: '/html/storage' },
      { title: 'Canvas API', path: '/html/canvas' },
    ]
  },
  {
    title: 'Meta Tags & SEO',
    items: [
      { title: 'Meta Tags', path: '/html/meta-tags' },
      { title: 'Open Graph', path: '/html/open-graph' },
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Shadow DOM', path: '/html/shadow-dom' },
      { title: 'Web Components', path: '/html/web-components' },
      { title: 'HTML with JS & CSS', path: '/html/integration' },
    ]
  }
];

const HtmlSidebar = () => {
  return <BaseSidebar sections={HTML_SECTIONS} title="HTML Documentation" />;
};

export default HtmlSidebar;