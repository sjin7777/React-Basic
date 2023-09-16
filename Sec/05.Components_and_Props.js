'use strict';


///* 1. Components와 Props의 정의 */
if(true) {
    // React의 Components
    //  - React는 모든 페이지가 Components로 구성되어 있고, 하나의 Components는 또다른 여러 Components의 조합으로 구성될 수 있음
    //  - 레고 블록 조립하듯 컴포넌트들을 모아서 개발
    //  - 개념적으로는 JavaScript의 함수와 비슷함. 함수가 입력을 받아서 출력을 내뱉는 것처럼 React Components도 입력을 받아서 정해진 출력을 내뱉음
    //   그렇기에 React Components를 하나의 함수라고 생각하면 더 쉽게 개념을 이해할 수 있음.
    //  - 하지만 React Components는 입력과 출력은 일반적인 JavaScript와는 조금 다름
    //   React Components에서의 입력은 Props이고, 출력은 React element가 됨
    //   즉, React Components가 하는 역할은 어떠한 속성들을 입력을 받아서 그에 맞는 React element를 리턴해주는 것
    //   앞에서의 React element는 React 앱을 구성하는 가장 작은 빌딩 블럭들을 의미하고, JavaScript 객체형태로 존재하며, 화면에 보이는 것을 기술함
    //  - React Components는 만들고자 하는대로 Props. 즉, 속성을 넣으면 해당 속성에 맞춰 화면에 나타난 element를 만들어 줌

    // Props
    //  - React Components의 속성을 의미함
    //  - 붕어빵에 들어가는 재료라고 생각하면 됨(팥, 슈크림, 고구마)
    //   모양은 붕어모양으로 같지만, 속에는 안에 있는 재료도 다르고, 색깔도 각기 다름
    //  - 같은 React Components에서 눈에 보이는 글자나 색깔등의 속성을 바꾸고 싶을 때 사용하는 Components의 속재료
    //  - Components의 모습과 속성을 결정하는 것이 Props이다
    //  - 즉, Props는 컴포넌트에 전달할 다양한 정보를 담고 있는 JavaScript 객체이다
    //   Components에 어떠한 데이터를 전달하고, 전달된 데이터에 따라 다른 모습의 Element를 화면에 렌더링하고 싶을 떄, 해당 데이터를 Props에 넣어서 전달하는 것

}


