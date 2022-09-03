import {getData} from "./API/Calls.js";

export const getOptions = async () => {
    const data = await getData();
    const options = [];
    Object.keys(data).forEach(key => options.push(data[key]));
    return options;
};
