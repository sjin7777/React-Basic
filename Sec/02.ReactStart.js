'use strict';


///* 1. 직접 리액트 연동하기 */
if(true) {
    /* HTML만으로 간단한 웹 사이트 만들기 */
    // HTML은 웹사이트 전체 뼈대를 구성
    // CSS를 사용하여 웹 사이트 스타일링



    /* 웹 사이트에 React.js 추가하기 */
    // 1. 기존 HTML 파일에 DOM Container(=Root DOM Node) 추가하기
    //  - Virtual DOM의 시작점
    //    => <div id="root"></div>


    // 2. 기존 HTML 파일에 script 태그를 사용해서 react의 js 파일들을 가져올 수 있게 해줌
    //     <!-- 리액트 가져오기 (react, react-dom) -->
    //     <script defer src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    //     <script defer src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    
    //     <!-- 리액트 컴포넌트 가져오기 -->
    //     <script defer src="01.MyButton.js"></script>


    // 3. 웹 사이트에 버튼이 생김. 클릭 시 버튼 내용이 변경되는지 확인
    //  - React Component의 state가 변경되었기 때문에 변경되는 것



    /* 정리 */
    // - HTML을 이용한 간단한 웹 사이트를 만들고, 웹 사이트에 React를 추가한 뒤, 실제로 React Component까지 만들어서 렌더링 했음
    // - React를 사용해서 웹 사이트를 만들 때마다, 이러한 환경설정을 매번 한다면 매우 번거로움
    //-  그러한 과정이 필요없이 곧바로 React 웹 애플리케이션을 개발할 수 있도록 프로젝트를 자동으로 생성해주는 게 있는데, 
    //  이를 create-React-app 패키지라고 함

}



///* 2. create-react-app */
if(true) {
    /* create-react-app(cra) */
    //  - 처음부터 react가 적용되어 있는 상태로 개발 시작 
    //  - react로 웹 애플리케이션을 개발하는데 필요한 모든 설정이 되어 있는 상태로, 프로젝트를 생성해주는 도구
    //  - 그렇기 때문에 react로 웹 사이트를 개발할 때에는 create-react-app을 주로 사용함
    //  - cra를 이용하려면
    //      => Node.js v14.0.0 이상
    //      => npm v6.14.0 이상
    //      => VS Code 필요



    /* create-react-app(cra)를 이용하여 프로젝트를 생성하고 실행하는 과정 */
    // 1. cra는 VS Code > Terminal에서 npx 명령어를 이용하여 실행
    //      - npx: execute npm package binaries
    //      - npx는 npm 패키지를 설치한 이후에 곧바로 실행하고, execute까지 해주는 명령어
    //      - 패키지를 정해진 위치에 설치하고, 찾아서 실행하려면 번거롭기 때문에 간편하게 한번에 처리하기 위해 사용
    //      - 새로운 react 애플리케이션을 만들기 위해서 사용할 명령어 (뒤에 생성할 프로젝트의 이름을 넣어줌)
    //          => npx create-react-app <your-project-name>
    //          => 예시> npx create-react-app my-app

    //      - 참고! 만약, 위 명령어를 실행했을 때, 오류가 난다면 이 명령어를 실행하기
    //          - 리액트 제거 후 실행
    //          => npm uninstall -g create-react-app
    //             npx create-react-app my-app
    //             y


    // 2. cd 명령어를 이용하여 1에서 생성한 프로젝트 폴더 안으로 들어감
    //      => cd my-app

    
    // 3. npm start 명령어를 이용하여 react 애플리케이션을 실행함
    //      => npm start


    // 4. 2와 3에서 명령어를 실행하고 조금 기다리면 자동으로 브라우저가 열림 (리액트 로고가 나오고 있는 브라우저)
    //  - http://localhost:3000/ 로 접속하게 됨
    //      > localhost: 현재 내가 사용하고 있는 컴퓨터
    //  - 현재 react 애플리케이션이 local 개발환경에서 실행된 것


}

/*
    
    - 경로 변경(change directory)
        => cd my-app
    
    - 애플리케이션 실행
        => npm start
    
    - 리액트 앱 제거
        => npm uninstall -g create-react-app

    - 리액트 앱 재설치
        => npm install -g create-react-app

    - 리액트 앱 실행
        => npx create-react-app my-app
    
*/
