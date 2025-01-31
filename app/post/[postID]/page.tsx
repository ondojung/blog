import styles from './page.module.css'


export default function PostPage(){
    const { title,author,date,content,tags,mainImg }={
        "title": "SSR과 CSR의 차이점: 무엇을 선택해야 할까?",
        "author": "김코딩",
        "date": '2024-01-22',
        "content": "<h2>소개</h2><p>SSR(Server-Side Rendering)과 CSR(Client-Side Rendering)은 웹 애플리케이션 렌더링 방식의 주요한 두 가지 방법입니다. 이 글에서는 두 렌더링 방식의 차이와 장단점, 그리고 각각을 선택해야 하는 상황에 대해 알아보겠습니다.</p><h2>SSR이란?</h2><p>SSR은 서버에서 HTML을 생성하고 클라이언트에 전달하는 방식입니다. 서버에서 모든 렌더링이 이루어지기 때문에 클라이언트는 완전히 렌더링된 HTML을 받게 됩니다.</p><ul><li>장점: 초기 로드 속도가 빠르고, SEO(검색 엔진 최적화)에 유리합니다.</li><li>단점: 서버 부하가 증가하며, 복잡한 서버 설정이 필요할 수 있습니다.</li></ul><h2>CSR이란?</h2><p>CSR은 클라이언트에서 JavaScript를 사용해 HTML을 렌더링하는 방식입니다. 일반적으로 React, Vue 같은 프레임워크를 사용해 구현됩니다.</p><ul><li>장점: 서버 부하가 적고, 유저와의 상호작용이 많을 때 유리합니다.</li><li>단점: 초기 로드 속도가 느리고, SEO가 어렵습니다.</li></ul><h2>SSR vs CSR: 무엇을 선택해야 할까?</h2><p>선택은 애플리케이션의 요구 사항에 따라 다릅니다. 만약 SEO가 중요한 블로그나 마케팅 사이트라면 SSR이 유리합니다. 반면, 대화형 애플리케이션이나 대시보드라면 CSR이 적합할 수 있습니다.</p><h2>결론</h2><p>SSR과 CSR 모두 장단점이 뚜렷하기 때문에, 프로젝트의 요구 사항을 분석해 적합한 방식을 선택하는 것이 중요합니다.</p>",
        "tags": ["SSR", "CSR", "웹 개발", "프론트엔드"],
        "mainImg":"https://helpx.adobe.com/content/dam/help/en/illustrator/using/workspace-basics/workspace-basics-ai.jpg"
    }
    return(
        <>
            <div className={styles.mainImgBlock}>
                <img className={styles.mainImg} src={mainImg} alt={'썸네일'}/>
            </div>
            <div className={styles.title}><h1>{title}</h1></div>
            <div className={styles.date}>{date}</div>
            <div className={styles.content} dangerouslySetInnerHTML={ {__html: content} }></div>
        </>
    )
}