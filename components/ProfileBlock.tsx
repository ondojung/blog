import styles from './ProfileBlock.module.css'
import Image from "next/image";
import GithubIcon from '../public/img/github-mark.svg'

export default function ProfileBlock({
    name,
    github,
    email,
    avatar,
}){
    return( 
        <div className={styles.profileBlock}>
            <div className={styles.avatar}>
            <Image src={avatar} 
                   alt="아바타" 
                   width={200} 
                   height={200}
                   className={styles.avatarImg}/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.name}>{name}</div>
                <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                <div className={styles.button}>
                <GithubIcon style={{}} width={10} height={10}/>GithHub</div>
                </a>
                <a href={`mailto:seohayeon.kr@gmail.com`}>
                <div className={styles.button}>Email</div>
                </a>
            </div>
        </div>
    )
}