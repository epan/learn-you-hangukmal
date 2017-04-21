import React from 'react';

import Header from './Header.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      phrases: []
    };
  }

  render () {
    return (
      <div>
        <Header />
        <hr />
        {/*<PhraseForm />*/}
        <hr />
        {/*<PhraseContainer />*/}
      </div>
    );
  }
}

export default App;
