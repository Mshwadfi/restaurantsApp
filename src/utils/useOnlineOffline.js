import { useEffect, useState } from "react";



const useOnlineOffline = () =>{
    const [isOnline , setIsOnline] = useState(true);
    useEffect(() =>{
        window.addEventListener('offline' , () =>{
            setIsOnline(false);
        });
    
        window.addEventListener('online' , () =>{
            setIsOnline(true);
        })
    },[]);

    return isOnline;
}

export default useOnlineOffline;