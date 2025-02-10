"use client"
import { useState, useEffect } from "react";
import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'
import Header from '../components/Header'
import axios from "axios";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/posts") // API 라우트 호출
        .then((res) => {
            setData(res.data)
            alert(res.data)
        })
    }, []);
    return (
    <div>
        <Header/>
        <ProfileBlock name='Seo Hayeon'
                      github='ondojung'
                      email='hyseo0208@gmail.com'
                      avatar='/img/avatar.jpg'/>
        <div className='postListHeader'>Latest</div>
        {
            data.map((e)=>
                <PostListItem 
                      key={e.id}
                      _id={e.id}
                      title={e.title}
                      overview={e.preview}
                      category={e.category}
                      img={e.thumbnail}
                      date={e.createdAt}/>
            )
        }
    </div>
    );
}
