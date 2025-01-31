import styles from './PostListItem.module.css'
//import Image from "next/image";
import Link from 'next/link'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateHandler=(e:Date)=>{
    const month = months[e.getMonth()]
    const date = e.getDate()
    const year = e.getFullYear()
    return `${month} ${date}, ${year}`
}
interface PostProps {
  _id: number;
  title: string;
  overview: string;
  category: string;
  img: string;
  date: Date;
}

export default function PostListItem({
    _id,
    title,
    overview,
    category,
    img,
    date
}:PostProps){
    return(
        <Link href={`/post/${_id}`}>
        <div className={styles.PostListBlock}>
            <div className={styles.PostListImgBlock}>
                <img className={styles.PostListImg} src={img} alt={'썸네일'}/>
            </div>
            <div className={styles.PostListContent}>
                <div className={styles.PostListCategory}>{category}</div>
                <div className={styles.PostListTitle}>{title}</div>
                <div className={styles.PostListOverview}>{overview}</div>
                <div>{dateHandler(date)}</div>
            </div>
        </div>
        </Link>
    )
}