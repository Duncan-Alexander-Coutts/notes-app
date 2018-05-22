import moment from "moment";

export const formatToDateString = date => moment(date).format("D MMMM YYYY");
export const formatToTimeString = date => moment(date).format("h:mm:ss a");
