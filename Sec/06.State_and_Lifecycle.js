'use strict';

///* 1. State와 Lifecycle의 정의 */
if(true) {
    /* State (상태) */
    //  1. React에서의 State는 React Component의 상태를 의미함
    //      - State가 정상/비정상을 나타내는 것이 아닌, React Component의 데이터라는 의미에 더 가까움
    //      - 즉, React Component의 변경 가능한 데이터를 State라고 하며, 
    //       state는 사전에 미리 정해진 것이 아니라 React Component를 개발하는 각 개발자가 직접 정의해서 사용함
    //      - State를 정의할 때 중요한 점은 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다
    //       이유는 state가 변경될 경우 Component가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련없는 값을 포함하면 
    //       불필요한 경우에 Component가 다시 렌더링 되어 성능을 저하시킬 수 있기 때문
    //      - 그렇기 때문에 렌더링과 데이터 흐름에 관련있는 값만 state에 포함해야 하며, 
    //       그렇지 않은 값은 Component의 instance 필드로 정의해야 함

    //  2. React Component의 State는 JavaScript 객체이다
        {
            // LikeButton이라는 React의 class Component를 나타낸 코드

            // class Component의 경우 state를 constructor(생성자)에서 정의함
            // function Component의 경우 state를 useState라는 Hook을 이용하여 정의함
            class LikeButton extends React.Component {
                // 모든 class Component에는 constructor(생성자) 함수가 존재함
                // class가 생성될 때 실행되는 함수 
                constructor(props) {
                    super(props);
                    
                    // 현재 Component의 state를 정의하는 부분
                    this.state = {
                        liked: false
                    };
                }
            }
        }
    //      - state는 직접 수정 할 수 없다 (하면 안 된다)
    //      - 정의된 state는 정의된 이후에 일반적인 JavaScript 다루듯이 직접 수정이 불가능함. 
    //       엄밀히 말하자면, 수정이 가능은 하지만, 수정을 해서는 안 된다
        {
            // state를 직접 수정 (잘못된 사용법)
            this.state = {
                name: 'SJ'
            };

            // setState 함수를 통한 수정 (올바른 사용법)
            this.setState({
                name: 'SJ'
            });
        }
    
    

    
    /* Lifecycle (생명주기) */
    //  1. React Component도 Lifecycle(생명주기)를 가지고 있음
    //   Component가 생성되는 시점과 사라지는 시점이 정해져 있다는 의미

    //  2. Lifecyle Method: 생명주기 함수 (생명주기에 따라 호출되는 class Component의 함수)
    //      componentDidMount() → componentDidUpdate() → componentWillUnmount()

    //  3. React class Component의 Lifecycle (단계별 생명주기)
    //      1. Mounting (출생)
    //          - Component가 생성되는 시점이고 사람으로 말하자면 출생
    //          - Component가 생성되면 constructor(생성자)가 실행됨
    //          - 생성자에서는 Component의 state를 정의함
    //          - Component가 렌더링 되며 이 이후에 componentDidMount() 함수가 호출 됨
    //              => 생명주기가 Mounting일 때, 호출되는 class Component의 함수: componentDidMount()
    //      2. Updating (인생)
    //          - 사람처럼 변화를 겪으면서 여러 번 렌더링 됨. 즉 업데이트 되는 과정임
    //          - 업데이트 과정에서는 
    //           Component의 props가 변경되거나 setState()함수 호출에 의해 state가 변경되거나 forceUpdate()라는 강제 업데이트 함수 호출로 인해 Component가 재렌더링 됨
    //          - 렌더링 이후에 componentDidUpdate() 함수가 호출 됨
    //              => 생명주기가 Updating일 때, 호출되는 class Component의 함수: componentDidUpdate()
    //      3. Unmounting (사망)
    //          - 사람처럼 사라지는 과정
    //          - 상위 Component에서 현재 Component를 더이상 화면에 표시하지 않게 될 때 Unmounting 됨
    //          - Unmounting 직전에 componentWillUnmount() 함수가 호출 됨
    //              => 생명주기가 Unmounting일 때, 호출되는 class Component의 함수: componentWillUnmount()

    //  4. class Component 생명주기에서 알아야 할 점
    //      - Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라짐
}


