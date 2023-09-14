'use strict';



///* 1. Elements의 정의와 생김새 */
if(true) {
    /* Elements */
    //  - 어떤 물체를 구성하는 성분
    //  - 그렇기에 React Element도 React 앱을 구성하는 요소를 의미
    //  - Elements are the smallest building blocks of React apps
    //   : Elements는 리액트 앱의 가장 작은 빌딩 블럭들을 의미
    //     즉, 리액트 앱을 구성하는 가장 작은 블록들
    
    // createElements(): element를 생성해주는 함수
    // DOM Elements: HTML요소를 나타냄 (실제로 화면에서 볼 수 있는 것)
    
    // React Elements: Dom Elements의 가상 표현
    //  - Dom Elements는 React Elements에 비해서 많은 정보를 담고 있기 때문에 상대적으로 크고 무거움
    //  - React Elements는 화면에서 보이는 것들을 기술하여 Elements가 기술한 내용을 토대로 실제 화면에서 보게 되는 DOM Elements가 만들어짐
    {
        // JSX를 사용하여 작성된 코드
        // 대입연산자의 오른쪽 부분은 React의 createElements 함수를 사용하여 Elements를 생성하고,
        // 이렇게 생성된 것이 React Elements가 된다
        // React는 이 Elements를 이용하여 실제 화면에서 보게 될 DOM Elements를 생성함
        const element = <h1>Hello World</h1>
    }



    /* Elements의 생김새 */
    //  - 리액트 Elements는 자바스크립트 객체 형태로 존재
    //  - Elements는 Componets의 유형과 속성 및 내부에 모든 자식에 대한 정보를 포함하고 있는 일반적인 JS 객체임
    //   이 객체는 마음대로 변경할 수 없는 불변성을 가지고 있음(한번 생성되면 바꿀 수 없음)
    {
        // Elements의 실제 모슴
        // 버튼을 나타내기 위한 Elements로, 단순히 JS 객체임을 알 수 있음
        // type에 HTML 태그이름이 문자열로 들어가는 경우 Elements는 해당 태그 이름을 가진 DOM 노드를 나타내고, props는 속성에 해당함 
        const element = {
            type: 'button',
            props: {
                className: 'bg-green',
                children: {
                    type: 'b',
                    props: {
                        children: 'Hello, elements!'
                    }
                }
            }
        }

        // 위 Elements가 실제로 렌더링 된다면 이와 같은 DOM Elements가 될 것
        /* 
            <button class="bg-green">
                <b>
                    Hello, elements!
                </b>
            </button>
        */
    }

    // Elements type에 html 태그 이름이 문자열로 들어가는 것이 아닌 경우
    {
        // React의 Component Elements를 나타낸 것으로 이 역시도 일반적인 JS 객체이다
        // 다만 위 element와 다른건 type이 문자열로 되어 있는 HTML 태그가 아닌 React Component의 이름이 들어가 있음
        // 이처럼 React element는 JS 객체 형태로 존재함
        // 그리고 이 객체를 만드는 역할을 하는 것이 createElement 함수이다
        {
            const element = {
                type: Button,
                props: {
                    color: 'green',
                    children: 'Hello, element!'
                }
            }
        }

        // createElement()함수를 호출할 때 필요한 파라미터 3개
        //  - type: HTML 태그 이름이 문자열로 들어가거나, 또 다른 React Component가 들어감
        //          > HTML 태그가 아닌 React Component를 넣게 된다면?
        //              - 모든 React Component는 최종적으로 HTML 태그를 사용하게 되어있음 
        //              - 하나의 Component는 여러 개의 자식 Component를 포함할 수 있고, 자식 Component를 보내게 되면, 결국은 HTML 태그가 나오게 됨
        //  - [props]: Elements의 속성
        //  - [...children]: 해당 Elements의 자식 Elements 
        {
            React.createElement(
                type,
                [props],
                [...children]
            )
        }

        // 실제로 createElement가 동작하는 과정
        {
            // Button Component
            function Button(props) {
                return (
                    <button className={`bg-${props.color}`}>
                        <b>
                            {props.children}
                        </b>
                    </button>
                )
            }

            // ConfirmDialog Component
            // ConfirmDialog Component가 Button Component를 포함하고 있음
            function ConfirmDialog(props) {
                return (
                    <div>
                        <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
                        <Button color="green">확인</Button>
                    </div>
                )
            }

            // ConfirmDialog의 Element의 생김새
            const element1 = {
                type: 'div',
                props: {
                    children: [
                        // 첫번째 children
                        // type이 HTML 태그 중의 하나인 'p' 태그이므로 곧바로 렌더링 될 수 있는 상태
                        {
                            type: 'p',
                            props: {
                                children: '내용을 확인하셨으면 확인 버튼을 눌러주세요'
                            }
                        },
                        // 두번째 children
                        // type이 HTML 태그가 아니라, React Component의 이름인 Button
                        // 이 경우에 React는 Button Component의 Element를 생성해서 합치게 됨
                        {
                            type: Button,
                            props: {
                                color: 'green',
                                children: '확인'
                            }
                        }
                    ]
                }
            }

            // 최종적인 Element 모습
            // Component 렌더링을 위해서 모든 Component가 createElement 함수를 통해 element로 변환됨
            const element2 = {
                type: 'div',
                props: {
                    children: [
                        {
                            type: 'p',
                            props: {
                                children: '내용을 확인하셨으면 확인 버튼을 눌러주세요'
                            }
                        },
                        {
                            type: 'button',
                            props: {
                                className: 'bg-green',
                                children: {
                                    type: 'b',
                                    props: {
                                        children: '확인'
                                    }
                                }
                            }
                        }
                    ]
                }
            }


        }
    }

}



