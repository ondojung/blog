'use client'
import {useRef,useEffect,useState} from 'react'
import styles from './Music.module.css'
import PlayIcon from '../../public/icons/play_icon.svg'
import PauseIcon from '../../public/icons/pause_icon.svg';
import NextIcon from '../../public/icons/next_icon.svg';
import ColorThief from 'colorthief';
import YouTube,{YouTubePlayer} from 'react-youtube';

type MusicState = {
  idx:number;
  id:string;
  title: string;
  artist: string;
  thumb: string;
  status: boolean;
};

const playList = [
    {
        idx:0, 
        id:'xvmwqB4fjQ4',
        title:'앵콜요청금지', 
        artist:'브로콜리너마저',
        thumb:'/music/xvmwqB4fjQ4.jpg'
    },
    {
        idx:1, 
        id:'2VkWaOOF4Rc',
        title:'가까운 듯 먼 그대여', 
        artist:'카더가든',
        thumb:'/music/2VkWaOOF4Rc.jpg'
    },{
        idx:2,
        id:'r-el8_35fU8',
        title:'Heaven',
        artist:'에일리(Ailee)',
        thumb:'/music/r-el8_35fU8.jpg'
    }]

export default function MusicWidget(){
    const thumbRef = useRef<HTMLImageElement>(null)
    const [bgColor,setBgColor] = useState([147,151,153])
    const [playing,setPlaying] = useState<MusicState>({
        ...playList[0],
        status:false
    }) 
    const playerRef = useRef<YouTubePlayer>(null);
    useEffect(()=>{
        if (thumbRef.current) {
            const colorThief = new ColorThief();
            thumbRef.current.crossOrigin = 'Anonymous';
            thumbRef.current?.addEventListener('load', function () {
                const dominantColor = colorThief.getColor(thumbRef.current);
                setBgColor(dominantColor); // 지배적인 색상 출력
            });
        }
    },[thumbRef])
    
    const handleNext = () => {
        const nextPlaying = playList[playing.idx + 1] || playList[0]
        setPlaying({
            ...nextPlaying,
            status:true
        })
    }
    const handlePrev = () => {
        const prevPlaying = playList[playing.idx - 1] || playList[playList.length - 1]
        setPlaying({
            ...prevPlaying,
            status:true
        })
    }
    const handlePlay = async () => {
        if (playerRef.current) {
            const player = playerRef.current.internalPlayer;
            const playState = await player.getPlayerState()
            if (playState === 1) {
                player.pauseVideo();
                setPlaying({
                    ...playing,
                    status:false
                })
            }
            
            else {
                player.playVideo();
                setPlaying({
                    ...playing,
                    status:true
                })
            }
        }
    }
    const opts = {
      height: '0',
      width: '0',
      playerVars: {
        autoplay: 0
      },
    };
    return(
        <div className={styles.musicblock} style={{background:`rgb(${bgColor})`}}>
            <YouTube videoId={playing.id} opts={opts} ref={playerRef}/>
            <div className={styles.thumbImgBlock}>
                <img className={styles.thumbImg} src={playing.thumb} ref={thumbRef}/>
            </div>
            <div className={styles.musicContent}>
                <div className={styles.musicTitle}>{playing.title}</div>
                <div className={styles.musicArtist}>{playing.artist}</div>
                <div className={styles.controller}>
                    <NextIcon className={styles.prevIcon}
                              onClick={handlePrev}/>
                    {
                        !playing.status?
                        <PlayIcon className={styles.playIcon}
                              onClick={handlePlay}/>
                        :<PauseIcon className={styles.playIcon}
                              onClick={handlePlay}/>
                    }
                    <NextIcon className={styles.nextIcon}
                              onClick={handleNext}/>
                </div>
            </div>
        </div>
        )
}