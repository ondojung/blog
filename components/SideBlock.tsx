import Image from "next/image";
import styles from './SideBlock.module.css'
import VisitorCount from './widget/VisitorsCount'
import MusicWidget from './widget/Music'

const category=[
        {id:1,color:'red',name:'Swift'},
        {id:2,color:'orange',name:'HTML'},
        {id:3,color:'yellow',name:'Javascript'},
        {id:4,color:'lime',name:'Shell'},
        {id:5,color:'green',name:'Vue'},
        {id:6,color:'skyblue',name:'React'},
        {id:7,color:'blue',name:'Python'},
        {id:8,color:'purple',name:'Kotlin'},
    ]
export default function SideBlock({menuOpen,setMenuOpen}){
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
        <div className={styles.blogTitle}>EVELIF's LOG</div>
        
        <MusicWidget/>
        <VisitorCount/>
        
        <div className={styles.sideMenuName}>CATEGORY</div>
        <div>
                {
                    category.map(e=>
                        <div key={e.id} className={styles.category}>
                            <div className={styles.color} style={{background:e.color}}></div>
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