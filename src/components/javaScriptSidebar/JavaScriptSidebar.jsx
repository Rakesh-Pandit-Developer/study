import React from 'react';
import BaseSidebar from '../common/BaseSidebar';

const JAVASCRIPT_SECTIONS = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is JavaScript?', path: '/javascript/intro' },
      { title: 'History of JavaScript', path: '/javascript/history' },
      { title: 'Basic Syntax', path: '/javascript/syntax' },
    ]
  },
  {
    title: 'Variables & Data Types',
    items: [
      { title: 'Declaring Variables', path: '/javascript/variables' },
      { title: 'Primitive Data Types', path: '/javascript/primitive-types' },
      { title: 'Reference Data Types', path: '/javascript/reference-types' },
    ]
  },
  {
    title: 'Operators',
    items: [
      { title: 'Arithmetic Operators', path: '/javascript/arithmetic-operators' },
      { title: 'Comparison Operators', path: '/javascript/comparison-operators' },
      { title: 'Logical Operators', path: '/javascript/logical-operators' },
      { title: 'Assignment Operators', path: '/javascript/assignment-operators' },
    ]
  },
  {
    title: 'Control Flow',
    items: [
      { title: 'If-Else Statements', path: '/javascript/if-else' },
      { title: 'Switch Statement', path: '/javascript/switch' },
      { title: 'Loops', path: '/javascript/loops' },
    ]
  },
  {
    title: 'Functions',
    items: [
      { title: 'Function Declaration', path: '/javascript/function-declaration' },
      { title: 'Function Expressions', path: '/javascript/function-expressions' },
      { title: 'Arrow Functions', path: '/javascript/arrow-functions' },
      { title: 'Callback Functions', path: '/javascript/callback-functions' },
    ]
  },
  {
    title: 'Objects & Arrays',
    items: [
      { title: 'Objects', path: '/javascript/objects' },
      { title: 'Arrays', path: '/javascript/arrays' },
      { title: 'Array Methods', path: '/javascript/array-methods' },
    ]
  },
  {
    title: 'Asynchronous JavaScript',
    items: [
      { title: 'Callbacks', path: '/javascript/callbacks' },
      { title: 'Promises', path: '/javascript/promises' },
      { title: 'Async/Await', path: '/javascript/async-await' },
    ]
  },
  {
    title: 'DOM Manipulation',
    items: [
      { title: 'Selecting Elements', path: '/javascript/selecting-elements' },
      { title: 'Modifying Elements', path: '/javascript/modifying-elements' },
      { title: 'Event Handling', path: '/javascript/event-handling' },
    ]
  },
  {
    title: 'Error Handling',
    items: [
      { title: 'Try-Catch Block', path: '/javascript/try-catch' },
      { title: 'Throwing Errors', path: '/javascript/throwing-errors' },
      { title: 'Custom Errors', path: '/javascript/custom-errors' },
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Closures', path: '/javascript/closures' },
      { title: 'Modules', path: '/javascript/modules' },
      { title: 'Event Loop', path: '/javascript/event-loop' },
      { title: 'JavaScript Engine', path: '/javascript/javascript-engine' },
    ]
  }
];

const JavascriptSidebar = () => {
  return <BaseSidebar sections={JAVASCRIPT_SECTIONS} title="JavaScript Documentation" />;
};

export default JavascriptSidebar;
