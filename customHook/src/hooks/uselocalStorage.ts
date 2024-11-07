import { useEffect, useState } from "react";



export function uselocalStorage(){
    const [count, setCount] = useState<number>(5);

    const saveCount = ()=>{
        try{
            window.localStorage.setItem("userCount", JSON.stringify(count));
        }catch(error){
            console.error("Error saving userCount to localStorage:", error);
        }
    }
   const getCount = ()=>{
        try{
            const savedCount:string | null = window.localStorage.getItem("userCount");
            const saveCountNumber: number =  savedCount ? JSON.parse(savedCount) : 5;
            setCount(saveCountNumber)
        }catch(error){
            console.error("Error reading userCount from localStorage:", error);
            return 5;
        }
    }

  useEffect(() => {
    getCount();
    saveCount();

    },[count]);

    return {count, saveCount, getCount};

}


