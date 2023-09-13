'use strict';

///* 1. JSX의 정의와 역할 */
if(true) {
    /* JSX */
    //  - react를 사용하여 개발할 때 거의 필수적으로 사용
    //  - A syntax extension to JavaScript (JS의 확장 문법)
    //  - JSX = JavaScript + XML/HTML
    


    /* JSX 코드 */
    {
        const element = <h1>Hello, world</h1>
    }



    /* JSX 역할 */
    // - XML/HTML 코드를 JavaScript로 변환하는 과정을 거치게 됨
    //  그렇기 때문에 실제로 JSX 코드를 작성해도, 최종적으로는 JavaScript 코드로 나옴
    // - React.createElement(): JSX 코드를 JavaScript코드를 변환하는 역할
    {
        React.createElement(
            type,
            [props],
            [...children]
        )
    }

    
    /* JSX 사용 예시 */
    // JSX를 사용하지 않은 경우에는 순수 JS코드만을 이용하여 JSX로 짠 코드와 동일한 역할을 하게 짠 코드

    // 1-1. JSX를 사용한 코드
    {
        // 1. Hello라는 이름을 가진 React.Component
        class Hello extends React.Component {
            // 3. JSX를 ReactDOM의 render() 함수를 사용해서 실제 화면에 렌더링
            render() {
                // 2. Component 내부에서 JS와 HTML 코드가 결합된 JSX를 사용
                return <div>Hello {this.props.toWhat}</div>;
            }
        }

        ReactDOM.render(
            <Hello toWhat="World" />,
            document.getElementById('root')
            )
    }

    // 1-2. JSX를 사용하지 않은 코드
    {
        class Hello extends React.Component {
            render() {
                return React.createElement('div', null, `Hello ${this.props.toWhat}`);
            }
        }

        ReactDOM.render(
            React.createElement(Hello, { toWhat: 'World'}, null),
            document.getElementById('root')
        )
    }
    // 즉, JSX 문법을 사용하면 React에서는 내부적으로 모두 createElement()함수를 사용하도록 변환하게 된다
    // 그리고 최종적으로 crateElement()함수를 호출한 결과로 JavaScript 객체가 나오게 됨


    // 2-1. JSX를 사용한 코드
    {
        // 내부적으로는 createElement()함수를 사용하도록 변환됨
        const element = (<h1 className="greeting">Hello, World!</h1>);
    }
    // 2-2. JSX를 사용하지 않은 코드
    {
        const element = React.createElement(
            'h1',
            { className: 'greeting'},
            'Hello, world'
        )
    }
    // 2-3. React.createElement() 호출의 결과
    // JavaScript 객체가 나오게 됨
    // React는 이 객체들을 읽어서 DOM을 만드는데에 사용하고, 항상 최신 상태로 유지함
    // React에서 이 객체를 element라고 함
    // 함수의 이름이 createElement이기 때문에 당연히 element를 생성해서 리턴함
    {
        const element = {
            type: 'h1',
            props: {
                className: 'greeting',
                children: 'Hello, world!'
            }
        }
    }



    /* React.createElement() 함수의 파라미터 */
    // React는 JSX 코드를 모두 createElement() 함수를 사용하는 코드로 변환
    {
        React.createElement(
            type,               // element의 타입(유형), HTML 태그, React Component 등 
            [props],            // 속성
            [...children]       // 현재 element가 포함하고 있는 자식 element
            )
        }

    // React에서 JSX를 쓰는 것이 필수는 아님!
    //  => 이유: 직접 모든 코드를 createElement() 함수를 사용하여 개발하면 되기 때문
    // 다만, JSX를 사용하면 장점들이 많기 때문에 편리하기에 권장함
    
}



