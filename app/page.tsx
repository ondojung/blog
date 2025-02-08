import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'
import MenuIcon from '../public/img/menu.svg'
import Header from '../components/Header'
import { getPosts } from "./actions";

interface Post{
    id:number;
    title:string;
    preview:string;
    category:string;
    thumbnail:string;
    img:string;
    createdAt:Date;
}

export default async function Home() {
    const postList:any = await getPosts()

    return (
    <div>
        <Header/>
        <ProfileBlock name='Seo Hayeon'
                      github='ondojung'
                      email='hyseo0208@gmail.com'
                      avatar='/img/avatar.jpg'/>
        <div className='postListHeader'>Latest</div>
        {
            postList.map((e:Post)=>
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
