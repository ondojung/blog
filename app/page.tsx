import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'
import Header from '../components/Header'
import { getPosts } from "./actions";


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
            postList.map((e)=>
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
