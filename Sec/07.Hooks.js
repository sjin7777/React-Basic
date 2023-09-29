'use strict';

///* 1. Hooks의 개념과 useState, useEffect */
{
    /* Class Component vs. Function Component */
    //  Class Component
    //      - 생성자에서 state를 정의
    //      - setState() 함수를 통해 state 업데이트
    //      - Lifecycle methods 제공

    //  Function Component 
    //      - state 생성 불가
    //      - Lifecycle에 따른 기능 구현 불가
    //      - Hooks 사용 (Class Component의 기능등을 모두 동일하게 구현할 수 있음)


    /* useState */
    //  - Function Component에서는 state를 제공하지 않기 때문에 Class Component처럼 state를 사용하고 싶을 경우에 사용

    /* useState 사용 방법*/
    //  - const [변수명, set변수명] = useState(초기값);
    //  - const [item, setItem] = useState(init);
    //      - useState를 호출할 때에는 파라미터로 선언할 state의 데이터인 item의 초기값인 init이 들어감
    //      - 이렇게 초기값을 넣어 useState를 호출하면 return 값으로 배열이 나옴
    //      - 리턴된 배열[0]: state로 선언된 변수인 item
    //      - 리턴된 배열[1]: state의 set함수인 setItem (item의 상태를 변경해주는 함수)


    /* useEffect */
    //  - side effect를 수행
    //  - Class Component에서 Lifecycle 함수인 componentDidMount, componentDidUpdate, componentWillUnmount 기능을 하나로 통합하여 제공
    //  - 즉, useEffect 함수만으로 생명주기함수와 동일한 기능을 수행할 수 있음

    /* useEffect 사용 방법 */
    //  - useEffect(이펙트함수, 의존성배열);
    //  - 의존성배열안에 있는 값이 하나라도 변경되었을 때, 이펙트함수가 실행됨
    //  - 기본적으로 이펙트함수는 처음 Component가 렌더링 된 이후와 업데이트로 인한 재렌더링 이후에 실행됨
    //  - 만약, 이펙트함수가 mount와 unmount시에 단 한 번씩만 실행하게 하고 싶다면 의존성배열을 빈 배열로 설정하면 됨 []
    //   이렇게 설정하면, 해당 이펙트가 props나 state에 있는 어떤 값에도 의존하지 않는 것이므로 여러 번 실행되지 않음
    //  - 만약, 의존성 배열을 생략한다면, Component가 업데이트될 때마다 호출됨


    // useEffect()의 리턴 함수의 역할은 componentWillUnmount 함수가 하는 역할과 동일함
/* 
        useEffect(() => {

            컴포넌트가 마운트 된 이후,
            의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
            의존성 배열에 빈 배열([])을 넣으면 mount와 unmount시에 단 한 번씩만 실행됨
            의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행 됨
            ...

            return () => {
            
                컴포넌트가 마운트 해제되기 전에 실행됨
                ...
            }

        }, [의존성 변수1, 의존성 변수2, ...]);
 */

}


