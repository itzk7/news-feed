import moment from "moment";

export const formatUnixTime = (timeStamp) => {
    return moment.unix(timeStamp).format("🗓 MMMM Do YYYY, 🕒 h:mm:ss a");
}