'use strict';

import { useContext } from "react";
import Toolbar from "../my-app/src/chapter_09/Toolbar";

///* 1. Context란? */
{
    //  - 기존 React 애플리케이션에서는 데이터가 Component의 props를 통해 부모 Component에서 자식 Component로 전달 (단방향)
    //  - 하지만 여러 Component에 걸쳐 자주 사용되는 데이터의 경우에는 기존 방식을 사용하면 코드도 복잡해지고, 사용하기 불편함
    //  - 이를 해결하기 위해 나온 것이 Context
    
    
    /* Context */
    //  - React Component들 사이에서 데이터를 기존의 props를 통해 전달하는 방식이 아니라,
    //   Component 트리를 통해 곧바로 Component로 전달하는 새로운 방식을 제공
    //  - 이를 통해 어떤 Component든지 데이터에 쉽게 접근할 수 있음



    /* Context가 사용되어야 하는 경우 */
    //  - 여러 개의 Component들이 접근해야 하는 데이터
    //      => 사용자의 로그인 여부, 로그인 정보, UI 테마, 현재 언어 등등.. 
    //          - 예1> 웹사이트 상단에 위치한 네비게이션 바에 사용자의 로그인 여부에 따라서 로그인 버튼/로그아웃 버튼을 선택적으로 보여주고 싶은 경우
    //                현재 로그인 상태 데이터에 접근할 필요가 있음
    //  - 기존 방식대로 Component의 props를 통해 넘겨주게 되면 자식 Component의 자식 Component까지 계속 내려가야 할 수도 있음



    /* 기존 방식 vs. Context 방식 */
    //  1. 현재 선택된 테마를 기존 방식을 사용하여 Component의 props로 전달하는 예제
    //      - props를 통해서 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 Component까지의 깊이가 깊어질수록 복잡해짐
    //      - 반복적인 코드를 계속해서 작성해주어야 하기 때문에 비효율적이고 직관적이지도 않음  => context 방식으로 해결
        {
            // 가장 상위 Component
            function App(props) {
                // 'theme' 이라는 props으로 현재 테마인 'dark'를 넘김
                return <Toolbar theme="dark" />
            }

            // Toolbar Component는 ThemedButton Component를 사용하는데, ThemedButton Component에서 현재 테마를 필요로 함
            // 그렇기에 props으로 받은 theme을 하위 Component인 ThemedButton Component에 전달
            function Toolbar(props) {
                // Toolbar Component는 ThemedButton Component에 theme를 넘겨주기 위해서 'theme' prop을 가져야만 함
                // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적임
                return(
                    <div>
                        <ThemedButton theme={props.theme} />
                    </div>
                )
            }

            // 최종적으로 ThemedButton Component에서는 props.theme으로 데이터에 접근하여 버튼에 'dark' 테마를 적용함
            function ThemedButton(props) {
                return <Button theme={props.theme}/>
            }
        }

    //  2. Context를 사용하여 위에 코드와 동일한 기능을 구현
        {
            // React.createContext를 이용하여 Context 생성
            // Context는 데이터를 매번 Component를 통해 전달할 필요 없이 Component 트리로 곧바로 전달하게 해줌
            // 여기에서는 현재 테마를 위한 Context를 생성하며, 기본값은 'light'
            const ThemeContext = React.createContext("light");

            // Provider를 사용하여 하위 Component들에게 현재 테마 데이터를 전달
            // 모든 하위 Component들은 Component 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있음
            // 여기에서는 현재 테마값으로 'dark'를 전달하고 있음
            function App(props) {
                // Context를 사용할 Component의 상위 Componet에서 Provider로 감싸줌
                // 이렇게 감싸주게 되면, Provider의 모든 하위 Component가 얼마나 깊이 위치해 있는지 관계없이 Context의 데이터를 읽을 수 있음
                return (
                    <ThemeContext.Provider value="dark">
                        <Toolbar />
                    </ThemeContext.Provider>
                );
            }

            // 중간에 위치한 Toolbar Component는 테마 데이터를 하위 Component로 전달할 필요 없음 
            function Toolbar(props) {
                return (
                    <div>
                        <ThemedButton />
                    </div>
                );
            }

            // React는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사요함
            // 만약 해당하는 Provider가 없을 경우 기본값(여기에서는 'light')을 사용함
            // 여기에서는 상위 Provider가 있기 때문에 현재 테마값은 'dark'
            function ThemedButton(props) {
                return (
                    <ThemeContext.Consumer>
                        {value => <Button theme={value}/>}
                    </ThemeContext.Consumer>
                )
            }
        }



    /* Context를 사용하기 전에 고려할 점 */
    //  - Context는 다른 레벨의 많은 Component가 특정 데이터를 필요로 하는 경우에 주로 사용하지만, 그렇다고 해서 무조건 Context를 사용하는 것이 좋은건 아님
    //  - Componet와 Context가 연동되면 재사용성이 떨어지기 때문
    //  - 그렇기 때문에 다른 레벨의 많은 Component가 데이터를 필요로 하는 경우가 아니라면 기존에 사용하던 방식대로 props를 통해 데이터를 전달하는 Component Composition 방법이 더 적합함
    //  



}



