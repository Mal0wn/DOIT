import axios from "axios";

export class missionService{
    url: string = `${process.env.DOIT4MEURL}/mission`;

    async search(lat: number, long: number, radius: number){
        let loadedurl: string = `${this.url}/search?lat=${lat}&long=${long}&radius=${radius}`;
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
}