///* 2. Elements의 특징 */
if(true) {
    /* Elements의 특징 */
    //  - React elements are immutable(불변성)
    //      > 불변성: 변하지 않는 성질
    //          - 즉, element가 불변성을 가지고 있다는 것은 한번 생성된 element는 변하지 않는다는 것을 의미함
    //          - Elements 생성 후에는 children이나 attributes를 바꿀 수 없음
    //  - React Elements는 눈에 보이는 것을 기술한다고 했는데, Elements가 변할 수 없다면, 화면 갱신이 안 되는 것은 아닌가?
    //      > Elements는 다양한 모습으로 존재할 수 있지만, 한번 생성된 다음에는 변경이 불가능하다는 뜻
    //  - 화면에 변경된 Elements를 보여주기 위해서는?
    //      > 기존 Elements를 변경하는 것이 아니라 새로운 Elements를 만들어야 함
    //        새로운 Elements를 만들어서 기존 Elements와 바꿔치기 하는 것
    //      > 화면에 새로운 내용을 보여주기 위해서 Virtual DOM은 변경된 부분(State Change)을 계산(Compute Diff)하고, 해당 부분만을 다시 렌더링함(Re-render)
    //      > Elements는 불변성을 가지고 있기 때문에 화면에 새로운 내용을 보여주기 위해서는 새로운 Elements를 만들어 기존 Elements가 연결되어 있는 부분을 바꿔서 달아줌
    //  - Elements가 새롭게 생성된다는 것을 이해하고 있으면 원리를 잘 이해할 수 있고 효율적으로 개발할 수 있음



    /* Elements 렌더링하기 */
    //  - Elements 생성한 이후에 실제로 화면에 보여주기 위해서는 렌더링이라는 과정을 거쳐야 함
    //  - Elements를 렌더링하려면?
    {
        // Root DOM Node
        // 모든 리액트 앱에 필수적으로 들어가는 정말 중요한 코드
        // 실제로 div 태그안에 React Elements들이 렌더링되며, 그렇기에 이것을 Root DOM Node라고 부름
        // 이 div 태그 안에 있는 모든 것이 React DOM에 의해서 관리되기 때문
        // 오직 React만으로 만들어진 모든 웹 사이트들은 단 하나의 Root DOM Node를 가지게 됨
        // 반면에, 기존에 있던 웹 사이트에 추가적으로 React를 연동하게 되면 여러 개의 분리된 수많은 Root DOM Node들을 가질 수도 있음
        <div id="root"></div>


        // root div에 실제 React Elements를 렌더링 하기 위해서는 먼저 element를 생성하고, 생성된 element를 root div에 렌더링
        // 렌더링을 위해 ReactDOM에 render라는 함수를 사용
        //      > render(arg1, arg2)
        //          - arg1: React Elements를 넣음
        //          - arg2: HTML Elements를 넣음. 즉 DOM Elements에 렌더링하는 역할을 함
        // React Elements와 DOM Elements는 다른 개념임을 유의하고 기억하기
        //      > React Elements: React Virtual DOM에 존재
        //      > DOM Elements: 실제 브라우저 DOM에 존재
        // 결국 React Elements가 렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있음
        const element = <h1>안녕 리액트~</h1>;
        ReactDOM.render(element, document.querySelector('#root'));
    }



    /* 렌더링된 Elements를 업데이트 하기 */

    // 매초마다 새로운 시간이 나오게 됨
    {
        // tick()함수는 현재 시간을 포함하고 있는 Elements를 생성하여 root div에 렌더링하는 역할을 함
        function tick() {
            const element = (
                <div>
                    <h1>안녕~ 리액트!</h1>
                    <h2>현재 시간: {new Date().toLocaleDateString()}</h2>
                </div>
            );
            
            ReactDOM.render(element, document.querySelector('#root'));
            
        }
        
        // JS의 setInterval() 함수를 이용하여 tick()함수를 매초(1000ms = 1초)마다 호출
        setInterval(tick, 1000);
    }
    // tick()함수가 호출될 때마다 기존 element를 변경하는 것이 아니라 새로운 element를 생성해서 바꿔치기 하는 것
    // 개발자도구 > Elements에서 보면 갱신되는 부분만 반짝임
    // 매초 새로운 Elements가 생성되어 기존 Elements가 교체되면서 내용이 변경되고, 변경된 부분에 반짝이는 효과가 나타나는 것
    // React Elements의 불변성 때문에 Elements를 업데이트 하기 위해서는 새로 만들어야 한다는 것을 꼭 기억하기
}



