'use strict';

//* 1. 미니 블로그 기획, 프로젝트 생성 및 필요한 패키지 설치 */
{
    /* 1. 미니 블로그에 필요한 기능 */
    //  - 글 목록 보기 기능 (리스트 형태)
    //  - 글 보기 기능
    //  - 댓글 보기 기능
    //  - 글 작성 기능
    //  - 댓글 작성 기능



    /* 2. 전체 화면 디자인 */
    //  - 메인 화면: 글 목록을 보여줌
    //      + 글 작성 버튼
    //      + 글 제목
    //  - 글 작성 화면: 메인 화면에 있는 글 작성 버튼 클릭 시 보여줌
    //      + 글의 제목 입력 창
    //      + 글의 내용 입력 창
    //      + 글 작성 완료 버튼
    //  - 글 상세 화면: 메인 화면에 있는 글 제목 클릭 시 보여줌
    //      + 해당 글의 제목
    //      + 해당 글의 내용
    //      + 해당 글에 달린 댓글
    //      + 해당 글에 입력할 수 있는 댓글 창
    //      + 댓글 작성 완료 버튼



    /* 3. 프로젝트 생성 및 실행 */
    //  - 프로젝트 생성
    //      => npx create-react-app 프로젝트명
    //      => npx create-react-app mini-blog
    //  - 프로젝트로 이동
    //      => cd 프로젝트명
    //      => cd mini-blog
    //  - 프로젝트 실행
    //      => npm start



    /* 4. 개발에 필요한 패키지 설치 */
    //  - react-router-dom:     React 앰에서 페이지 전환을 위해 사용하는 패키지 
    //  - styled-components:    스타일링을 위한 라이브러리
    //      - '--save' 옵션은 지금 설치하는 패키지들을 package.json 파일이 관리하는 의존성 목록에 저장하겠다는 의미
    //      - 이런 식으로 한 번에 두 개의 패키지를 동시에 설치해도 됨
    //          => npm install --save react-router-dom styled-components
    //  - 패키지 설치 이후에는 설치가 되어 packge.json 파일에 존재하는지 확인해볼것
    //      - 방금 설치한 패키지들은 Dependencies 목록에 추가됨
    //      - Dependencies는 이 애플리케이션에 필요한 패키지들, 즉 의존성 목록을 나타냄
    //      - 의존성을 추가하면 다른 사람이 이 프로젝트를 실행하려고 할 때, 'npm install'만 실행하면 됨
    //  - 즉, 프로젝트에 꼭 필요한 패키지들을 설치할 때는 '--save' 옵션을 넣기

}


///* 2. 주요 컴포넌트 및 폴더 구성하기 */
{
    /* 1. 각 기능에 필요한 Component */
    //    1-1. 글 목록 보기 기능 (리스트 형태)
    //        => PostList (글의 목록을 나타내는 Component)
    //        => PostListItem (글의 항목 Component)
    //    1-2. 글 보기 기능
    //        => Post (글의 제목과 내용을 보여주는 Component)
    //    1-3. 댓글 보기 기능
    //        => CommentList (댓글의 목록을 나타내는 Component)
    //        => CommentListItem (댓글 항목 Component)
    //    1-4. 글 작성 기능
    //        => PostWrite (사용자로부터 문자열인 글의 제목과 내용을 입력받을 수 있는 Component)
    //    1-5. 댓글 작성 기능
    //        => CommentWrite (사용자로부터 문자열인 댓글을 입력받을 수 있는 Component)



    /* 2. 폴더 구성하기 */
    //  - 각 Component들을 적당한 폴더에 모아서 관리함으로써 개발의 편의와 향후 유지 보수가 용이하도록 하기 위함
    //  - 보통 React Component가 재사용 가능할 경우 종류별로 모아놓거나 각 페이지에서만 사용하고,
    //   딱히 재사용될 일이 없는 경우에는 각 페이지별로 폴더를 만들고 그 안에 모아놓음
    //  - 해당 프로젝트는 규모가 작고 개발할 Component의 종류와 갯수가 많지 않기 때문에 이렇게 구성
    //      2-1. list
    //          - 리스트와 관련된 Component들을 모아놓은 폴더
    //      2-2. page
    //          - 페이지 Component들을 모아놓은 폴더
    //      2-3. ui
    //          - UI Component들을 모아놓은 폴더
    

    /* 3. 폴더 생성 */
    //      3-1. src > 'component'
    //      3-2. src > component > 'list'
    //      3-3. src > component > 'page'
    //      3-4. src > component > 'ui'

}