///* 2. useMemo, useCallback, useRef */
{
    /* Memoization */
    //  - 최적화를 위해서 사용하는 개념 
    //  - 비용이 높아 연산량이 많이 드는 함수의 호출 결과를 저장해 두었다가 같은 입력 값으로 함수를 호출하면 
    //  새로 함수를 호출하지 않고 이전에 저장해놨던 호출 결과를 바로 반환
    //  - 함수 호출 결과를 받기까지의 시간이 짧아짐
    //  - 불필요한 중복 연산도 하지 않기 때문에 컴퓨터의 자원을 적게 쓰게 됨
    //  - Memoization이 된 값을 Memoized Value라고 함
    //  - 메모를 해두었다가 나중에 다시 사용한다고 생각하기



    /* useMemo() */
    //  - Memoized value를 리턴하는 Hook
    //  - 파라미터로 memorized Value를 생성하는 creat 함수와 의존성 배열을 받음
    //  - Component가 다시 렌더링 될 때마다 연산량이 높은 작업을 반복하는 것을 피할 수 있음
    //  - 빠른 렌더링 속도를 얻을 수 있음
    //  - useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행된다는 점을 기억하기 
    //  - 그렇기에 렌더링이 일어나는 동안 실행되서는 안 될 작업을 useMemo() 에 넣으면 안 됨
    //  - 예시> 서버에서 데이터를 받아오거나, 수동으로 DOM을 변경하는 작업 등은 
    //         렌더링이 일어나는 동안 실행되어서는 안 되기 때문에 useMemo()에 넣으면 안 되고, useEffect()를 사용해야 함 

    /* useMemo() 사용 방법 */
    //  - 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create 함수를 호출하여 결과값을 반환하며,
    //   그렇지 않은 경우에는 기존함수의 결과갑을 그대로 반환
    const memoizedValue = useMemo(
        () => {
            // 연산량이 높은 작업을 수행하여 결과를 반환
            return computeExpensiveValue(의존성변수1, 의존성변수2);
        }, [의존성변수1, 의존성변수2] 
    )


    //  - 의존성 배열을 넣지 않을 경우 매 렌더링마다 create 함수가 실행 됨
    //  - 그렇기에, useMemo()에 의존성 배열을 넣지 않고 사용하는 것은 아무런 의미가 없음. 활용을 못하는 거임
        const memoizedValue2 = useMemo(()=> computeExpensiveValue(a, b));

    //  - 의존성 배열이 빈 배열[] 일 경우, Component mount 시에만 create 함수가 호출 됨
    //  - 즉, mount 이후에는 값이 변경되지 않기에 mount 시점에만 한번 값을 계산할 필요가 있을 경우에 사용
    //  - 하지만, 대부분의 경우에는 useMemo()에 의존성 배열의 변수들을 넣고 해당 변수들의 값이 바뀜에 따라 새로 값을 계산해야 할 경우 주로 사용
        const memoizedValue3 = useMemo(() => computeExpensiveValue(a, b), []);



    /* useCallback() */
    //  - useMemo()와 유사하지만 값이 아닌 함수를 반환
    //  - Component가 렌더링될 때마다 매번 함수를 새로 정의하는 것이 아니라 의존성 배열의 값이 바뀐 경우에만 함수를 새로 정의해서 리턴


    /* useCallback() 사용 방법 */
    //  - 콜백함수와 의존성배열을 파라미터로 받음
    //  - 의존성 배열에 있는 변수 중 하나라도 변경되면 Memoization된 콜백함수를 반환
    //  - 의존성 배열에 따라 Memoization 값을 반환한다는 점에서 useMemo()와 동일
    const memoizedCallback = useCallback(
        () => {
            doSomething(의존성변수1, 의존성변수2);
        },
        [의존성변수1, 의존성변수2]
    );


    /* useMemo()와 useCallback() - 아래 두 코드는 동일한 역할을 함 */
        useCallback(함수, 의존성배열);
        useMemo(()=> 함수, 의존성배열);

    // 만약, useCallback()을 사용하지 않고 Component 내에 함수를 정의한다면 매번 렌더링이 일어날 때마다 함수가 새로 정의됨
    // 따라서, useCallback()을 사용하여 특정 변수의 값이 변한 경우에만 함수를 다시 정의하도록 해서 불필요한 반복 작업을 없애줌

    //  useCallback()을 사용하지 않고, Component 내에서 정의한 함수를 자식 Component의 props로 넘겨 사용하는 경우에 
    // 부모 Component가 다시 렌더링될 때마다 매번 자식 Component도 다시 렌더링 됨

    //  useCallback()을 사용하는 경우, 특정 변수의 값이 변한 경우에만 함수를 다시 정의하게 되므로
    // 함수가 다시 정의되지 않는 경우에는 자식 Component도 재렌더링이 일어나지 않음




    /* React에서의 Reference */
    //  - 특정 Component에 접근할 수 있는 객체 
    //  - refObject.current
    //      - Reference 객체에는 current라는 속성이 있는데, 이건 현재 Reference하고 있는 element를 의미 (현재 참조하고 있는 element) 
    

    /* useRef() */
    //  - Reference를 사용하기 위한 함수
    //  - Reference 객체를 반환
    //  - 반환된 Reference 객체는 Component 라이프타임 전체에 걸쳐서 유지됨
    //  - 즉, Component가 mount 해제 전까지는 계속 유지됨
    //  - 변경 가능한 current라는 속성을 가진 하나의 상자라고 생각하기
    //  - 내부의 데이터가 변경되었을 때 별도로 알리지 않음
    //  - 그렇기에 현재 속성을 변경한다고 해서 재렌더링이 일어나지 않음

    /* useRef() 사용 방법 */
    //  - 파라미터로 초기값을 넣으면 해당 초기값으로 초기화된 Reference 객체를 반환함
    //  - 만약 초기값이 null이라면 current의 값이 null인 Reference 객체가 반환됨
    const refContainer = useRef(초기값);


    /* Callback ref */
    //  - DOM 노드의 변화를 알기 위한 가장 기초적인 방법
    //  - React는 ref가 다른 노드에 연결될 때마다 callback을 호출하게 됨
    //  - useRef()를 사용하게 되면, Reference 객체가 current 속성이 변경되었는지를 따로 알려주지 않기 때문에
    //   Callback ref 방식을 사용하게 되면 자식 Component가 변경되었을 때 알림을 받을 수 있고, 이를 통해 다른 정보들을 업데이트 할 수 있음


}


