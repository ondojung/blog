import styles from "./OpenGraph.module.css"
import { getOGData } from "@/app/actions";

export default async function OpenGraphPreview({url}) {
    const ogData = {
        image:"https://hell",
        title:"Hello World",
        description:"안녕하세여"
    };
    const { ogImage,ogTitle,ogDescription } = await getOGData(url);
    
  return (
    <span className={styles.container}>
        <span className={styles.ogImageContainer}>
            <img src={ogImage}/>
        </span>
        <span className={styles.ogContent}>
            <span className={styles.ogTitleContainer}>{ogTitle}</span>
            <span className={styles.ogDescriptContainer}>{ogDescription}</span>
            <span className={styles.ogUrlContainer}>{url}</span>
        </span>
    </span>
  );
}