///* 3. UI 컴포넌트 및 List 컴포넌트 구현하기 */
{
    /* 웹 사이트에 필수적으로 필요한 UI Component */
    //  - UI Component: 버튼, 텍스트 입력 등 사용자가 직접 입력을 할 수 있게 해주는 Component를 의미함
    //  - 프로젝트를 설계할 때에는 Top Down 방식으로 큰 그림을 먼저 그리고, 이후에 작은 부분을 구체화 시켜야 함
    //  - 프로젝트를 구현할 때에는 반대로 Bottom Up 방식으로 작은 부분부터 구현한 이후에 작은 부분들을 모아 큰 부분을 완성하기
    //   그렇기 때문에 큰 Component를 개발하기 전에 먼저 작은 UI Component부터 구현하는 것


    /* 1. 필요한 UI Component */
    //      1-1. 버튼 Component
    //          - 글이나 댓글 작성을 완료했을 때, 버튼을 눌러서 작성한 내용을 저장
    //      1-2. 텍스트 인풋 Component
    //          - 글이나 댓글을 작성하기 위해 사용자로부터 문자열을 입력받을 수 있어야 함

    /* 1-1. Button Component 만들기 */
    //  - 따로 만들 필요 없이, HTML에서 제공하는 button 태그를 사용해도 되지만, 
    //   React Component로 만드는 이유는 버튼의 스타일을 변경하고, 버튼에 들어갈 text도 props로 받아서 좀 더 쉽게 사용할 수 있게 하기 위함
    //  - src > component > ui > 'Button.jsx' 파일 생성 및 강의 내용 작성
    //      + styled-components를 사용해서 버튼 태그에 스타일을 입힌 StyledButton Component를 생성
    //      + Button Component에서 props로 받은 tilte이 Button 목록에 표시되도록 해줌
    //      + props로 받은 onClick은 StyledButton에 onClick을 넣어줌으로써 클릭 이벤트를 상위 Component에서 받을 수 있도록 해줌

    /* 1-2. TextInput Component 만들기 */
    //  - 사용자로부터 text를 입력받을 수 있게 해주는 Component
    //  - 여기에서는 여러 줄을 입력받아야 하기 때문에 textarea 태그 사용
    //  - src > component > ui > 'TextInput.jsx' 파일 생성 및 강의 내용 작성
    //      + styled-components를 사용해서 textarea 태그에 스타일을 입힌 StyledTextarea Component 생성
    //      + TextInput Component의 props로는 높이 설정을 위한 height,
    //            입력된 값을 표시하기 위한 value,
    //            변경된 값을 상위 Component로 전달하기 위한 onChange



    /* 2. List Component 구현하기 */

    /* 2-1. PostListItem Component 만들기 */
    //  - 작은 Component를 먼저 구현하고 이후에 작은 Component를 사용하는 큰 Component를 구현해야 하므로 PostListItem을 먼저 만듦
    //  - 글의 제목만 표시해주는 Component
    //  - src > component > list > 'PostListItem.jsx' 파일 생성 및 강의 내용 작성
    //      + title text를 이용해서 props로 받은 post 객체에 들어있는 title 문자열을 표시해줌

    /* 2-2. PostList Component 만들기 */
    //  - src > component > list > 'PostList.jsx' 파일 생성 및 강의 내용 작성
    //      + PostList Component의 props로 받은 posts라는 배열에는 post 객체들이 들어있음 
    //      + posts 배열에 map()을 이용하여 각 post 객체에 대해 글의 갯수만큼 PostListItme Component를 생성하여 렌더링
    
    /* 2-3. CommentListItem Component 만들기 */
    //  - src > component > list > 'CommentListItem.jsx' 파일 생성 및 강의 내용 작성
    //      + props에서 comment 객체 하나만 사용
    //      + comment 객체에는 사용자가 작성한 댓글 내용이 들어있음
    //      + 글은 클릭이 가능했지만, 댓글은 별도로 클릭하는 기능이 없기 때문에 onClick 이벤트를 따로 처리해주지 않아도 됨
    
    /* 2-4. CommentList Component 만들기 */
    //  - src > component > list > 'CommentList.jsx' 파일 생성 및 강의 내용 작성
    //      + CommentList Component의 props로는 Comments 라는 배열이 들어오게 됨
    //      + Comments 배열에는 Comment 객체들이 들어있으며, 이 배열에 map()을 이용하여 각 댓글 객체를 CommentListItem Component로 넘겨 화면에 댓글을 표시함
    //      + & > * { :not(:last-child) { margin-bottom: 16px; }} 의미
    //          => 마지막이 아닌 element들에게만 하단 margin을 16px 주겠다는 의미
}


