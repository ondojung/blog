"use client"
import Image from "next/image";
import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'
import MenuIcon from '../public/img/menu.svg'
import {useState} from 'react'
import SideBlock from '../components/SideBlock'

const postList = [
  {
    "id":1,
    "title": "React Native로 모바일 앱 개발하기",
    "overview": "React Native를 사용하여 모바일 애플리케이션을 만들고, 크로스 플랫폼 개발을 최적화하는 방법을 알아봅니다.",
    "category": "모바일 개발",
    "mainImg": "https://www.shutterstock.com/shutterstock/photos/2262102301/display_1500/stock-vector-react-native-mobile-app-abstract-concept-vector-illustration-cross-platform-native-mobile-app-2262102301.jpg",
    "createdAt": new Date()
  },
  {
    "id":2,
    "title": "Vue.js로 SPA 개발 시작하기",
    "overview": "Vue.js의 특징을 활용해 싱글 페이지 애플리케이션(SPA)을 개발하는 기본적인 절차와 기술을 설명합니다.",
    "category": "웹 개발",
    "mainImg": "https://www.heropy.dev/postAssets/aBLqC5/main.jpg",
    "createdAt": new Date()
  },
  {
    "id":3,
    "title": "Node.js로 백엔드 개발하기",
    "overview": "Node.js와 Express를 활용해 RESTful API를 만들고 서버 사이드 개발의 효율성을 높이는 방법을 다룹니다.",
    "category": "백엔드 개발",
    "mainImg": "https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1713954482106-belajar-nextjs.webp",
    "createdAt": new Date()
  },
  {
    "id":4,
    "title": "Git으로 버전 관리와 협업하기",
    "overview": "Git을 사용한 버전 관리 방법과 효율적인 팀 협업을 위한 Git 흐름과 전략을 소개합니다.",
    "category": "도구 및 기술",
    "mainImg": "https://blog.kakaocdn.net/dn/coCV51/btqLzXqG6TD/T8EcKPSf6x5lcCTwpSrNgk/img.png",
    "createdAt": new Date()
  },
  {
    "id":5,
    "title": "Docker를 활용한 개발 환경 구축",
    "overview": "Docker를 활용하여 빠르고 효율적으로 개발 환경을 구축하고, 운영 환경과의 일관성을 유지하는 방법을 배웁니다.",
    "category": "DevOps",
    "mainImg": "https://velog.velcdn.com/images/mainfn/post/58cdce1e-09fe-4665-a7a4-e217c75f21ed/image.png",
    "createdAt": new Date()
  }
]

export default function Home() {
    const [menuOpen,setMenuOpen] = useState(false)
    
    return (
    <div>
        <MenuIcon width={50} height={50} style={{padding:'0.5rem'}} onClick={()=>setMenuOpen(prev=>!prev)}/>
        
        <SideBlock setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
            
    
        <ProfileBlock name='Seo Hayeon'
                      github='ondojung'
                      email='hyseo0208@gmail.com'
                      avatar='/img/avatar.jpg'/>
        <div className='postListHeader'>Latest</div>
        {
            postList.map(e=>
                <PostListItem 
                      key={e.id}
                      _id={e.id}
                      title={e.title}
                      overview={e.overview}
                      category={e.category}
                      img={e.mainImg}
                      date={e.createdAt}/>
            )
        }
    </div>
    );
}
