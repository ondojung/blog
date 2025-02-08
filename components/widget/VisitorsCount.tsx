"use client"
import {useEffect,useState} from "react";
import styles from "./VisitorsCount.module.css";

type VisitorsData = {
    total:number;
    today:number;
    yesterday:number;
}

export default function Whether(){
    const [data,setData] = useState<VisitorsData>()
    useEffect(()=>{
        setData({
                total:832293,
                today:61,
                yesterday:167
            })
    },[])
    
    const date = () => {
        const today = new Date();
        const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
        const dateNum = today.getDate();
        
        return {
            getDay:dayName,
            getDate:dateNum
        }
    }
    
    return(
    <div className={styles.container}>
        <div style={{margin:'0.8rem'}}>
            <div className={styles.day}>{ date().getDay }</div>
            <div className={styles.date}>{ date().getDate }</div>
            <div className={styles.today}>
                <div className={styles.label} style={{background:'#478EAC'}}/>
                오늘: {data?.today}
            </div>
            <div className={styles.total}>
                <div className={styles.label} style={{background:'#78B55F'}}/>
                전체: {data?.total}
            </div>
        </div>
    </div>
        )
}