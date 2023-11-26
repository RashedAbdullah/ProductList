export const productDetailsStorageData = ()=>{
    const data = JSON.parse(localStorage.getItem("ProductDataInStorage"));
    if(data){
        return data;
    }
    return [];
}