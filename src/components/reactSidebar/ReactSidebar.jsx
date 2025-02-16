import React from 'react';
import BaseSidebar from '../common/BaseSidebar';

const REACT_SECTIONS = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is React?', path: '/react/intro' },
      { title: 'Why React?', path: '/react/why-react' },
      { title: 'React Versions', path: '/react/versions' },
      { title: 'Setting up React', path: '/react/setup' },
    ]
  },
  {
    title: 'JSX (JavaScript XML)',
    items: [
      { title: 'What is JSX?', path: '/react/jsx' },
      { title: 'JSX Syntax', path: '/react/jsx-syntax' },
      { title: 'JSX Expressions', path: '/react/jsx-expressions' },
      { title: 'JSX Attributes', path: '/react/jsx-attributes' },
    ]
  },
  {
    title: 'Components',
    items: [
      { title: 'Functional Components', path: '/react/functional-components' },
      { title: 'Class Components', path: '/react/class-components' },
      { title: 'Component Lifecycle', path: '/react/lifecycle' },
      { title: 'Component Props', path: '/react/props' },
      { title: 'Component State', path: '/react/state' },
    ]
  },
  {
    title: 'Event Handling',
    items: [
      { title: 'Event Binding', path: '/react/event-binding' },
      { title: 'Handling Events', path: '/react/handling-events' },
      { title: 'Forms and Inputs', path: '/react/forms-inputs' },
    ]
  },
  {
    title: 'React Router',
    items: [
      { title: 'Routing in React', path: '/react/routing' },
      { title: 'Nested Routes', path: '/react/nested-routes' },
      { title: 'Programmatic Navigation', path: '/react/programmatic-navigation' },
    ]
  },
  {
    title: 'State Management',
    items: [
      { title: 'useState Hook', path: '/react/usestate' },
      { title: 'useReducer Hook', path: '/react/usereducer' },
      { title: 'Context API', path: '/react/context-api' },
      { title: 'Redux', path: '/react/redux' },
    ]
  },
  {
    title: 'Hooks',
    items: [
      { title: 'useEffect Hook', path: '/react/useeffect' },
      { title: 'useMemo & useCallback', path: '/react/usememo-usecallback' },
      { title: 'Custom Hooks', path: '/react/custom-hooks' },
    ]
  },
  {
    title: 'Performance Optimization',
    items: [
      { title: 'React.memo', path: '/react/react-memo' },
      { title: 'Lazy Loading', path: '/react/lazy-loading' },
      { title: 'Code Splitting', path: '/react/code-splitting' },
    ]
  },
  {
    title: 'Testing in React',
    items: [
      { title: 'Jest', path: '/react/jest' },
      { title: 'React Testing Library', path: '/react/testing-library' },
      { title: 'Test-driven Development', path: '/react/tdd' },
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Error Boundaries', path: '/react/error-boundaries' },
      { title: 'Higher Order Components (HOCs)', path: '/react/hocs' },
      { title: 'Render Props', path: '/react/render-props' },
      { title: 'React Portals', path: '/react/portals' },
      { title: 'Suspense', path: '/react/suspense' },
    ]
  }
];

const ReactSidebar = () => {
  return <BaseSidebar sections={REACT_SECTIONS} title="React Documentation" />;
};

export default ReactSidebar;
