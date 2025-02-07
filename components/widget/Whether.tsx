"use client"
import {useEffect,useState} from "react";
import styles from "./Whether.module.css";
import { WeatherApi,WeatherIcon } from '@/utils/weather'

export default function Whether(){
    const [data,setData] = useState({
                city:'-',
                temperature:'-',
                weather:'-',
                icon:null,
                highest:'',
                lowest:''
            })
    useEffect(()=>{
        WeatherApi().then((result)=>{
            const trimData = {
                city:'서울',
                temperature:Math.floor(result?.main?.temp),
                weather:result?.weather[0]?.description,
                icon:result?.weather[0]?.icon,
                highest:Math.floor(result?.main?.temp_max),
                lowest:Math.floor(result?.main?.temp_min)
            } 
            setData(trimData)
        })
    },[])
    
    return(
    <div styles={{background:WeatherIcon[data.icon]?.color}}
         className={styles.container}>
        <div style={{margin:'0.5rem'}}>
            <div className={styles.city}>{data?.city}</div>
            <div className={styles.temperature}>{data?.temperature}°</div>
            
            <div style={{position: 'absolute',bottom: '0.5rem'}}>
            <div className={styles.weatherIconDiv}>
                <img src={`/img/weather/${WeatherIcon[data.icon]?.path}.png`} className={styles.weatherIconImg}/>
            </div>
            <div className={styles.weather}>{data?.weather}</div>
            <div style={{overflow:'hidden',fontSize:'0.8rem'}}>
                <span>최고:{data?.highest}° &nbsp;</span>
                <span>최저:{data?.lowest}°</span>
            </div>
            </div>
        </div>
    </div>
        )
}