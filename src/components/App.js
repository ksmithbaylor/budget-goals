// @flow

import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Goals from './Goals';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    padding-top: 1em;
  }
`;

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1em;
`;

export default function App() {
  return (
    <Container className="container">
      <Goals />
    </Container>
  );
}
