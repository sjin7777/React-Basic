'use strict';


///* 2.01 - 직접 리액트 연동하기 */
if(true) {
    /* React Component 생성 */
    function MyButton(props) {
        const [isClicked, setIsClicked] = React.useState(false);

        return React.createElement(
            'button',
            { onClick: () => setIsClicked(true) },
            isClicked ? 'Clicked!' : 'Click here!'
        )
    }

    /* ReactDOM에 render()함수를 사용해서 React Component를 domContainer에 렌더링 */
    // 이 코드가 필요한 이유: Script 태그를 사용해서 Component를 가져왔어도, Component가 화면에 보이는 것이 아니기 때문
    const domContainer = document.querySelector('#root');
    ReactDOM.render(React.createElement(MyButton), domContainer);
}