///* 2. Props의 특징 및 사용법 */
if(true) {
    /* Props의 특징 */
    // Read-Only
    //  - 읽기 전용 (읽을 수만 있음. 즉 값을 변경할 수 없음)
    //  - Props의 값은 React Components가 element를 생성하기 위해서 사용하는 값인데, element를 생성하는 도중에 Props 값이 갑자기 바뀌게 되면 제대로된 element를 생성할 수 없음
    //   (붕어빵은 다 구워졌는데 속재료를 바꿀 수 없음)
    
    //  - 다른 Props의 값으로 element를 생성하려면?
    //      => 새로운 값을 컴포넌트에 전달하여 새로 element를 생성해야 함
    //        이 과정에서 element가 다시 렌더링 되는 것

    //  - JavaScript 함수의 속성
    {
        // 이 함수는 a와 b라는 두개의 파라미터를 받고나서 그 두개의 합을 리턴하는 함수
        // 이 함수에서는 a와 b라는 파라미터의 값을 변경하지 않고 있음
        // 그리고 a와 b의 파라미터 집합의 값이 같은 경우에는 항상 같은 값을 리턴할 것임
        // 이러한 함수를 'Pure' 하다 라고 함. 말 그대로 함수가 순수하다는 의미 
        // 즉, 입력값(input)을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값(output)을 리턴한다는 의미
        function sum(a, b) {
            return a + b;
        }

        // 이 함수는 account와 amount라는 두개의 파라미터를 받고나서 account의 total 값에서 amount를 빼는 함수
        // 즉, 계좌에서 출금하는 함수로 은행 계좌 정보와 총액을 파라미터로 받아서 계좌에 현재 총 잔액을 나타내는 total에서 출금할 금액인 amount를 빼는 것
        // 이 함수는 입력값(input)으로 받은 account의 값을 변경했으므로 'Impure'하다 라고 함. 말 그대로 함수가 순수하지 않다는 의미
        function withdraw(account, amount) {
            account.total -= amount;
        }
    }
    
    //  - 모든 React Components는 그들의 Props에 관해서는 Pure 함수 같은 역할을 해야 한다
    //  - 즉, 모든 React Components는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과(element)를 보여줄 것
    //  - React Components가 JavaScript의 함수와 같은 개념이기에 React Components에 입력으로 들어오는 Props는 JavaScript 함수의 파라미터와 같음
    //  - 함수가 pure하다는 것은 함수의 입력값인 파라미터를 바꿀 수 없다는 의미를 포함하고 있기 때문에, React Components에서는 Props를 바꿀 수 없다는 의미가 됨
    //  - 그리고 pure 함수는 같은 입력값에 대해서는 항상 같은 결과를 보여줘야 하기 때문에 React Components 관점에서 같은 Props에 대해서 항상 같은 결과를 보여줘야 한다는 의미가 됨
    //   여기서의 결과는 React element를 의미함 



    /* Props 사용법 */
    // Props는 Components에 전달할 다양한 정보를 담고 있는 JavaScript 객체이다
    // Components에 Props 객체를 전달하기 위해서는?
    
    // 1. JSX를 사용하는 경우
    {
        //  - key와 value로 이루어진 키값쌍의 형태로 Components에 props를 넣을 수 있음
        //  - 이 코드에는 App Components가 나오고, 그 안에서 Profile Components를 사용하고 있음
        //  - Profile Components에 name, introduction, viewCount라는 세가지 속성들을 넣어줌
        //  - 각 속성에 값을 넣을 때, 중괄호를 사용한 것과 사용하지 않은 것에 대한 차이에 대해서 알고 있어야 함 
        //      => name, introduction은 중괄호를 사용하지 않았음 (문자열이기 때문)
        //      => viewCount - 중괄호를 사용함
        //  - JSX는 문자열 이외의 정수, 변수, 다른 Components가 들어갈 경우에는 중괄호를 사용하여 감싸주어야 함
        //   문자열도 중괄호로 감싸주어도 되긴 함
        function App(props) {
            return (
                <Profile
                    name="소플"
                    introduction="안녕하세요, 소플입니다."
                    viewCount={1500}
                />
            );
        }
        // 이런 식으로 작성하면 속성의 값들이 모두 Profile Components에 Props에 전달되며
        // Props는 이와 같은 JS 객체가 됨
        /* 
            {
                name: "소플",
                introduction: "안녕하세요, 소플입니다.",
                viewCount: 1500
            }
         */

    }
    // Props의 중괄호를 사용해서 이와 같이 Props의 값으로 Components도 넣을 수 있음
    // Layout Components의 Props로는 정수값을 가진 width, height와, React element인 header, footer가 들어오게 됨
    // 이렇게 JSX를 사용하게 되면 간단하게 Components에 props를 넣을 수 있음
    {
        function App(props) {
            return (
                <Layout 
                    width={2560}
                    height={1440}
                    header={
                        <Header title="소플의 블로그입니다." />
                    }
                    footer={
                        <Footer />
                    }
                />
            );
        }
    }


    // 2. JSX를 사용하지 않는 경우
    // React의 createElement() 함수 사용
    {
        // [props]부분에 JS 객체를 넣으면, 그게 해당 Component의 props가 됨
        React.createElement(
            type,
            [props],
            [...children]
        )

        // 위에서 JSX를 사용한 Profile Components를 JSX를 사용하지 않고 코드 작성해보기 
        React.createElement(
            // type: Components의 이름
            Profile,
            // [props]: JS 객체
            {
                name: "소플",
                introduction: "안녕하세요, 소플입니다.",
                viewCount: 1500
            },
            // [...children]: 하위 Components가 없기 때문에 null로 입력
            null
        )
    }



}


