import { useState } from "react";
import React from 'react'

import Home from "./Home.jsx";
import Chat from "./Chat.jsx";

import "./App.css";
import "../index.css"


function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Home onAuth={(user) => setUser(user)} />;
  } else {
    return <Chat user={user} />;
  }
}

export default App;