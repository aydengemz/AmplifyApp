
import { DataStore } from '@aws-amplify/datastore';
import { Player } from '../models';
import '../App.css';
import awsconfig from "../aws-exports";
import { Amplify } from 'aws-amplify';
import AllPlayer from '../mycomponents/AllPlayer.js';
import React, { useState, useEffect } from "react";
import PlayerCreateForm from "../ui-components/PlayerCreateForm.jsx"

import { Logger } from 'aws-amplify';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

Amplify.configure(awsconfig);

function AppPlayer() {

    useEffect(() => {

    const subscription = DataStore.observeQuery(

      Player).subscribe(snapshot => {
          const { items, isSynced } = snapshot;
          console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
          setPlayersrealtime(items);
      });

    return () => subscription.unsubscribe();
  }, []);

  const [players, setPlayers] = useState([{ username: "Player0", clicks: 0}]);
  const [playersrealtime, setPlayersrealtime] = useState([{ username: "10adsf", clicks: 0}]);

  const handlePush = async () => {
    const players = await DataStore.query(Player);
    console.log(players);
    setPlayers(players)
  }

  return (
    
    <div>
        <PlayerCreateForm />
        <br></br>
        <button onClick={handlePush}>GET ALL Players</button>

        <AllPlayer players={playersrealtime} />
        <AllPlayer players={players} />
    
    </div>
  );
}

export default AppPlayer;