///* 2. Context API */
{
    /* Context 사용 방법 */
    //  1. React.createContext()를 사용하여 Context 생성
    //      - React에서 렌더링이 일어날 때, Context 객체를 구독하는 하위 Component가 나오면 현재 Context의 값을 가장 가까이에 있는 상위 레벨의 Provider로부터 받아오게 됨
    //      - 만약, 상위 레벨에 매칭되는 Provider가 없다면 이 경우에만 기본값이 사용됨
    //      - 기본값은 Provider 없이 Component를 테스트할 때 유용함
    //      - 참고로 기본값으로 Undefined를 넣으면 기본값이 사용되지 않음
    //          => React.createContext()
            {
                const MyContext = React.createContext(기본값);
            }


    //  2. 하위 Component들이 해당 Context의 데이터를 받을 수 있도록 하기 위해 Context.Provider 사용 
    //      - Provider: 제공자 (React에서는 데이터를 제공해주는 Component라는 의미로 이해하기)
    //      - 모든 Context 객체는 Provider라는 React Component를 가지고 있음
    //      - Context.Provider Component로 하위 Component들을 감싸주면 모든 하위 Component들이 해당 Context의 데이터에 접근할 수 있게 됨
            {
                // Provider Component에는 value라는 prop이 있고, 이것은 Provider Component 하위에 있는 Component들에게 전달됨
                // 하위 Component들이 이 값을 사용하게 되는데, 이 하위 Component들이 데이터를 소비한다는 뜻에서 Consumer Component라고 부름
                <MyContext.Provider value={/* some value */value}> ... </MyContext.Provider>
            }
            
    //  - Consumer Component는 Context 값의 변화를 지켜보다가 만약 값이 변경되면 재렌더링 됨
    //  - 하나의 Provider Component는 여러 개의 Consumer Component와 연결될 수 있으며 여러 개의 Provider Component는 중첩되어 사용될 수 있음
    //  - Provider Component로 감싸진 모든 Consumer Component는 Provider의 value prop이 바뀔 때마다 재렌더링 됨
    //  - 값이 변경되었을 때, 상위 Component가 업데이트 대상이 아니더래도 하위 Component가 context를 사용한다면 하위 Component에서는 업데이트가 일어남
    //      => 참고로, 값의 변화를 판단하는 기준은 JS 객체의 object.is() 와 같은 방식으로 판단함



    /* Provider value에서 주의해야 할 사항 */
    //  - Provider Component가 재렌더링될 때마다 모든 하위 Consumer Component가 재렌더링 됨
    //  - Context는 재렌더링 여부를 결정할 때 reference 정보를 사용하기 때문에 Provider의 부모 Component가 재렌더링 되었을 경우 의도치 않게 Consumer Component가 재렌더링이 일어날 수 있음
            {
                // Provider Component가 재렌더링 될 때마다 모든 하위 Consumer Component를 재렌더링하게 됨
                //  => value prop을 위한 새로운 객체가 매번 새롭게 생성되기 때문 (value={{ something: 'something' }})
                // 이를 방지하기 위해서는 value를 직접 넣는 것이 아닌 Component의 state로 옮기고 해당 state의 값을 넣어주어야 함
                function App(props) {
                    return (
                        <MyContext.Provider value={{ something: 'something' }}>
                            <Toolbar />
                        </MyContext.Provider>
                    )
                }
            }

    //  - 위 코드를 state를 사용하여 수정
    //  - 불필요한 재렌더링을 막음
    //  - value를 직접 넣은 것이 아니라, state를 선언하고 state의 값을 Provider에 넣어줌 
            {
                function App(props) {
                    const [value, setValue] = useState({ something: 'something' });

                    return (
                        <MyContext.Provider value={value}>
                            <Toolbar />
                        </MyContext.Provider>
                    )
                }
            }
    


    /* Class.contextType */
    //  - Provider 하위에 있는 Class Component에서 context 데이터에 접근하기 위해 사용
    //  - Class Component에서만 사용되니 이런 방법이 있다는 정도로만 알아두기
    //  - Class Component에 있는 contextType 속성에는 react.createContext 함수를 통해 생성된 context 객체가 대입될 수 있음
    //  - contextType 속성을 사용하게 되면, this.context를 통해 상위에 있는 Provider 중에서 가장 가까운 값을 가져올 수 있음
    //   또한, 아래 예제 코드처럼 render() 함수를 포함한 모든 생명주기 함수 어디에서든지 this.context를 사용할 수 있음
    //  - 참고로, contextType을 사용하면 단 하나의 Context만을 구독할 수 있음
            {
                class MyClass extends React.Component {
                    componentDidMount() {
                        let value = this.context;
                        /* MyContext의 값을 이용하여 원하는 작업을 수행 가능 */
                    }
                    
                    componentDidUpdate() {
                        let value = this.context;
                        /* MyContext의 값을 이용하여 원하는 작업을 수행 가능 */
                    }

                    componentWillUnmount() {
                        let value = this.context;
                        /* MyContext의 값을 이용하여 원하는 작업을 수행 가능 */
                    }

                    render() {
                        let value = this.context;
                        /* MyContext의 값에 따라서 Component들을 렌더링 */
                    }
                }

                // myClass라는 Class Component는 myContext의 데이터에 접근할 수 있게 됨
                MyClass.contextType = MyContext;
            }




    /* Context.Consumer */
    //  - Context의 데이터를 구독하는 Component
    //  - Class Component의 경우에는 Class.contextType을 사용하면 되고, function Component에서는 Context.Consumer를 사용하여 Context 구독하기
            {
                // Context.Consumer를 사용하는 방법
                // Component의 자식으로 함수가 올 수 있는데 이것을 function as a child 라고 함
                // Context.Consumer로 감싸주면 자식으로 들어간 함수가 현재 Context의 value를 받아서 react node로 리턴하게 됨
                // 이때, 함수로 전달되는 value는 Provider의 value prop과 동일함
                // 만약, 상위 Component에 Provider가 없다면 이 value 파라미터는 create context를 호출할 때 넣는 기본 값과 동일한 역할을 함
                <MyContext.Consumer>
                    {value => {/* context의 값에 따라서 Component들을 렌더링 */}}
                </MyContext.Consumer>
            }


    
    /* function as a child */
    //  - Component의 자식으로 함수를 사용하는 방법
    //  - React에서는 기본적으로 하위 Component들을 Children이라는 프로그램으로 전달해주는데, Children으로 Component 대신 함수를 사용할 수도 있음
            {
                // children이라는 prop을 직접 선언하는 방식
                <Profile children={name => <p>이름: {name}</p>} />
                
            }
            {
                // Profile Component로 감싸서 children으로 만드는 방식
                <Profile>{name => <p>이름: {name}</p>}</Profile>
            }



    /* Context.displayName */
    //  - Context 객체는 displayName이라는 문자열 속성을 가짐 
    //  - 크롬의 React 개발자도구에서는 Context의 Provider나 Consumer를 표시할 때 displayName을 함께 표시해줌
            {
                const MyContext = React.createContext(/* some value */);
                MyContext.displayName = 'MyDisplayName';

                <>
                    // 개발자 도구에 "MyDisplayName.Provider"로 표시됨
                    <MyContext.Provider />

                    // 개발자 도구에 "MyDisplayName.Consumer"로 표시됨
                    <MyContext.Consumer />
                </>
            }



    /* 여러 개의 Context 동시에 사용하기 */
    //  - context.provider를 중첩해서 사용


    /* useContext() */
    //  - function Component에서 Context를 쉽게 사용할 수 있게 해줌
    //  - useContext()를 사용하면 Context의 값을 다른 방식과 동일하게 Component 트리 상에서 가장 가까운 상위 Provider로부터 받아오게 죔
    //  - context의 값이 변경되면 변경된 값과 함께 useContext()을 사용하는 Component가 재렌더링 됨
    //   그렇기 때문에, 만약 useContexxt()을 사용하는 Component의 렌더링이 꽤 무거운 작업일 경우에는 별도로 최적화 작업을 해줄 필요가 있음
    //  - useContext()을 사용할 때에는 파라미터로 context 객체를 넣어줘야 함
            {
                function MyComponent(props) {
                    // React.createContext() 함수 호출로 생성된 Context 객체를 인자로 받아서 현재 Context의 값을 리턴
                    const value = useContext(MyContext);

                    return (
                        // ...
                        null
                    )
                }
            }
    //  - useContext()을 사용할 때에는 파라미터로 context 객체를 넣어줘야 함
    //  - Provider나 Consumer를 넣으면 안 됨
            {
                // 올바른 사용법
                useContext(MyContext);

                // 잘못된 사용법
                useContext(MyContext.Provider);
                useContext(MyContext.Consumer);
            }

}




