import axios from "axios";

// export const FETCH_DATA=async () => {
//     const res=await axios.get("http://localhost:3001/products");
//     return res.data;
// }
// export const POST_DATA=async (data:{name:string,manufacturer:string,price:number}) => {
//     const res=await axios.post("http://localhost:3001/watchlist",data);
//     return res.data;
// }

// export const  FETCH_WatchList_DATA=async () => {
//     const res=await axios.get("http://localhost:3001/watchlist");
//     return res.data;
// }

export const FETCH_DATA=async () => {
    const res=await axios.get("http://localhost:8080/store");
    return res.data;
}
export const POST_DATA=async (data:{name:string,manufacturer:string,price:number}) => {
    const res=await axios.post("http://localhost:8080/store",data);
    console.log("Savedd");
    console.log(res.data);
    
    return res.data;
}

export const  FETCH_WatchList_DATA=async () => {
    const res=await axios.get("http://localhost:8080/store/watchlist");
    return res.data;
}
