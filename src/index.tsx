import React, { Fragment } from 'react';
import { render } from 'react-dom';

function App(props) {
  return (
    <Fragment>
      <button onClick={() => console.log('this is silly')}>try me!</button>
    </Fragment>
  );
}

render(<App />, document.getElementById('app'));