///* 2. JSX의 장점 및 사용법 */
if(true) {
    /* JSX의 장점 */
    // 1. 간결한 코드
    {
        // JSX 사용
        <div>Hello, {name}</div>

        // JSX 사용 안함
        React.createElement('div', null, `Hello, ${name}`);
    }

    // 2. 가독성 향상
    //  - 버그를 발견하기 쉬움(유지보수 관점에서도 좋음)

    // 3. Injection Attacks 방어
    //  - Injection Attacks 해킹을 방어함으로써 보안성 향상
    //      > Injection Attacks: 입력창에 문자나 숫자같은 일반적인 값이 아닌 소스코드를 입력하여 해당코드가 실행되도록 만드는 해킹 방법
    //                      - 예> 아이디를 입력하는 입력창에 js코드를 넣었을 경우 그 코드가 그대로 실행됨
    {
        // title이라는 변수에 잠재적으로 보안위험 가능성이 있는 코드가 삽입 
        const titile = response.potentiallyMaliciousInput;

        // 이 코드는 안전합니다
        // 이 JSX코드는 괄호를 사용해서 title 변수를 삽입(임베딩)하고 있음
        // 기본적으로 React DOM은 렌더링하기 전에 삽입(임베딩)된 값을 모두 문자열로 변환함
        // 그렇기 때문에 명시적으로 선언되지 않은 값은 괄호 사이에 들어갈 수 없음
        // 결과적으로 XSS를 방어할 수 있음
        const element = <h1>{title}</h1>

        // 이처럼 JSX를 사용하면 잠재적인 보안위험을 줄일 수 있음
    }



    /* JSX 사용법 */
    // JSX = JavaScript 코드 + XML/HTML (JS 문법을 확장시킨 것이기 때문에 모든 JS 문법을 지원함)
    // XML/HTML + {JavaScript} + XML/HTML 
    // (XML/HTML코드를 사용하다가 중간에 JavaScript 코드를 사용하고 싶으면 중괄호를 이용하여 묶어주면 됨)
    {
        const name = '소플';
        // HTML과 JS가 섞인 형태로 코드를 작성
        // {name}부분이 name이라는 JavaScript 변수를 참조하기 위해 중괄호를 사용한 것
        const element = <h1>안녕 {name}</h1>

        ReactDOM.render(
            element,
            document.getElementById('root')
        )
    }
    {
        // JSX를 사용할 때, XML/HTML 코드 사이에 중괄호를 사용해서 JS 변수나 함수를 사용
        
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: 'S',
            lastName: 'J'
        }

        const element = (
            <h1>
                {/* HTML 코드 사이에 {}를 사용하여 변수가 아닌 formatName(user) 라는 JS 함수를 호출 */}
                Hello, {formatName(user)}
            </h1>
        );

        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    }
    {
        // JSX를 이용해서 사용자 이름에 따라 다른 인사말을 표시하도록 만든 Component
        // 사용자가 존재하면 formatName(user) 함수를 사용하여 formating된 이름을 출력하고,
        // 존재하지 않으면, Stranger라고 출력함
        function getGreeting(user) {
            if(user) {
                return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger</h1>
        }
    }



    /* 태그의 속성(attribute)에 값을 넣는 방법 */
    // HTML 태그 중간이 아닌, 태그의 속성에 값을 넣고 싶다면? 
    //  - 큰따옴표 사이에 문자열을 넣거나, 중괄호 사이에 JS 코드를 넣으면 됨
    {
        // 큰따옴표 사이에 문자열을 넣어서 속성에 값 넣기
        const element = <div tabIndex="0"></div>
    }
    {
        // 중괄호 사이에 JS 코드 넣어서 속성에 값 넣기
        const element = <img src={user.avatarUrl}></img>
    }

    // 그렇기 때문에 JSX에서는 중괄호를 사용하면 무조건 JS코드가 들어간다고 외워두기



    /* JSX를 사용하여 자식(children)을 정의하는 방법 */
    {
        // 평소 HTML코드를 짜듯이 상위 태그가 하위 태그를 둘러싸도록 하면 자연스럽게 children이 정의됨
        // 여기서 div 태그의 children은 h1태그와 h2 태그임
        const element = (
            <div>
                <h1>하이</h1>
                <h2>리액트 공부!</h2>
            </div>
        )
    }
}



///* 3. JSX코드 작성해보기 */
if(true) {
    /* 작성 순서 */
    // 1. 이전에 VS Code로 create-react-app을 이용하여 만든 프로젝트인 my-app 열기 (VS code로 열기)

    // 2. my-app > src에 'chapter_03' 폴더 생성

    // 3. my-app > src > chapter_03에 'Book.jsx' 파일 생성 후 강의에 있는 코드 작성
    //      3-1. Book이라는 이름의 리액트 함수 Component 생성
    //      3-2. Book Component는 props로 name과 numOfPage를 받아서 페이지를 출력하는 Component

    // 4. Book Component를 사용하는 상위 Component 생성
    //  my-app > src > chapter_03에 'Library.jsx' 파일 생성 후 강의에 있는 코드 작성
    //      4-1. Library이라는 이름의 리액트 함수 Component 생성
    //      4-2. Library Component는 총 3개의 Book Component를 렌더링 하고 있음

    // 5. my-app > src > index.js 파일 수정
    //  생성한 Component를 실제로 화면에 렌더링하기 위해서는 index.js 파일을 수정해야 함
    //      5-1. import문을 이용하여 좀전에 생성한 Library Component를 가져온 뒤에 React DOM을 사용하여 root DOM 노드에 렌더링하는 코드
    //          => import Library from './chapter_03/Library';
    //      5-2. root.render() 함수 내용 수정

    // 6. React 애플리케이션 실행
    //  VS Code > Terminal > New Terminal

    // 7. Terminal에 명령어 실행
    //      => npm start
    //  - 에러가 뜬다면 첫번째 방법으로 먼저 위치 이동 후 실행시켜보고, 안되면 두번째 방법으로 재거 후 재설치하여 다시 실행시킴
    //      =>  cd my-app
    //          npm start
    //      =>  npm uninstall -g create-react-app (리액트 앱 제거)
    //          npm install -g create-react-app (리액트 앱 재설치)
    //          npx create-react-app my-app (리액트 앱 실행)
    //          y

    // 8. 잠시 후 http://localhost:3000/ 웹 브라우저가 접속되어 화면에 뜨는지 확인
    //  - 작성한 내용대로 Component들이 웹 브라우저에서 렌더링 되어있는지도 확인하기
    
}