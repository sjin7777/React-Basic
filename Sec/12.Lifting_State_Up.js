'use strict';

import { useState } from "react";


///* 1. Shared State */
{
    /* Shared State */
    //      - 여러 개의 Component 사이에서 state를 공유하는 방법
    //      - 하나의 데이터를 여러 개의 Component에서 표현해야 하는 경우에 사용
    //      - 각 Component에 stat에서 데이터를 각각 보관하는 것이 아니라 가장 가까운 부모 Component의 state를 공유해서 사용
    //      - 자식 Component들이 가장 가까운 공통된 부모 Component의 state를 공유해서 사용하는 것
    //      - state에 있는 데이터를 여러 개의 하위 Component에서 공통적으로 사용하는 경우
}


///* 2. 하위 컴포넌트에서 State 공유하기 */
{
    //  - 사용자로부터 온도를 입력 받고, 각각 섭씨 온도와 화씨 온도를 표현해주고, 해당 온도에서 물이 끓는지 안 끓는지를 출력해주는 Component를 생성하여 state를 공유

    /* 물의 끓음 여부를 알려주는 Component */
    //  - 섭씨온도값을 props로 받아서 물이 끓는지 안 끓는지를 문자열로 출력해주는 Component
        {
            function BoilingVerdict(props) {
                if(props.celsius >= 100) {
                    return <p>물이 끓습니다.</p>
                }
                return <p>물이 끓지 않습니다.</p>
            }
        }

    /* 부모 Component - Calculator Component*/
    //  - state로 온도값을 하나 가지고 있고, 사용자로부터 입력을 받기 위해서 input 태그를 사용
    //  - 사용자가 온도값을 변경할 때마다 handleChange 함수 호출
        {
            function Calculator(props) {
                const [temperature, setTemperature] = useState('');
                const handleChange = (event) => setTemperature(event.target.value);

                return (
                    <fieldset>
                        <legend>섭씨 온도를 입력하세요: </legend>
                        <input value={temperature} onChange={handleChange}/>

                        {/* BoilingVerdict Component에 state인 temperature를 celsius라는 이름의 prop으로 전달 */}
                        <BoilingVerdict celsius={parseFloat(temperature)}/>
                    </fieldset>
                )
            }
        }



    /* 온도를 입력받기 위한 TemperatureInput Component */
    //  - Calculator Component 안에 온도를 입력하는 부분을 별도의 Component로 추출하기 
    //   (섭씨 온도와 화씨 온도를 각각 따로 입력받을 수 있도록 하여 재사용이 가능한 형태로 Component를 만들어 사용하는 것이 효과적이기 때문)
        {
            const scaleNames = {
                c: '섭씨',
                f: '화씨'
            };

            function TemperatureInput(props) {
                const [temperature, setTemperature] = useState('');
                const handleChange = (event) => setTemperature(event.target.value);

                return (
                    <fieldset>
                        <legend>온도를 입력해주세요 (단위: {scaleName[props.scale]})</legend>
                        <input value={temperature} onChange={handleChange}/>
                    </fieldset>
                )
            }
        }


    /* TemperatureInput Component를 이용하여 부모 Component인 Calculator Component를 변경해보기 */
    //  - 사용자가 입력하는 온도값이 temperature input의 state에 저장되기 때문에 섭씨 온도와 화씨 온도 갑을 따로 입력받으면 2개의 값이 다를 수 있음
    //  - 그렇기에 섭씨온도와 화씨온도 값을 동기화하는 작업 필요
        {
            function Calculator(props) {
                return (
                    <div>
                        <TemperatureInput scale="c" />
                        <TemperatureInput scale="f" />
                    </div>
                )
            }
        }



    /* 온도 변환 함수 작성하기 */
    //  - 섭씨온도와 화씨온도 값을 동기화 시키기 위해서 먼저 각각에 대해 변환하는 함수를 작성해야 함
        {
            // 섭씨온도 => 화씨온도
            function toCelsius(fahrenheit) {
                return (fahrenheit - 32) * 5 / 9;
            }

            // 화씨온도 => 섭씨온도
            function toFahrenheit(celsius) {
                return (celsius * 9 / 5) + 32;
            }
        }

    /* 서로 변환하는 함수를 호출하는 함수 작성하기 */
    //  - 온도값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주는 함수
        {
            function tryConvert(temperature, convert) {
                const input = parseFloat(temperature);
                // 만약 숫자가 아닌 값을 입력하면 ''를 리턴하도록 예외 처리
                if(Number.isNaN(input)) {
                    return '';
                }

                const output = convert(input);
                const rounded = Math.round(output * 1000) / 1000;

                return rounded.toString();
            }
        }

    /* 서로 변환하는 함수를 호출하는 함수인 tryConvert 함수를 사용하기 */
        {
            tryConvert('abc', toCelsius);           // empty string을 리턴
            tryConvert('10.22', toFahrenheit);      // '50.396'을 리턴
        }


    /* 하위 Component의 state를 공통된 부모 Component로 끌어올려서 Shared State를 적용하기 */
    //  - 여기서 state를 상위 Component로 올린다는 것을 Lifting state up이라고 함
    //      => Lifting: 들어올리다 (즉, 하위 Component의 state를 공통 상위 Component로 올림 )
    //  - TemperatureInput Component 수정
    //  1-1. 온도값을 가져오는 부분 수정
    //      - 이렇게 수정해야 온도값을 Component state에서 가져오는 것이 아니라 props를 통해서 가져오게 됨
    //       또한, Component state를 사용하지 않게 되기 때문에 입력값이 변경되었을 때, 상위 Component로 변경된 값을 전달해 주어야 함
            {
                // ...
                return (
                    // ...
                        // 변경 전: <input value={temperature} onChange={handleChange}/>
                        <input value={props.temperature} onChange={handleChange}/>
                    // ...
                )
            }

    //  1-2. handleChane 함수 수정
    //      - 사용자가 온도값을 변경할 때마다 props에 있는 onTemperatureChange 함수를 통해 변경된 온도값이 상위 Component로 전달됨
            {
                // 변경 전: const handleChange = (event) => {setTemperature(event.target.value);}
                const handleChange = (event) => {props.onTemperatureChange(event.target.value);}
            }

    /* 최종 완성된 TemperatureInput Component */
    //  - state는 제거되었고, 오직 상위 Component에서 전달받은 값만을 사용 
            {
                function TemperatureInput(props) {
                    const handleChange = (event) => {props.onTemperatureChange(event.target.value);}
                    return (
                        <fieldset>
                            <legend>온도를 입력해주세요 (단위: {scaleNames[props.scale]})</legend>
                            <input value={props.temperature} onChange={handleChange}/>
                        </fieldset>
                    )
                }

            }


    /* 변경된 TemperatureInput Component에 맞춰서 Calculator Component 변경하기 */
    //  - 상위 Component인 Calculator에서 온도값과 단위를 각각의 state로 가지고 있으며, 
    //   두개의 하위 Component는 각각 섭씨와 화씨로 변환된 온도값과 단위, 그리고 온도를 업데이트 하기 위한 함수를 props로 가지고 있음
    //  - 각 Component가 state의 값을 가지고 있는 것이 아니라 공통된 상위 Component로 올려서 공유하는 방법을 사용하면 더욱 간결하고 효율적으로 개발 가능
            {
                function Calculator(props) {
                    // state로 temperature, scale을 선언하여 온도값과 단위를 각각 저장
                    // 이 온도와 단위를 이용하여 변환함수를 통해 섭씨온도와 화씨온도를 구해서 사용
                    const [temperature, setTemperature] = useState('');
                    const [scale, setScale] = useState('c');

                    const handleCelsiusChange = (temperature) => {
                        setTemperature(temperature);
                        setScale('c');
                    }

                    const handleFahrenheitChange = (temperature) => {
                        setTemperature(temperature);
                        setScale('f');
                    }

                    const celsius = (scale === 'f') ? (tryConvert(temperature, toCelsius)) : temperature;
                    const fahrenheit = (scale === 'c') ? (tryConvert(temperature, toFahrenheit)) : temperature;

                    return (
                        <div>
                            {/* 각 단위로 변환된 온도값과 단위를 props로 넣어주었고, 값이변경되었을 때, 업데이트하기 위한 함수를 onTemperatureChange에 넣어줌
                                그렇기에 섭씨온도가 변경되면 단위가 c로 변경되고, 화씨온도가 변경되면 단위가 f로 변경됨 */}
                            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
                            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
                            <BoilingVerdict celsius={parseFloat(celsius)}/>
                        </div>
                    )
                }
            }
}



///* 3. 섭씨온도와 화씨온도 표시하기 */
{
    //  1. src > chapter_12 > 'TemperatureInput.jsx' 파일 생성 및 강의 내용 작성
    //      - props로 scale과 temperature를 받아서 표시해주며 
    //       온도값이 변경되었을 때에는 props에 onTemperatureChange 함수를 호출하여 상위 Component인 Calculator Component로 변경된 값을 전달

    //  2. src > chapter_12 > 'Calculator.jsx' 파일 생성 및 강의 내용 작성
}
