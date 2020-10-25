import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import {Provider} from 'react-redux'
import store from './store'


const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
//npx create-react-app it-logger-app
//npm i -D json-server concurrently
//npm install materialize-css
//npm i moment react-moment
//npm run dev
//npm i redux react-redux redux-thunk redux-devtools-extension