import React from 'react';
import BaseSidebar from '../common/BaseSidebar';

const CSS_SECTIONS = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is CSS?', path: '/css/intro' },
      { title: 'CSS History', path: '/css/history' },
      { title: 'CSS Syntax', path: '/css/syntax' },
    ]
  },
  {
    title: 'Selectors',
    items: [
      { title: 'Basic Selectors', path: '/css/basic-selectors' },
      { title: 'Combinators', path: '/css/combinators' },
      { title: 'Pseudo-Classes', path: '/css/pseudo-classes' },
      { title: 'Pseudo-Elements', path: '/css/pseudo-elements' },
    ]
  },
  {
    title: 'Box Model',
    items: [
      { title: 'Content Box', path: '/css/content-box' },
      { title: 'Padding, Border, Margin', path: '/css/padding-border-margin' },
      { title: 'Box Sizing', path: '/css/box-sizing' },
    ]
  },
  {
    title: 'Layout',
    items: [
      { title: 'Display Property', path: '/css/display' },
      { title: 'Position Property', path: '/css/position' },
      { title: 'Float & Clear', path: '/css/float-clear' },
      { title: 'Z-index', path: '/css/z-index' },
    ]
  },
  {
    title: 'Flexbox',
    items: [
      { title: 'Flex Container', path: '/css/flex-container' },
      { title: 'Flex Items', path: '/css/flex-items' },
      { title: 'Flex Properties', path: '/css/flex-properties' },
    ]
  },
  {
    title: 'Grid',
    items: [
      { title: 'Grid Container', path: '/css/grid-container' },
      { title: 'Grid Items', path: '/css/grid-items' },
      { title: 'Grid Template Areas', path: '/css/grid-template' },
    ]
  },
  {
    title: 'Typography',
    items: [
      { title: 'Font Properties', path: '/css/fonts' },
      { title: 'Text Properties', path: '/css/text' },
      { title: 'Text Decoration', path: '/css/text-decoration' },
    ]
  },
  {
    title: 'Visual Effects',
    items: [
      { title: 'Colors & Backgrounds', path: '/css/colors' },
      { title: 'Borders & Shadows', path: '/css/borders' },
      { title: 'Transforms', path: '/css/transforms' },
    ]
  },
  {
    title: 'Animations',
    items: [
      { title: 'Transitions', path: '/css/transitions' },
      { title: 'Keyframe Animations', path: '/css/animations' },
      { title: 'Animation Properties', path: '/css/animation-props' },
    ]
  },
  {
    title: 'Responsive Design',
    items: [
      { title: 'Media Queries', path: '/css/media-queries' },
      { title: 'Viewport Units', path: '/css/viewport' },
      { title: 'Mobile First', path: '/css/mobile-first' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'CSS Variables', path: '/css/variables' },
      { title: 'CSS Modules', path: '/css/modules' },
      { title: 'Best Practices', path: '/css/best-practices' },
    ]
  }
];

const CssSidebar = () => {
  return <BaseSidebar sections={CSS_SECTIONS} title="CSS Documentation" />;
};

export default CssSidebar;
