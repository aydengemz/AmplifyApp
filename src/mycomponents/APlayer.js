import { DataStore } from "aws-amplify";
import React, { useState } from "react";
import { Player } from '../models';

function APlayer(props) {

    const oldPlayer = props.playerInfo

    async function updateClicks() {
        await DataStore.save(
          Player.copyOf(oldPlayer, updated => {
            updated.clicks = oldPlayer.clicks + 1
          })
        );
      }
     async function clearClicks() {
        await DataStore.save(
          Player.copyOf(oldPlayer, updated => {
            updated.clicks = 0
          })
        );
      }
      async function deletePlayer() {
        DataStore.delete(oldPlayer);
      }
      

    return (
        <div>
            <h3>{props.playerInfo.username}</h3>
            <p>CLicks: {props.playerInfo.clicks}</p>
            <button onClick={updateClicks}>Click</button>
            <button onClick={clearClicks}>Clear Clicks</button>
            <button onClick={deletePlayer}>Delete Player</button>
        </div>
  
    );
}

export default APlayer;