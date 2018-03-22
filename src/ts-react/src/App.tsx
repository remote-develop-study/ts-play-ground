import * as React from 'react';
// import Profile from './components/Profile';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Profile
          name="벨로퍼트"
          job="코드사랑꾼"
        /> */}
        <Counter/>
      </div>
    );
  }
}

export default App;