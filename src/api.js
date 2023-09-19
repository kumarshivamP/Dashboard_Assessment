// import axios from "axios";

// const client = axios.create({
//     baseURL: "https://api.open-meteo.com/v1/forecast?latitude=29.4709&longitude=77.7033&hourly=temperature_2m"
// });

// export const apiData = () => {
//     client.get().then((res) => {
//         return res.data;
//     }).catch((e) => {
//         console.log(e)
//     })
// }

const baseURL = "https://api.open-meteo.com/v1/forecast?latitude=29.4709&longitude=77.7033&hourly=temperature_2m,relativehumidity_2m&timezone=Asia%2FBangkok&forecast_days=1"

export const apiData = () => {
    return fetch(baseURL, {
        method: "GET",
    })
        .then((res) => {
            return res.json();
        })
        .catch((e) => {
            console.log("error", e);
        });
}