import styles from './page.module.css'
import { getPostDetail } from "../../actions";
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus';
import 'prismjs/themes/prism-tomorrow.css';
import OpenGraph from "@/components/OpenGraph"

interface PostParams {
  postID: string;
}

export default async function PostPage({ params }:{ params: Promise<PostParams> }){
    const { postID } = await params;
    const { title,createdAt,content,category,thumbnail } = await getPostDetail(Number(postID))
    const dateFormat=(data:Date)=>{
        const year = data.getFullYear()
        const date = data.getDate()
        const month = data.toLocaleString('en-US', { month: 'short' });

        return `${month} ${date}, ${year}`
    }
    return(
        <>
            <div className={styles.mainImgBlock}>
                <img className={styles.thumbnail} src={thumbnail} alt={'썸네일'}/>
                <div className={styles.thumbnailContent}>
                    <div className={styles.title}>{title}</div>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.createdAt}> {dateFormat(createdAt)}</span>
                </div>
            </div>
            <div className={styles.content}>
                
                <div className={styles.date}></div>
                <ReactMarkdown
                    rehypePlugins={[rehypePrism]}
                    components={{
        a: ({ children, ...props }) => {
          const href = props.href || '';
          const text = children as string;
          
          if (text?.toLowerCase() === 'youtube') {
            // 유튜브 링크인지 확인하고 iframe으로 변환
            const videoId = href.split('v=')[1]?.split('&')[0] || href.split('/').pop()?.split('?')[0];
            return (
              <span style={{ position: 'relative', paddingBottom: '56.25%', height: 0, display:"block" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                />
              </span>
            );
          }
        
        if (text?.toLowerCase() === 'link') {
            return (
              <OpenGraph url={ href }/>
            );
          }
          
        },
      }}>
                    {content}
                </ReactMarkdown>
            </div>
        </>
    )
}