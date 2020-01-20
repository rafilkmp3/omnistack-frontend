import React, { useEffect, useState } from 'react';
//  import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import api from './services/api';


import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    console.log(response.data);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div >
  );
}

export default App;
