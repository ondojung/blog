import styles from './PostListItem.module.css'

export default function PostListItem({
    title,
    overview,
    category,
    img
}){
    return( 
        <div className={styles.PostListBlock}>
            <div></div>
            <div className={styles.PostListCategory}>{category}</div>
            <div className={styles.PostListTitle}>{title}</div>
            <div className={styles.PostListOverview}>{overview}</div>
        </div>
    )
}