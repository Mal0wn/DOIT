import axios from "axios";

export class missionService{
    url = `${process.env.API_URL}/mission`;

    async search(lat, long, radius){
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
    }

    async create(mission) {
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
    }
}
