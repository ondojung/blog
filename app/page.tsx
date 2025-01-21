import Image from "next/image";
import PostListItem from '../components/PostListItem'
import ProfileBlock from '../components/ProfileBlock'

export default function Home() {
  return (
    <div>
        <ProfileBlock name='Seo Hayeon'
                      github='ondojung'
                      email='hyseo0208@gmail.com'
                      avatar='/img/avatar.jpg'/>
        <PostListItem title='SSR vs CSR 비교하기'
                      overview='SSR과 CSR 의 차이를 보자면 먼저 SSR은 서버 사이드 렌더링이다. 즉 서버에서 html을 클라이언트에 주면서 html에 들어있는 동적 데이터들까지 함께 주는 것이다. 반대로 CSR은 클라이언트 사이드 렌더링으로 클라이언트에서 html을 로드하고 '
                      category='Vuejs'
                      img='https://i.ytimg.com/vi/t23mgu0lnjY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTvdCCCPxqHXuCq-eGTxhnxrgz7A'/>
    </div>
  );
}
