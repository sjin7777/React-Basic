'use strict';

//* 1. List와 Key */
{
    /* List */
    //  - 같은 item을 순서대로 모아 놓은 것
    //  - List를 위해 사용하는 자료 구조가 Array(JS의 변수나 객체들을 하나의 변수로 묶어놓은 것)


    /* Key */
    //  - 각 객체나 item을 구분할 수 있는 고유한 값
    //  - 아이템들을 구분하기 위한 고유한 문자열
}


///* 2. 여러 개의 Component 렌더링 하기 */
{
    //  - React에서는 Array와 Key를 이용하여 반복되는 여러 개의 컴포넌트들을 쉽게 렌더링할 수 있음
    //  - 엄밀히 말하자면, 반복되는 다수의 Element가 렌더링 되는 것

    //  - mapping: 한쪽에 있는 item과 다른 한쪽에 있는 item을 짝지어 준다는 의미
    
    /* map() 사용 */
    //  - 같은 Component를 화면에 반복적으로 나타내야 할 경우에 사용
    //  - JS에서는 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴하는 것
    //  - map()을 이용하면 첫번째 item부터 순서대로 각 item의 어떤 연산을 수행한 뒤에 최종 결과를 배열로 만들어서 리턴해줌

    // map() 사용한 예제
    //  - map() 함수를 사용하여 numbers 배열에 들어있는 각 숫자에 2를 곱한 값이 들어간 doubled 배열을 생성하는 코드
        const doubled = numbers.map((number) => number * 2);

    
    /* React에서 map()을 이용하여 Element를 렌더링하는 방법 */
    {

        const numbers = [1, 2, 3, 4, 5];
        // numbers에 들어있는 각 숫자를 li 태그로 감싸고 리턴
        const listItem = numbers.map((number) => <li>{number}</li>);
        
        // 화면에 렌더링
        // 결과적으로는 li 태그가 들어있는 list-items 배열을 ul 태그로 감싸서 렌더링
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <ul>{listItem}</ul>
        )
            
            // 위 코드와 같음
            root.render(
            <ul>
                <li>{1}</li>
                <li>{2}</li>
                <li>{3}</li>
                <li>{4}</li>
                <li>{5}</li>
            </ul>
        )
    }

    /* 기본적인 List Component */
    //  - 위에서 작성한 코드를 기본적인 형태를 가진 별도의 List Component로 분리하여 같은 역할을 하는 코드로 작성
    //  - List의 각 item은 무조건 고유한 key를 가족 있어야 하므로 li 태그에 key값 prop을 넣어줌
    {
        function NumberList(props) {
            const { numbers } = props;
            const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);
            return <ul>{listItems}</ul>
        }
        const numbers = [1, 2, 3, 4, 5];

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <ul>{listItem}</ul>
        )
    }

}



///* 3. List의 Key */
{
    /* Key */
    //  - item들을 구분하기 위한 고유한 문자열
    //  - List에서의 Key는 어떤 itme이 변경, 추가, 제거 되었는지 구분하기 위해 사용
    //  - Key의 값은 같은 List에 있는 Elements 사이에서만 고유한 값이면 됨

    /* Key의 값 */
    //  1. Key 값으로 각 item의 값을 사용한 경우
    //      => item의 값이 중복되면, Key값도 중복되므로 탈락
    //  2. Key 값으로 각 item의 id가 존재하여 값이 있고, 그 값을 key로 사용한 경우
    //      => key값으로 적합
    //  3. Key 값으로 map()함수에서 두번째 파라미터로 제공해주는 index 값을 사용한 경우
    //      => 배열에서 item 순서가 바뀔 수 있는 경우에는 key값으로 index를 사용하는 것은 권장하지 않음
    //        성능에 부정적인 영향을 끼칠 수 있고, Component의 state와 관련하여 문제를 일으킬 수도 있음
    //      => item들의 고유한 id가 없을 경우에만 사용하기에 적합
    //      => React에서는 Key를 명시적으로 넣어주지 않으면 기본적으로 이 index값을 Key값으로 사용


    // map() 함수 안에 있는 Elements는 반드시 Key가 필요하다
}




///* 4. 출석부 출력하기 */
{
    //  1. src > chapter_10 > 'AttendanceBook.jsx' 파일 생성 및 강의 내용 작성
    //      - map()을 이용해서 배열에 있는 item을 하나씩 꺼내서 렌더링
    //      - id가 있는 item 중 key값으로 포맷팅된 문자열로 변경하여 사용 가능 
    //          => <ul>{student.map(student) => return <li key={`student-id-${student.id}`}>{student.name}</li>}</ul>
    //      - map()의 두번째 파라미터인 index로 key값을 설정 가능
    //          => <ul>{student.map((student, index) => return <li key={index}>{student.name}</li>)}</ul>

}