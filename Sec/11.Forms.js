'use strict';

///* 1. Form과 Controlled Component */
{
    /* Form */
    //  - 사용자로부터 입력을 받기 위해 사용
    //  - React는 Component 내부에서 state를 통해 데이터를 관리
    //  - HTML Form은 Element 내부에 각각의 state가 존재
    //      => 사용자의 이름을 입력받고 제출하는 코드
            {
                <form>
                    <label>이름</label>
                    <input type="text" name="name"/>
                    <button type="submit">제출</button>
                </form>
            }
    //          - React에서 잘 동작하지만 JS 코드를 통해 사용자가 입력한 값에 접근하기에는 불편한 구조
    //          - JS코드에서 사용자가 입력한 값에 접근하고 제어할 수 있어야 웹페이지를 개발할 때 더 편리해야 하는데 이 구조는 그렇지 않음


    /* Controlled Components */
    //  - 사용자가 입력한 값에 접근하고 제어할 수 있도록 하는 Component
    //  - React의 통제를 받는 input Form Element
    //  - React Comnponent의 state를 통해 사용자의 입력 값을 직접적으로 제어할 수 있음
    //      => 모든 입력 값을 대문자로 변경하는 코드
            {
                const handleChange = (event) => setValue(event.target.value.toUpperCase());
            }



    /* HTML Form   vs.  Controlled Component */
    //  - HTML Form: 자체적으로 state를 관리
    //  - Controlled Component: 모든 데이터를 state에서 관리

}



///* 2. 다양한 Forms */
{
    /* textarea */
    //  - 여러 줄에 걸쳐 긴 text를 입력받기 위한 HTML 태그
    
    // HTML textarea 태그
        {
            <textarea>작성할텍스트들</textarea>
        }
    
    // React에서는 textarea 태그에 value라는 attribute를 사용하여 텍스트를 표시 (Controlled Component 방식)
    //  - 값을 Component의 state를 사용해서 다룰 수 있음
        {
            function RequestForm(props) {
                // inputValue의 초기값으로 '' (빈 값)을 넣어주었기 때문에 처음 렌더링될 때부터 textarea에 초기값이 나옴
                const [inputValue, setInputValue] = useState('');
            
                const handleChange = (event) => setInputValue(event.target.value);
            
                const handleSubmit = (event) => {
                    alert(`입력한 요청사항: ${inputValue}`);
                    event.preventDefault();
                }
            
                return (
                    <form onSubmit={handleSubmit}>
                        <label>요청사항</label>
                        <textarea value={inputValue} placeholder={`요청사항을 입력하세요`} onChange={handleChange}/>
                        <button type="submit">제출</button>
                    </form>
                )
            }
        }


    /* select */
    //  - Drop-down 목록을 보여주기 위한 HTML 태그
    //      > Drop-down 목록: 여러가지 옵션 중에서 하나를 선택할 수 있는 기능을 제공
    //  - option 태그들을 select 태그가 감싸는 형태로 사용
    //      > option 태그에서 현재 선택된 옵션의 경우 selected 라는 attribute를 가지고 있음

    //  HTML select 태그
        {
            <select>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option selected value="grape">포도</option>    {/* 현재 포도가 선택되어 있는 상태 */}
                <option value="watermelon">수박</option>
            </select>
        }

    //  React에서는 selected attribute 대신에 select 태그에 value라는 attribute를 사용하여 값을 표시함
    //      - 만약 다중선택이 되도록 하려면 multiple이라는 속성값을 true로 설정하고, value로 선택된 옵션의 값이 들어있는 배열을 넣어주면 됨
        {
            function FruitSelect(props) {
                // choiceValue의 초기값으로 'grape'을 넣어줌
                const [choiceValue, setChoiceValue] = useState('grape');
            
                const handleChange = (event) => setChoiceValue(event.target.value);
            
                const handleSubmit = (event) => {
                    alert(`선택한 과일: ${choiceValue}`);
                    event.preventDefault();
                }
            
                return (
                    <form onSubmit={handleSubmit}>
                        <label>과일을 선택하세요</label>
                        {/* choiceValue 값이 변경되면 handleChange함수에서 setValue 함수를 사용하여 값을 업데이트 */}
                        {/* 사용자가 option을 선택했을 때, value라는 하나의 값만을 업데이트하면 되기 때문에 편리함 */}
                        <select value={choiceValue} onChange={handleChange}>
                            <option value="apple">사과</option>
                            <option value="banana">바나나</option>
                            <option value="grape">포도</option>
                            <option value="watermelon">수박</option>
                        </select>
                    </form>
                )
            }
        }

    
    /* 정리 */
    // input 태그
        {
            <input type="text" value={value} onChange={handleChange} />
        }

    // textarea 태그
        {
            <textarea value={value} onChange={handleChange}/>
        }

    // select 태그
        {
            <select value={value} onChange={handleChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
            </select>
        }

    

    /* File input 태그 */
    //  - 디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그
    //  - 서버로 파일을 업로드하거나, JS의 File API를 사용해서 파일을 다룰 때 사용
    //  - file input 태그는 읽기 전용이기 때문에 React에서는 Uncontrolled Component가 됨 (즉, 값이 React의 통제를 받지 않는다는 것)

    //  HTML file input 태그
        {
            <input type="file" />
        }

    //  Multiple Inputs
    //  - 하나의 Component에서 여러 개의 입력을 다루게 하려면 여러 개의 state를 선언하여 각각의 입력에 대해 사용함


    // Input Null Value
    //  - value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력 값을 바꿀 수 없음
    //  - 만악 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값에 undefined 또는 null을 넣어줌
    //  - 이를 잘 활용하면 value prop을 넣으면서 동시에 사용자가 자유롭게 입력할 수 있음
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));

        // input의 value 값이 "hi"로 정해져 있어서 값을 변경할 수 있는 입력 불가 상태
        root.render(
            <input value="hi"/>, rootNode
        );

        // setTimeout에 의해 3초 뒤에 input의 value가 null인 input 태그가 렌더링 되면서 입력 가능한 상태가 됨
        setTimeout(function() {
            root.render(
                <input value={null} />, rootNode
            )
        }, 3000);
    }

}



///* 3. 사용자 정보 입력 받기 */
{
    //  1. src > chapter_11 > 'SignUp.jsx' 파일 생성 및 강의 내용 작성

    //  2. SignUp Component에 코드를 추가하여 이름과 함께 성별을 입력받을 수 있도록 하기
}