///* 3. Component 만들기 및 렌더링 */
if(true) {
    /* React에서의 Components는 Function Component와 class Component로 나뉨 */
    // 1. Function Component
    //  - 주로 사용
    //  - 개선하면서 개발된 것 => Hooks (리액트 개발시 필수적)
    // 2. class Component
    //  - 초기때 사용


    // 1. Function Component
    //  - 모든 React Component는 Pure 함수와 같은 역할을 해야함
    //   즉, React의 Component를 일종의 함수라고 생각한다는 의미
    {
        // 예시
        // 이 함수는 하나의 props 객체를 받아서 인사말이 담긴 React element를 리턴하기 때문에 React Component라고 할 수 있음
        // 그리고 함수 Component 라고 함
        // 함수 Component는 이처럼 간단한 코드인 것이 장점임
        function Welcome(props) {
            return <h1>안녕, {props.name}</h1>
        }
    }


    // 2. class Component
    //  - JavaScript ES6에 class를 사용하여 만들어진 형태의 Component
    //  - class Component는 function Component에 비해 몇 가지 추가적인 기능을 가지고 있음
    {
        // 예시
        // 위에 있는 function Component와 동일한 역할을 하는 Component를 class 형태로 만든 것
        // function Component와의 가장 큰 차이점
        //      => React의 모든 class Component는 React.Component를 상속받아서 만든다
        // 여기서는 React.Component라는 클래스를 상속받아서 welcome이라는 클래스를 만들었고, 이는 React.Component를 상속받았기 때문에 결과적으로 React의 Component가 되는 것
        class Welcome extends React.Component {
            render() {
                return <h1>안녕, {this.props.name}</h1>
            }
        }
    }



    /* Component의 이름 */
    //  - Component 이름은 항상 대문자로 시작해야 함
    //   (React에서는 소문자로 시작하는 Component를 DOM 태그로 인식하기 때문)
    {
        // HTML div 태그로 인식
        // DOM 태그를 사용하여 element를 만든 것 
        const element = <div />
    }
    {
        // Welcome이라는 리액트 Component로 인식
        // 사용자가 정의한 Welcome이라는 Component를 사용한 element
        const element = <Welcome name="인제"/>
    }



    /* Component 렌더링 */
    // 두 코드는 React의 element 코드를 만들어내고, 이 element를 렌더링하면 됨
    {
        // DOM 태그를 사용한 element
        const element = <div />
    }
    {
        // 사용자가 정의한 Component를 사용한 element
        const element = <Welcome name="인제"/>
    }

    // 실제 렌더링하는 코드
    {
        // Welcome이라는 함수 Component 선언
        function Welcome(props) {
            return <h1>안녕, {props.name}</h1>
        }

        const element = <Welcome name="인제" />;

        // Welcome의 name이 "인제"라는 값을 가진 element를 파라미터로 해서 ReactDOM.render()함수를 호출
        //  => React는 Welcome function Component에 {name:"인제"} props를 넣어서 호출하고 그 결과로 React element가 생성됨
        //    이렇게 생성된 element는 최종적으로 React DOM을 통해 실제 DOM에 효과적으로 업데이트되고, 브라우저를 통해 볼 수 있게 됨
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    }
}


