import {useEffect,useState} from "react";
import Image from "next/image";
import styles from './SideBlock.module.css'
import MusicWidget from './widget/Music'
import VisitorsCountWidget from './widget/VisitorsCount'
import WhetherWidget from './widget/Whether'
import { getCategoryList } from "@/app/actions";



interface Category {
  id: number;
  name: string;
}

interface SideBlockProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBlock({
    menuOpen,
    setMenuOpen
}:SideBlockProps){
    const [categoryList,setCategoryList] = useState<Category[]>([])
    const fetch = async()=>{
            const category = await getCategoryList()
            setCategoryList(category)
        }
        
    useEffect(()=>{
        fetch()
    },[])
    
    return(
        <>
        <div className={menuOpen?styles.sideblockBg:styles.closeMenuBg} onClick={()=>setMenuOpen(false)}>
        
        </div>
        <div className={`${styles.sideBlock} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.avatar}>
                <Image src='/img/avatar.jpg' 
                       alt="아바타" 
                       width={150} 
                       height={150}
                       className={styles.avatarImg}/>
        </div>
        <div className={styles.blogTitle}>EVELIF&apos;s LOG</div>
        <VisitorsCountWidget/>
        <WhetherWidget/>
        <MusicWidget/>
        
        <div className={styles.sideMenuName}>CATEGORY</div>
        <div>
                {
                    categoryList.map(e=>
                        <div key={e.id} className={styles.category}>
                            <div className={styles.categoryName}>{e.name}</div>
                        </div>
                    )
                }
        </div>
        
        <div className={styles.sideMenuName}>MENU</div>
        <div>
                <div className={styles.category}>프로젝트</div>
                <div className={styles.category}>방명록</div>
        </div>
        </div>
        </>
        )
}