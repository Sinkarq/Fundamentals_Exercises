import {request} from "./request.js";

export const getData = async () => await request('/jsonstore/advanced/table');