///* 2. State 사용하기 */
if(true) {
    // 1. VSCode > my-app > src > 'chapter_06' 폴더 생성
    
    // 2. VSCode > my-app > src > chapter_06 > 'Notification.jsx' 파일 생성 후 강의 내용 작성
    //  - Notification 이름의 React.Component를 생성 
    //  - Notification의 constructor부분을 보면, Notification은 state에 아무런 데이터를 가지고 있지 않음

    // 3. VSCode > my-app > src > chapter_06 > 'NotificationList.jsx' 파일 생성 후 강의 내용 작성
    //  - NotificationList Component는 Notification Component를 목록 형태로 보여주기 위한 Component

    //  3-1 NotificationList Component에서 state를 선언하고 사용하는 부분을 주목하여 보기
    //      - constructor(생성자)에 notifications의 이름을 가진 빈 배열을 state에 넣음
    //      - 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화 함
            /*  
                this.state = {
                    notifications: [],
                }
            */
    //  3-2. class Component의 생명주기 중 하나인 componentDidMount() 함수에서는 
    //      JavaScript의 setInterval 함수를 사용하여 매초마다 해당 작업을 수행하고 있음
    //      - 이 작업은 미리 만들어 둔 알림 데이터 배열인 reservedNotifications로부터 알림 데이터를 하나씩 가져와서 
    //       state에 있는 notifications 배열에 하나씩 넣고, 업데이트 함
    //      - state를 업데이트 하기 위해서 setState() 함수를 사용한 것에 주목하기
            /*  
                this.setState({
                    notifications: notifications,
                });
            */
    //      - class Component에서 state를 업데이트 하려면 반드시 setState()함수를 사용해야 함

    // 4. 만든 NotificationList Component를 실제 화면에 렌더링하기 위해서 index.jsx 파일 수정
    //  - NotificationList Component를 import 하여 ReactDOM.render()함수에 넣어주는 코드

    // 5. 코드 작성이 끝났으므로 실제 React 애플리케이션 실행
    //  - VS Code > Terminal > New Terminal

    // 6. Terminal에 명령어 실행
    //  - npm 명령어를 이용해서 my-app 폴더 내부로 이동
    //      => cd my-app
    //  - npm 명령어를 이용해서 실제 프로젝트 디렉토리 내부에 있는 package.json 파일에 있는 script를 실행
    //      => npm start

    // 7. 잠시 후 http://localhost:3000/ 웹 브라우저가 접속되어 화면에 뜨는지 확인
    //  - 에러 떠서 댓글보고 index.js 수정.. 
        /*     
            root.render(
                <React.StrictMode>
                    <NotificationList />
                </React.StrictMode>
            )
        */      
    //  - 리액트 버전 문제때문인지 강의에 나온 코드로는 1초에 메세지가 2개씩 뜸
    //      => NotificationList.jsx에 NotificationList class Component안에 해당 함수 추가
            /*  
                componentWillUnmount() {
                    if(timer) {
                        clearInterval(timer);
                    }
                }
            */
    //  - 수정 후에는 1초마다 메세지가 뜸
    //  - 참고로 콘솔 에러 뜨는데, 강의에서도 에러 뜨고 있음
    //      => react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
}

/* React Developer Tools 사용하기 */
if(true) {
    // 아래 링크에서 크롬 확장 프로그램 다운하기
    //    => https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related
    // 설치 후 개발자도구 보면 각 컴포넌트를 클릭 시 props와 state 확인 가능 (리액트 페이지에서만 가능!)
}

/* Lifecycle method 사용해보기 */
if(true) {
    //  1. Notification.jsx 코드 수정(함수 추가)
    //      - 세가지의 생명주기의 함수들이 호출될 경우 콘솔에 로그를 남기도록 코드 작성
    //      - 해당 함수들은 각각 Component가 mount된 이후, update된 이후, unmount되기 전 호출 됨
            /* 
                componentDidMount() {
                    console.log('componentDidMount() called');
                }

                componentDidUpdate() {
                    console.log('componentDidUpdate() called');
                }

                componentWillUnmount() {
                    console.log('componentWillUnmount() called');
                }
            */
    
    //  2. 1번에서 console.log를 찍었을때, 로그가 중복되어 구분하기 힘드므로, 로그에 id가 함께 나오도록, NotificationList.jsx 수정
    //      - reservedNotifications 배열마다 id 추가
    //      - render() 부분도 key, id 추가하기
    //          => 여기서의 key는 React element들을 구분하기 위한 고유한 값으로, map 함수를 사용할 때 필수적으로 들어가야 함
    //           그렇기에 이걸 작성하기 전에는 콘솔에 에러가 떠있는게 정상임

    //  3. 1번에서 작성한 코드 수정
        /*  
            componentDidMount() {
                console.log(`${this.props.id} componentDidMount() called.`);
            }
            
            componentDidUpdate() {
                console.log(`${this.props.id} componentDidUpdate() called.`);
            }
            
            componentWillUnmount() {
                console.log(`${this.props.id} componentWillUnmount() called.`);
            }
        */

    //  4. NotificationList.jsx에서 componentDidMount() 메서드 수정(추가)
    //  - notifications 비우기
            /*  
                this.setState({
                    notifications: [],
                });
            */
    


    //  - 강의 내용과 다르게 생명주기 뒤죽박죽으로 호출 됨...
}