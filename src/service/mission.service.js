import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import { TokenContext } from "../context/TokenContext";


const [token, setToken] = useContext(TokenContext);
 const missionService = {
    
    
    search: async (lat, long, radius) => {
        let loadedurl = `${this.url}/search?lat=${lat}&long=${long}&radius=${radius}`;
        await axios
        .get(this.url,{
            timeout: 3000
        })
        .then(function (response) {
            console.log("response :", response);
        })
        .catch(function (error) {
            console.log("error post");
        })
    },

    create: async (mission) => {
        let loadedurl = `${this.url}`
        await axios 
        .post(this.url,{
            timeout:3000
        })
        .then(function (response){
            console.log("response : " , response);
        })
        .catch(function(error) {
            console.log("error post mission")
        })
    },

    fetchMissionWithUser:async (token) => {
        
        let dataMissUse = []
        console.log("AFTERDA")
        console.log("token : " + token)
        await axios
      .get('http://localhost:3000/mission', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response.data) 
        dataMissUse = response.data
      })
      .catch(error => {
        console.log("FetchSERVICE")
        console.log(error);
      });
    
      return dataMissUse;
    }
}


export default missionService;