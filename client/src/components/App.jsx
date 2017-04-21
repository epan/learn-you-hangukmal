import React from 'react';

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
        <PhraseForm />
        <hr />
        <PhraseContainer />
      </div>
    );
  }
}

export default App;
