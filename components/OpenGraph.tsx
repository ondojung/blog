import styles from "./OpenGraph.module.css"
import { getOGData } from "@/app/actions";

type OpenGraphPreviewProps = {
  url: string;
};

export default async function OpenGraphPreview({ url }: OpenGraphPreviewProps) {
    const { ogImage,ogTitle,ogDescription } = await getOGData(url);
    
  return (
    <span className={styles.container}>
        <a target="_blank" href={url}>
        <span className={styles.ogImageContainer}>
            <img src={ogImage}/>
        </span>
        <span className={styles.ogContent}>
            <span className={styles.ogTitleContainer}>{ogTitle}</span>
            <span className={styles.ogDescriptContainer}>{ogDescription}</span>
            <span className={styles.ogUrlContainer}>{url}</span>
        </span>
        </a>
    </span>
  );
}