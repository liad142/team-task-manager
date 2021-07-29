import React, {Fragment, useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'

import './App.css';
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddMemberModal from "./components/team_members/AddMemeberModal";
import MemberListModal from "./components/team_members/MemberListModal";
import {Provider} from "react-redux";
import store from "./store";


function App() {
    useEffect(()=>{
        //Init Materialize JS
        M.AutoInit()
    })
  return (
      <Provider store={store}>
          <Fragment >
              <SearchBar/>
              <div className="container">
                  <AddBtn/>
                  <AddLogModal/>
                  <EditLogModal/>
                  <AddMemberModal/>
                  <MemberListModal />
                  <Logs/>
              </div>

          </Fragment>
      </Provider>

  );
}

export default App;