///* 3. 시계 만들기 */
if(true) {
    // 1. my-app > src > 'chapter_04' 폴더 생성
    
    // 2. my-app > src > chapter_04 > 'Clock.jsx' 파일 생성 후 강의 내용 작성
    //  - Clock 이라는 이름의 React 함수 Component 생성
    //  - Clock Component는 현재 시간을 출력해주는 간단한 Component임
    
    // 3. 만든 Component를 실제 화면에 렌더링하기 위해서 index.js 파일 수정
    //  - setInterval() 함수를 이용해서 1000ms(1초)마다 새롭게 Clock Component를 root div에 렌더링하도록 함
    //  - 이렇게 하면 매초 Clock Component의 element가 새롭게 생성됨 
    
    // 4. 코드 작성이 끝났으므로 실제 React 애플리케이션 실행
    //  - VS Code > Terminal > New Terminal

    // 5. Terminal에 명령어 실행
    //  - npm 명령어를 이용해서 my-app 폴더 내부로 이동
    //      => cd my-app
    //  - npm 명령어를 이용해서 실제 프로젝트 디렉토리 내부에 있는 package.json 파일에 있는 script를 실행
    //      => npm start

    // 6. 잠시 후 http://localhost:3000/ 웹 브라우저가 접속되어 화면에 뜨는지 확인
    //  - 리액트 버전 문제때문인지 강의에 나온 코드로는 에러떠서 댓글보며 수정했음
    //  - 개발자도구 > Elements > root div > h2 > 매초 시간이 변경되면서 변경되는 부분이 깜빡이는지 확인


}