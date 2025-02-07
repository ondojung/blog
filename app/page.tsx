import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'
import MenuIcon from '../public/img/menu.svg'
import Header from '../components/Header'
import { getPosts } from "./actions";
/*
{
    "id":1,
    "title": "React Native로 모바일 앱 개발하기",
    "overview": "React Native를 사용하여 모바일 애플리케이션을 만들고, 크로스 플랫폼 개발을 최적화하는 방법을 알아봅니다.",
    "category": "모바일 개발",
    "mainImg": "https://www.shutterstock.com/shutterstock/photos/2262102301/display_1500/stock-vector-react-native-mobile-app-abstract-concept-vector-illustration-cross-platform-native-mobile-app-2262102301.jpg",
    "createdAt": new Date()
  }
*/

export default async function Home() {
    const postList = await getPosts()

    return (
    <div>
        <Header/>
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
                      overview={e.preview}
                      category={e.category}
                      img={e.thumbnail}
                      date={e.createdAt}/>
            )
        }
    </div>
    );
}