///* 4. 가짜 데이터 만들기 */
{
    // 가짜 데이터를 이용해서 데이터를 서버에서 받아왔다고 가정하고, 프론트엔드 쪽을 구현
    // 가짜 데이터를 사용하는 이유
    //  : 이 강의에서 DB와 서버를 구축하는 것까지 다루지 않기 때문


    /* 가짜 데이터 생성 */
    //  - src > 'data.json' 파일 생성 및 아래 링크 내용 복붙
    //      + https://raw.githubusercontent.com/soaple/mini-blog/master/src/data.json

}


///* 5. Page 컴포넌트 구현 및 각 페이지별 경로 구성하기 */
{
    /* 1. Page 컴포넌트 구현하기 */

    /* 1-1. MainPage 만들기 */
    //  - 사용자가 처음 접속했을 때 나오는 페이지
    //  - 글을 작성할 수 있는 버튼과, 글 목록을 보여줘야 함
    //  - src > component > page > 'MainPage.jsx' 파일 생성 및 강의 내용 작성
    //      + Botton Component를 이용해서 글 작성하기 페이지로 이동할 수 있게 구현
    //      + PostList Component를 이용해서 글 목록을 표시
    //      + 페이지 이동을 위해 react-router-dom에 있는 useNavigate()를 사용
    
    
    /* 1-2. PostWritePage 만들기 */
    //  - 글 작성을 위한 페이지
    //  - src > component > page > 'PostWritePage.jsx' 파일 생성 및 강의 내용 작성
    //      + 글의 제목과 내용을 위해 useState()를 사용하여 두 개의 state 선언
    //      + 실제 화면에 나타나는 부분은 TextInput Component를 이용해서 글의 제목과 내용을 각각 입력받을 수 있도록 구성
    //      + 화면 제일 하단에는 Button Component를 사용해서 글 작성 버튼을 넣음
    

    /* 1-3. PostViewPage 만들기 */
    //  - 글 상세 페이지
    //  - 글과 댓글을 보여주어야 하며, 댓글 작성 기능도 제공해야 함
    //  - src > component > page > 'PostViewPage.jsx' 파일 생성 및 강의 내용 작성
    //      + PostViewPage에서는 먼저 props로 전달받은 글의 id를 이용해서 전체 데이터에서 해당되는 글을 찾음
    //      + 찾은 글의 제목, 내용, 댓글을 화면에 렌더링하게 되고, 
    //       그 아래에는 TextInput Component와 Button Component를 이용해 댓글을 작성할 수 있도록 UI 제공
}