///* 3. Context를 사용하여 테마 변경 기능 만들기 */
{
    //  1. src > chapter_14 > 'ThemeContext.jsx' 파일 생성 및 강의 내용 작성
    //      - 초기값을 별도로 설정하지 않았고, 이후 Provider에서 값을 설정할 예정
    //      - 개발자 도구에서 Context의 이름을 확인하기 위해서 ThemeContext의 displayName 값을 설정해줌

    //  2. src > chapter_14 > 'MainContent.jsx' 파일 생성 및 강의 내용 작성
    //      - ThemeContext로부터 현재 설정된 테마 값을 받아와 실제 화면의 컨텐츠를 렌더링하는 역할
    //      - 테마 변경 버튼을 누를 경우 ThemeContext로부터 받은 toggle-theme함수를 호출하여 ThemeContext의 값을 변경하는 역할

    //  3. src> chapter_14 > 'DarkOrLight.jsx' 파일 생성 및 강의 내용 작성
    //      - DarkOrLight Component는 MainContent Component를 자식으로 가지고 있음 
    //      - 자식 Component인 MainContent Component를 ThemeContext.Provider로 감싸서 ThemeContext의 값을 하위 Component들이 사용할 수 있도록 해줌
    //      - 만약, ThemeContext.Provider로 감싸주지 않으면 하위 Component들이 ThemeContext의 값을 가져올 수 없음
    //      - ThemeContext의 값으로 들어가는 theme, toggleTheme()은 자체적으로 관리
    



}