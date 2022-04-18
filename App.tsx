import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store/store';
import SafeAreaWrapper from './src/common/components/SafeAreaWrapper';
import AppNavigation from './src/navigation';
function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaWrapper>
          <AppNavigation />
        </SafeAreaWrapper>
      </Provider>
    </>
  );
}

export default App;