///* 3. Hook의 규칙과 Custom Hook 만들기 */
{
    /* Hook의 규칙 */
    //  1. Hook은 무조건 최상위 레벨에서만 호출해야 함
    //      - 여기서 말하는 최상위 레벨은 React 함수 Component의 최상위 레벨을 의미함
    //      - 즉, 반복문이나 조건문 또는 중첩된 함수들 안에서 Hook을 호출하면 안 됨
    //      - 그렇기 때문에 Component가 렌더링될 때마다 매번 같은 순서로 호출되어야 함
    //      - 이렇게 해야 다수의 useState()와 useEffect() 호출시 Component의 state를 올바르게 관리할 수 있게 됨

    //  2. React Function Component(+ 직접 만든 커스텀 Hook)에서만 Hook을 호출해야 함
    //      - React Component에 있는 state와 관련된 모든 로직은 소스 코드를 통해 명확하게 확인이 가능해야 함



    /* eslint-plugin-react-hooks 패키지 */
    //  - eslint는 JS코드에서 발견되는 문제 패턴을 식별하기 위한 정적 코드 분석 도구
    //  - Hook의 규칙과 관련하여 개발에 도움되는 패키지
    //  - Hook의 규칙을 따르도록 강제해주는 플러그인
    //  - React Component가 Hook의 규칙을 따르는지 분석 가능
    //  - 의존성 배열이 잘못되어 있는 경우에 자동으로 경고 표시를 해주며 고칠 방법을 제안해주기도 함



    /* Custom Hook 만들기 */
    //  - Custom Hook
    //      - React에서 기본적으로 제공되는 Hooks 이외에 추가적으로 필요한 기능이 있을 경우 직접 생성하여 사용하는 Hook
    //      - 여러 Component에서 반복적으로 사용되는 로직을 Hook으로 만들어 재사용하기 위함
    //      - 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 JS 함수
    //      - 여러 개의 Component에서 하나의 Custeom Hook을 사용할 때 Component 내부에 있는 모든 state와 effects는 전부 분리되어 있음   
    //      - 단순히 state와 연관된 로직을 재사용이 가능하게 만든 것뿐임

    //  - Custom Hook이 state를 분리하는 방법
    //      - 각 Custom Hook 호출에 대해서 분리된 state를 얻게 됨
    //      - React Component는 각각의 Custom Hook 호출에 대해서 분리된 state를 얻게 되기 때문
    //      - 각 Custom Hook의 호출 또한 완전히 독립적이기 때문에 하나의 Component에서 useState()와 useEffect()를 여러 번 호출할 수 있음

}

///* 4. Hooks 사용해보기 */
{
    /* useCounter() Custeom Hook 만들기 */
    //  - src > chapter_07 > 'useCounter.jsx' 파일 생성 후 강의 내용 작성
    //  - useCounter Hook은 초기 count 값을 파라미터로 받아와서 count라는 이름의 state를 생성하여 값을 제공하고, 
    //      => const [count, setCount] = useState(initialValue);
    //  - count 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 Hook
    //      => const increaseCount = () => setCount((count) => count + 1);
    //      => const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    //  - 어떤 함수 Component든지 count 기능을 쉽게 사용할 수 있음
    //      => return [count, increaseCount, decreaseCount];



    /* useCounter() 사용 */
    //  - Accommodate.jsx는 useCounter()를 사용하는 Accommodate라는 function Component가 있음
    //  - Accommodate Component를 사람을 수용하는 시설에서 사용한다고 가정
    //  - src > chaper_07 > 'Accommodate.jsx' 파일 생성 후 강의 내용 작성
    //  - Accommodate Component는 useCount()를 이용하여 카운트를 관리함
    //  - 최대 카운트 개수는 maxCapacity라는 이름의 상수로 정의되어 있고 카운트 개수가 최대 용량을 초과하면 경고 문구가 표시되며 더 이상 입장이 불가능해짐
    //      => const MAX_CAPACITY = 10;
    //      => useEffect(() => {setIsFull(count >= MAX_CAPACITY)}, [count])
    //      => {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    //  - useCount()에서 Math.max()를 이용하여 count 값이 0 아래로 내려갈 수 없도록 설정해놨기 때문에 
    //   값이 0이 되면 더 이상 useEffect()가 호출되지 않음
    //      => const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));


}

