import styles from './ProfileBlock.module.css'
import Image from "next/image";
import GithubIcon from '../public/img/github-mark.svg'
import EmailIcon from '../public/img/email.svg'

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
                    <GithubIcon width={98} height={96} className={styles.githubIcon}/>GithHub
                </div>
                </a>
                <a href={`mailto:seohayeon.kr@gmail.com`}>
                <div className={styles.button}>
                    <EmailIcon width={98} height={96} className={styles.emailIcon}/>Email
                </div>
                </a>
            </div>
        </div>
    )
}