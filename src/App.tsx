import React, {useContext} from 'react';
import {Store, StoreProvider} from "./store/store";

function App() {
  const store = useContext(Store);
  return (
      <StoreProvider>
          {console.log(store)}
      </StoreProvider>
  );
}

export default App;
