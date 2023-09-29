'use strict';

///* 1. Conditional Rendering의 정의와 Inline Conditions */
{
    /* Conditional Rendering */
    //  - 컴퓨터 프로그래밍에서의 Condition은 조건을 의미
    //  - 그렇기에 Conditional Rendering은 조건에 따른 렌더링이라고 해석
    //  - 조건부 렌더링이라고 부름
    //  - 즉, 어떠한 조건(true/false)에 따라서 렌더링이 달라지는 것



    /* JavaScript의 Truthy와 Falsy */
    //  - Truthy: true는 아니지만 true로 여겨지는 값
    //  - Falsy: false는 아니지만 false로 여겨지는 값

    // truthy
        /* 
            true
            {} (empty object)
            [] (empty array)
            42 (number, not zero)
            "0", "false" (string, not empty)
        */

    // false
        /*
            false
            0, -0 (zero, minus zero)  
            0n (BigInt zero)
            '', "", `` (empty string)
            null
            undefined
            NaN (not a number)
        */



    /* Element Variables (엘리먼트 변수) */
    //  - React의 Element를 변수처럼 다루는 방법
    //  - 조건부 렌더링을 사용하다가 렌더링 해야 될 Component를 변수처럼 다루고 싶을 경우에 사용
    //  - Element를 변수처럼 저장해서 사용하는 방법



    /* Inline Conditions () */
    //  - 조건문을 코드 안에 집어넣는 것
    
    //  1. Inline If (Short Circuit)
    //      - if문을 필요한 곳에 직접 집어넣어 사용하는 방법
    //      - 실제 if문을 넣는 것이 아니라, if문과 동일한 효과를 내기 위해 && 연산자를 사용
    //      - 결과가 정해져 있는 논리연산에서 굳이 불필요한 연산은 하지 않도록 하기 위해 사용
    //      - React에서는 조건문이 true이면 오른쪽에 나오는 element가 결과값이 되고, false이면 결과값이 false가 됨
    //      - && 연산자를 JSX코드 안에서 중괄호를 사용하여 직접 집어넣는 방법

    //      1-1. true && expression
    //          - 첫번째 조건문이 true이면 두번째 조건문 expression을 평가
    //      1-2. false && expression
    //          - 첫번째 조건문이 false이면 두번째 조건문은 평가하지 않고 바로 false


    //  2. Inline If-Else
    //      - if-else문을 필요한 곳에 직접 넣어서 사용하는 방법
    //      - 조건문의 값에 따라서 다른 Element를 보여줄 때 사용
    //      - 삼항 연산자 사용 
    //          => condition ? true : false


    /* Component 렌더링 막기 */
    //      - Component를 렌더링하고 싶지 않을 경우에는 null을 리턴
    //      - React에서는 null을 리턴하면 렌더링되지 않음
    //      - 참고로 class Component의 render() 함수에서 null을 리턴하는 것은 Component의 생명주기 함수에 전혀 영향을 미치지 않음 
    //       그렇기에 componentDidUpdate()함수는 여전히 호출됨

}


///* 2. 로그인 여부를 나타내는 툴바 만들기 */
{
    //  1. src > chapter_09 > 'Toolbar.jsx' 파일 생성 및 강의 내용 작성
    //      - Toolbar Component는 props로 사용자의 로그인 여부를 나타내는 isLoggedIn 값을 받고,
    //       그 값으로 조건부 렌더링을 사용하여 환영 메시지을 보여주거나 감추고,
    //       로그인 버튼이나 로그아웃 버튼을 보여줌
    //      - inline if (&& 연산자) 사용
    //      - inline if-else (삼항 연산자) 사용

    //  2. src > chapter_09 > 'LandingPage.jsx' 파일 생성 및 강의 내용 작성
    //      - useState()를 사용해서 사용자의 로그인 여부를 자체적으로 관리
    //      - 로그인 여부값인 isLoggedIn을 Toolbar Component에 전달하여 로그인 여부에 따라 Toolbar에 적절한 UI에 표시되도록 함
}