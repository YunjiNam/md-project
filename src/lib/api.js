import axios from 'axios';

export const getList = id =>
    axios.get(`https://ops.wematch.com/da24/partners/?page=${id}&size=10`)