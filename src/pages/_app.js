import { Provider } from 'react-redux'
import SiteLayout from '../layout/SiteLayout'
import { store } from '../store/store'

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import '../styles/globals.css'

let persistor = persistStore(store);

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
