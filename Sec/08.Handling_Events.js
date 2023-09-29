'use strict';

///* 1. Event의 정의 및 Event 다루기 */
{
    /* Event */
    //  - 특정 사건

    /* Event Handling */
    //  - Event를 처리하는 것


    /* DOM의 Event  vs. React의 Event */
    //  - Event 이름의 표기법과 함수를 전달하는 방식의 차이가 있음

    // 1. DOM에서의 Event
    //  - 예> DOM에서 클릭 이벤트를 처리하는 예제
    //      - 버튼 클릭 시 activate() 함수 호출
    //      - DOM에서는 이처럼 클릭 이벤트를 처리할 함수를 onclick을 통해서 전달함
    //      - onclick에서 c는 소문자
    //      - 이벤트를 처리할 함수를 문자열로 전달
    //          => <button onclick="activate()">Activate</button>

    // 2. React에서의 Event
    //  - 예> React에서 클릭 이벤트를 처리하는 예제
    //      - 버튼 클릭 시 activate() 함수 호출
    //      - React에서 이처럼 클릭 이벤트를 처리할 함수를 onClick을 통해서 전달함
    //      - onclick에서 C는 대문자
    //      - 이벤트를 처리할 함수를 함수 그대로 전달
    //          => <button onClick={activate}>Activate</button>


    /* Event Handler (= Event Listener) */
    //  - Event가 발생했을 때, 해당 Event를 처리하는 함수
    //  - 어떤 사건이 발생하면 사건을 처리하는 역할
    //  - Event가 발생하는 것을 계속 듣고 있다는 의미로 Event Listener라고도 불림


    /* Event Handler 추가 방법 */
    //  1. Class Component - 첫번째 방법 - bind
    //      1-1. Component 안에서 Event Handler 함수 생성
    //          => 함수명() {}
    //          => handleClick() { ... console.log('1. this is: ' + this);
    //      1-2. consturctor() 안에 Event Handler를 반드시 bind 해주어야 함
    //          => constructor(props) { super(props) ... this.handleClick = this.handleClic.bind(this); }
    //              - callback에서 'this'를 사용하기 위해서는 바인딩이 필수
    //              - 바인딩을 해야 하는 이유
    //                  a. JS에서는 기본적으로 클래스 함수들이 바운드되지 않기 때문
    //                  b. 그렇기 때문에 바인딩을 하지 않으면 this.함수는 Global Scope에서 호출 됨
    //                    Global Scope에서 this.함수는 undefined임으로 사용할 수 없음
    //                  c. 함수 이름 뒤에 괄호 없이 사용하려면 무조건 해당 함수를 바인딩 해주어야 함
    //      1-3. 버튼 생성
    //          => <button onClick={this.handleClick}>{this.state.isToggleOn ? '켜짐' : '꺼짐'}</button>

    //  2. Class Component - 두번째 방법 - class fields syntax
    //      2-1. Component 안에서 Event Handler 함수 생성 - Class fields syntax 사용
    //          => 함수명 = () => { ... };
    //          => noBindHandleClick = () => { console.log('2. this is:', this); }
    //      2-2. 버튼 생성
    //          => <button onClick={this.noBindHandleClick}>Bind 안함</button>

    //  3. Class Component - 세번째 방법 - arrow function
    //      3-1. Component 안에서 Event Handler 함수 생성 (일반 함수처럼 생성)
    //          => 함수명(){ ... };
    //          => noBindNoCFSHandleClick(){ 3.console.log('this is:', this); }
    //      3-2. 버튼 생성 - Event Handler를 넣는 곳에 arrow function을 사용
    //          => <button onClick={() => this.noBindNoCFSHandleClick()}>Bind, CFS 안함</button>
    //      3-3. 이 방식은 Component가 렌더링될 때마다 다른 callback 함수가 생성되는 문제가 있음
    //          - 대부분은 상관 없지만, callback 함수가 하위 컴포넌트에 풀합으로 넘겨지게 되면, 하위 컴포넌트에서 추가적인 렌더링이 발생하게 됨
    //          - 그렇기에 혹시 모를 성능 문제를 위해 바인딩이나 class fields syntax를 사용하기를 권장


    //  1. Function Component - 첫번째 방법 - 함수 안에 함수로 정의
    //      1-1. 함수 정의
    //          => function 함수명() { ... }
    //          => function handleClick() { setIsToggleOn((isToggleOn)=> !isToggleOn); }
    //      1-2. 버튼 생성
    //          => <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>

    //  2. Function Component - 두번째 방법 - arrow function을 사용하여 정의
    //      2-1. 함수 정의
    //          => const 함수명 = () => 실행할코드;
    //          => const arrowHandleClick = () => setCount((count) => count + 1);
    //      2-2. 버튼 생성
    //          => <button onClick={arrowHandleClick}>{count}</button>



    /* Arguments */  
    //      - 함수에 전달할 데이터
    //      - 여기서의 함수는 Event Handler를 의미이므로 Event Handler에 전달할 데이터라는 의미가 됨
    //      - Event라는 Arguments는 React의 Event 객체를 의미함
    //      - 순서는 원하는대로 변경해도 상관없음
    
    /* Arguments 전달하기 */
    //  1. Class Component
    //      - 두 방법 모두 첫번째 매개변수는 id이고, 두번째 매개변수로 Event가 전달됨
    //      1-1. bind 사용
    //          - event가 자동으로 id 이후에 두번째 매개변수로 전달됨
    //              => <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
    //      1-2. arrow function 사용
    //          - 명시적으로 event를 두번째 매개변수로 넣어줌
    //              => <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

    //  2. Function Component
    //      - 함수 선언
    //          => const handleDelete = (id, event) => console.log(id, event.target);
    //      - 버튼 생성하여 함수 사용
    //          => <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>


}



///* 2. 클릭 이벤트 처리하기 */
{
    //  1. src > chapter_08 > ConfirmButton.jsx 파일 생성 및 강의 내용 작성

    //  2. Class Component의 Event Handler 처리
    //      2-1. bind 방법
    //          - Component 안에 Event Handler 함수 생성
    //              => handleConfirm() {this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed })}
    //          - consturctor() 안에서 bind 처리
    //              => this.handleConfirm = this.handleConfirm.bind(this);
    //          - button 생성 후 Event Listener 추가
    //              => <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>{this.state.isConfirmed ? "완료" : "확인 필요"}</button>
    //      2-2. Class fields syntax 방법
    //          - Component 안에 Event Handler 함수 생성 (Arrow Function으로 작성)
    //              => handleCFSConfirm = () => { this.state((prevState) => ({ isConfirmed: !prevState.isConfirmed}));}
    //          - button 생성 후 Event Listener 추가
    //              => <button onClick={this.handleCFSConfirm} disabled={this.state.isConfirmed}>{this.state.isConfirmed ? "완료" : "확인 필요"}</button>

    //  3. Function Component의 Event Handler 처리
    //      - Component 안에 Evetn Handler 함수 생성
    //          => const handleClick = () => setIsClick(prevState => !prevState);
    //      - button 생성 후 Event Listener 추가
    //          => <button onClick={handleClick} disabled={isClick}>{ isClick ? "완료" : "확인 필요"}</button>

}