///* 4. Component 합성과 추출 */
if(true) {
    /* Component 합성 */
    //  - 여러 개의 Component를 합쳐서 하나의 Component를 만드는 것
    //  - React는 Component안에 또 다른 Component를 쓸 수 있기 때문에 복잡한 화면을 여러 개의 Component로 나눠서 구현이 가능하다
    {
        // Welcome Component를 사용해서 Component 합성을 하는 예제
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>
        }

        // props인 name의 값을 다르게 해서 Welcome Component를 여러번 사용
        // App Component는 Welcome Component를 세개 포함하고 있는 Component가 됨
        //  => App Component안에 3개의 Welcome Component가 있고, 
        //    각각의 Welcome Component는 각기 다른 props를 가지고 있음
        //    이렇게 App Component를 root로 해서 하위 Component들이 존재하는 형태가 React만으로 구성되는 App의 기본적인 구조이다
        //    만약 기존에 있던 웹 페이지에 React를 연동한다면, root node가 하나가 아닐 수도 있기 때문에 이런 구조가 아닐 수도 있음
        // 이런 식으로 여러 개의 Component를 합쳐서 또 다른 Component를 만드는 것을 Component 합성이라고 함
        function App(props) {
            return (
                <div>
                    <Welcome name="Mike" />
                    <Welcome name="Steve" />
                    <Welcome name="Jane" />
                </div>
            );
        }

        ReactDOM.render(
            <App />,
            document.getElementById('root')
        )
    }



    /* Component 추출 */
    // Component 합성과 반대로, 복잡한 Component를 쪼개서 여러 개의 Component로 나누는 것
    // 큰 Component에서 일부를 추출해서 새로운 Component를 만든다는 의미 (큰 컴포넌트를 산산조각 내자)
    // Component 추출을 잘 활용할 시에는
    //  - Component의 재사용성 향상
    //      => Component가 작아질수록 해당 Component의 기능과 목적이 명확해지고 props도 단순해지기 때문에 다른 곳에서 사용할 수 있는 확률이 높아지기 때문
    //  - 개발 속도 향상
    {
        // Component를 추출하는 예시
        // Comment Component는 댓글을 표시하기 위한 Component
        // 내부에 작성자의 프로필이미지와 이름, 댓글 내용과 작성일을 포함하고 있음
        // Comment의 props는 아래에 있는 props와 같은 형태이다
        function Comment(props) {
            return (
                <div className="comment">
                    <div className="user-info">
                        <img className="avatar"
                            src={props.author.avatarUrl}
                            alt={props.author.name}
                        />
                        <div className="user-info-name">
                            {props.author.name}
                        </div>
                    </div>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }

        props = {
            author: {
                name: "소플",
                avatarUrl: "https://...",
            },
            text: "댓글입니다.",
            date: Date.now(),
        }


        // 1. Avatar 추출하기
        // Comment Component에서는 img 태그를 사용하여 사용자의 프로필 이미지를 표시하고 있음 
        // 이 부분을 추출해서 Avatar라는 별도의 Component로 만들어보기
        /* 
            <img className="avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
            /> 
        */

        // 사용자의 프로필 이미지를 나타내는 부분을 Avatar Component로 추출한 것
        // props의 기존에 사용하던 author 대신 조금 더 보편적인 의미를 가지고 있는 user를 사용함
        // 보편적인 단어를 사용하는 것은 재사용성 측면을 고려한 것
        // 다른 곳에서 이 Component를 사용할 때 props에 들어갈 속성들이 의미상 큰 차이없이 사용할 수 있게 하기 위함
        function Avatar(props) {
            return (
                <img className="avatar"
                    src={props.user.avatarUrl}
                    alt={props.user.name}
                />
            )
        }
        // 추출한 Avatar Component를 실제 Comment Component에 반영하기 
        function Comment(props) {
            return (
                <div className="comment">
                    <div className="user-info">
                        <Avatar user={props.author} />
                        <div className="user-info-name">
                            {props.author.name}
                        </div>
                    </div>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }



        // 2. UserInfo 추출하기
        // Comment Component에서는 div 태그를 사용하여 사용자의 정보를 나타냄
        // 이 부분을 추출해서 UserInfo라는 별도의 Component 만들어보기
        /*
            <div className="user-info">
                <Avatar user={props.author} />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
         */

        // 사용자의 정보를 담고 있는 부분을 UserInfo Component로 추출한 것
        // 1에서 추출한 Avatar Component도 함께 추출됨
        // 또한, props의 author 대신 보편적인 의미를 가지고 있는 user를 사용
        function UserInfo(props) {
            return(
                <div className="user-info">
                    <Avatar user={props.user}/>
                    <div className="user-info-name">
                        {props.user.name}
                    </div>
                </div>
            );
        }
        // 추출한 UserInfo Component를 실제 Comment Component에 반영하기 
        function Comment(props) {
            return (
                <div className="comment">
                    <UserInfo user={props.author}/>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }


        // 지금까지 추출한 Component를 보면
        // Comment Component ⊃ UserInfo Component ⊃ Avatar Component 인 구조
        // 기능단위로 구분하는 것이 좋고, 재사용이 가능한 형태로 추출하는 것이 좋음
        // 재사용이 가능한 Component를 많이 가지고 있을수록 개발 속도가 빨라짐
    }

}


///* 5. 댓글 컴포넌트 만들기 */
if(true) {
    /* 댓글 컴포넌트 만들기 */
    // 1. VSCode > my-app > src > 'chapter_05' 폴더 생성
    
    // 2. VSCode > my-app > src > chapter_05 > 'Comment.jsx' 파일 생성 후 강의 내용 작성
    //  - 댓글 Component
    
    // 3. VSCode > my-app > src > chapter_05 > 'CommentList.jsx' 파일 생성 후 강의 내용 작성
    //  - 댓글 목록 Component
    
    // 4. 만든 CommeentList Component를 실제 화면에 렌더링하기 위해서 index.js 파일 수정
    
    // 5. 코드 작성이 끝났으므로 실제 React 애플리케이션 실행
    //  - VS Code > Terminal > New Terminal

    // 6. Terminal에 명령어 실행
    //  - npm 명령어를 이용해서 my-app 폴더 내부로 이동
    //      => cd my-app
    //  - npm 명령어를 이용해서 실제 프로젝트 디렉토리 내부에 있는 package.json 파일에 있는 script를 실행
    //      => npm start

    // 7. 잠시 후 http://localhost:3000/ 웹 브라우저가 접속되어 화면에 뜨는지 확인
    //  - 리액트 버전 문제때문인지 강의에 나온 코드로는 빈 화면만 뜸. 개발자도구로 확인하니 콘솔에 에러 떠있음
    //   Uncaught TypeError: react_dom_client__WEBPACK_IMPORTED_MODULE_1__.render is not a function
    //  - 댓글보며 수정했고 잘 나옴
    

    
    // 8. Comment Component에 스타일 입히기
    //  - Comment.jsx 파일에 css 코드 추가
    //  - Comment Component 코드 변경



    // 9. Comment Component에 Props 추가하기
    //  - Comment.jsx 파일 코드 변경
    //  - 댓글 작성자 이름(props.name)과 댓글 내용(props.comment)을 동적으로 바꾸기 위해 Props를 추가함
    //  - {props.name}, {props.comment}

    // 10. CommentList Component에 props 추가
    //  - CommentList.jsx 파일 코드 변경
    //  - CommentList에서 Comment Component에 name값과 comment값을 작성하여 전달



    // 11. Comment 데이터를 별도의 객체로 분리하기
    //  - 댓글 데이터를 별도의 객체로 분리해서 동적으로 받아온 데이터를 표시할 수 있는 구조로 만들어보기
    //  - CommentList. jsx 파일 코드 변경
    //  11-1. comments 배열 생성 후 댓글 데이터를 담고 있는 객체들을 넣어줌
    //  11-2. JavaScript의 map 함수를 사용해서 각 댓글 객체에 대해서 Comment Component를 리턴
    //  11-3. 화면을 확인해보면 Comments 배열 댓글 객체의 수만큼 Comment Component가 렌더링 된 것을 확인할 수 있음

}