{
    /* 각 페이지별 경로 구성하기 */
    //  - 페이지 Component들을 실제 웹브라우저에서 보이도록 각 경로에 맞게 맵핑
    //  - 웹 사이트에서 라우팅이라고 하면 사용자가 원하는 경로로 보내는 과정이라고 이해하기
    //  - react-router-dom: react를 위한 라우팅 라이브러리, 라우팅을 쉽게 구현할 수 있도록 React Component 형태로 제공해주는 라이브러리
        {
            /* react-router-dom을 이용한 기본적인 라우팅 구성 예시 */
            //  - BrowserRouter Component
            //      + 웹브라우저에서 React 라우터를 사용하여 라우팅을 할 수 있도록 해주는 Component
            //      + 웹브라우저에는 히스토리 기능이 내장되어 있는데, 여기에는 사용자가 탐색한 페이지들의 방문 기록이 저장됨
            //      + 그렇기에, 웹브라우저의 뒤로가기 버튼을 누르면 이 히스토리를 이용해서 이전 페이지가 어디인지 찾고, 해당 페이지로 이동하게 되는 것
            //      + 즉, 이 히스토리를 이용해서 경로를 탐색할 수 있게 해주는 Component
            //  - Routes Component, Route Component
            //      + 실제 라우팅 경로를 구성할 수 있게 해주는 Component
            //      + Routes Component는 Route Component를 children으로 가짐
            //      + Route Component는 Routes Component의 하위 Component로서, path와 element라는 props를 가지고 있음
            //          => path: 경로
            //          => element: 경로가 일치할 경우 렌더링을 할 React element
            //      + 사용자가 주소창에 새로운 경로를 입력하거나, 웹사이트 내에서 경로 이동이 일어나게 되면
            //       Routes Component는 하위 children인 Route Component중에서 현재 경로와 일치하는 경로를 찾아 해당되는 element를 반환하게 되고, 그로 인해 화면이 변경됨
            //      + 만약, path 값이 없이 사이트 메인으로 접속하게 되면 index라는 prop을 가진 route로 라우팅
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />}/>
                    <Route path="places" element={<PlacePage />}/>
                    <Route path="games" element={<GamePage />}/>
                </Routes>
            </BrowserRouter>
        }

    
        /* useNavigate() */
        //  - 페이지 이동시 사용
        {
            /* useNavigate() 이용한 페이지 이동 예시 */
            //  - useNavigate()의 호출 결과로 나오는 navigate의 파라미터로 이동할 path를 넣어주면 됨
            function SampleNavigate(props) {
                const navigate = useNavigate();
                const moveToMain = () => { navigate("/"); }
                return (
                    //...
                    null
                )
            }
        }


}


///* 6. App.js 파일 수정, 애플리케이션 실행하기, Production 빌드하기 */
{
    /* App.js 파일 수정하기 */
    //  - mini-blog에 실제로 라우팅을 구성
    //  - 라우팅은 App.js에 포함되어 있는 App Component에 구현하게 됨 (App Component가 가장 처음으로 렌더링되는 Component이기 때문)
    //      + MainTitleText Component를 이용하여 웹사이트 제일 상단에 제목이 항상 나오도록 설정함
    //      + react-router-dom'을 이용해 3가지의 path에 대해서 라우팅을 제공함
    //      + index 경로인 "/" 로 접속하면 MainPage Component를 보여줌
    //      + "/post-write" 로 접속하면 PostWritePage Component를 보여줌
    //      + "/post/:postId" 로 접속하면 PostViewPage Component를 보여줌
    //          => :postId는 동적으로 변하는 파라미터를 위한 값
    //                      경로에 이렇게 콜론(:)을 사용하고 id를 입력하면 실제 Component에서 useParams()를 사용해 id로 해당 값을 가져올 수 있음


    /* index.js 파일 */
    //  - React는 기본적으로 index.js 파일을 렌더링하게 되어 있음
    //  - 그렇기 때문에 index.js에 처음으로 렌더링할 Component를 지정해줄 수 있음
    //  - create-react-app 으로 생성한 프로젝트의 경우 App Component가 기본적으로 들어가서 렌더링해주고 있음
    //  - 즉, 이미 App Component의 라우팅 경로들을 구성한 것
    //      => index.js에서 커스텀 App Component를 감싸고 있는 React.StrictMode Component 지우기



    /* Production 빌드하기 */
    //  - 빌드: 코드와 애플리케이션이 사용하는 이미지, CSS 파일 등의 파일을 모두 모아서 패키징 하는 과정
    //  - 빌드과정에서는 코드가 식별이 불가능하도록 난독화가 되기도 하고, 필요없는 공백이나 줄 바꾼 문자들을 제거하여 축소 과정도 포함됨
    //   최종적으로 만들어진 파일들은 build 폴더에 모이게 됨

    //  1. build 설치
    //      => npm run build

    //  2. 생성된 build 파일을 이용해서 웹 애플리케이션 실행하기 위해 serve 설치
    //  - serve는 static 파일들을 서빙해주는 역할을 하는 프로그램
    //      => npm install -g serve

    //  3. build 폴더를 기반으로 웹 애플리케이션을 서빙
    //  - serve가 정상적으로 실행되면 초록색 상자가 나옴
    //      => npx serve -s build

    //  4. 상자 안에 적혀있는 주소로 접속




    //  - 배포: 빌드를 통해 생성된 정적인 파일들을 배포하려는 서버에 올리는 과정
    //         서버에 올려두고 serve 같은 명령어를 사용하여 서빙할 수 있게 해두면 인터넷이 되는 곳이라면 해당 서버 주소로 접속하여 미니블로그를 볼 수 있게 됨


}

