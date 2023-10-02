'use strict';

///* 1. CSS와 selector */
{
    /* CSS */
    //  - Cascading(계단식) Style Sheets
    //  - style을 위한 일종의 언어
    //  - 하나의 Element가 여러 개의 style 규칙을 만족할 경우에 해당 style들을 마치 계단을 한 칸씩 내려가는 것처럼 우선순위를 가지고 하나씩 적용
    //  - 즉, 하나의 style이 여러 개의 element에 적용될 수 있고, 하나의 element에도 여러 개의 style이 적용될 수도 있음
    //  - CSS는 Selector와 실제 Style로 이루어져 있음


    /* CSS 기본 문법 */
    //  - Selector를 먼저 사용하고 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 기술함
        {
            //  Selector(선택자) { Property(속성): Value(값); }
            //  h1 { color: green; font-size: 16px; }
        }

    //  1. Selector에는 해당 스타일이 적용될 HTML Element를 넣으면 됨
    //      - HTML 태그를 직접 넣거나, 다른 조건들을 조합하여 Selector를 작성할 수 있음
    //  2. Selector 다음에는 중괄호 안에 적용할 스타일을 선언함
    //      - 각 스타일은 CSS 속성과 값으로 이루어진 key: value 형식
    //      - CSS 속성의 이름과 값을 콜론으로 구분
    //  3. 중괄호로 묶여있는 하나의 스타일 블록에는 여러 개의 스타일이 들어갈 수 있고, 여기에서 각 스타일은 세미콜론으로 구분함




    /* Selector */
    //  - Element에 style이 적용되는 규칙
    //  - style을 어떤 element에 적용할지를 선택하게 해주는 것



    /* Selector 유형 */
    //  1. Element Selector
    //      - 단순하게 특정 HTML 태그를 선택하기 위한 Element selector
    //      - 선택자에 HTML 태그의 이름을 작성하면 됨
        {
            //  Element Selector를 사용한 예시
            //  - h1 태그의 글자 색깔을 녹색으로 바꾸기 위한 CSS 속성
            //  h1 { color: green; }
        }

    //  2. ID Selector
    //      - HTML Element에서 ID를 정의하고, 그 값 앞에 #을 붙여서 사용
    //      - ID는 고유하다는 성질을 가지고 있기 때문에 하나의 Element에서 사용해야 함
        {
            // ID Selector를 사용한 예시
            //  - ID가 section인 Element를 정의한 HTML 코드
            <div id="section">...</div>

            //  - ID가 section인 Element의 배경 색깔을 검은색으로 바꾸기 위한 CSS 속성
            //  #section { background-color: black; }
        }

    //  3. Class Selector
    //      - HTML Element에서 Class를 정의하고, 그 값 앞에 .을 붙여서 사용
    //      - Class는 여러 개의 Element를 분류하기 위해 사용
    //      - Element Selector와 Class Selector 를 함께 사용하고 싶을 경우
    //          => 'HTML태그명.클래스명' 
        {
            // Class Selector를 사용한 예시
            //  - Class가 medium인 Element들을 정의한 HTML 코드
            <div>
                <span class="medium"> ... </span>
                <p class="medium"> ... </p>
            </div>

            //  - class가 medium인 Element들의 글자 크기를 20으로 변경하기 위한 CSS 속성
            //  .medium { font-size: 20px; }

            //  - Element Selector와 Class Selector를 함께 사용한 것
            //  - 해당 HTML 태그에 해당 클래스가 있는 경우에만 스타일이 적용됨
            //  p.medium { font-size: 20px; }
        }

    //  4. Universal Selector
    //      - 특정 Element에만 선택적으로 적용하는 것이 아니라, 전체 Element에 적용하기 위한 Selector
    //      - 별표(*)를 사용
        {
            // Universal Selector 예시
            //  - 모든 Element의 글자 크기를 20px로 하고, 글자 색깔을 파란색으로 변경하기 위한 CSS 속성
            // * { font-size: 20px, color: blue; }
        }

    //  5. Grouping Selector
    //      - 여러가지 선택자를 그룹으로 묶어 하나의 스타일을 적용하기 위해 사용하는 Selector
    //      - 같은 스타일을 여러 조건의 선택자에 적용하고 싶을 때에는 각 선택자를 콤마로 구분하여 Grouping Selector를 적용하면 됨
        {

            //  - 똑같은 스타일들이 각기 다른 Selector로 나뉘어져 있음 (Grouping Selector 사용 전)
                /* 
                    h1 {
                        color: black;
                        text-align: center;
                    }

                    h2 {
                        color: black;
                        text-align: center;
                    }

                    p {
                        color: black;
                        text-align: center;
                    }
                */

            //  - Grouping Selector 사용
                /* 
                    h1, h2, p {
                        color: black;
                        text-align: center;
                    }
                */
        }    

    //  6. Element의 상태와 관련된 Selector
    //      - 상태: 마우스 커서가 Element 위에 올라오거나 등 Element가 활성화 되어 있는 상태
    //      - 상태와 관련된 대표적인 Selector
    //          =>  1. :hover
    //                  - 마우스 커서가 element 위에 올라왔을 때
    //              2. :active
    //                  - 주로 <a> 태그(link)에 사용되는데, element가 클릭됐을 때를 의미
    //              3. :focus
    //                  - 주로 <input>태그에서 사용되는데, elment가 초점을 갖고 있을 경우를 의미
    //              4  :checked
    //                  - radio button이나 checkbox 같은 유형의 <input> 태그가 체크되어 있는 경우를 의미
    //              5  :first-child, :last-child
    //                  - 상위 element를 기준으로 각각 첫번째 child, 마지막 child일 경우를 의미
        {
            /*
                button:hover {
                    font-weight: bold;
                }

                a:active {
                    color: red;
                }

                input:focus {
                    color: #000000;
                }

                option:checked {
                    background: #00ff00;
                }

                p:first-child {
                    background: #ff0000;
                }
            
                p:last-child {
                    background: #0000ff;
                }
            */
        }
}



///* 2. 레이아웃과 관련된 CSS 속성 */
{
    /* Layout과 관련된 속성 */
    //  - Layout: 화면에 Element들을 어떻게 배치할 것인가
    //          그렇기에 Layout과 관련된 CSS 속성들은 화면상의 배치와 관련이 있음


    //  1. display
    //      - Element를 어떻게 표시할지에 대한 방법에 관한 속성
    //      - 모든 Element는 종류에 따라서 기본적으로 정해진 display 속성값을 가지고 있음
    //      - 대부분의 Element는 블록 또는 인라인 값을 가짐

    //      - display 속성의 대표적인 값들
    //          1-1. display: none;
    //              - element를 화면에서 숨기기 위해 사용
    //              - element가 삭제되는 것이 아니라, 존재하긴 하지만, 화면에 보이지 않는 것
    //              - <script> 태그의 display 속성 기본값은 display: none;
    //          1-2. display: block;
    //              - 블록 단위로 element를 배치
    //                  => 블록 단위: element가 새로운 줄에서 시작하여 위치한 곳 전체의 width를 차지한다는 것을 의미
    //              - <p>, <div>, <h1> ~ <h6> 태그의 display 속성 기본값은 display: block;
    //          1-3. display: inline;
    //              - element를 라인 안에 넣는 것
    //              - 이 속성을 사용할 시에 모든 width, height과 관련된 속성들은 효과가 없어짐
    //              - <span> 태그의 display 속성 기본값이 display: inline;
    //          1-4. display: flex;
    //              - element를 블록 레벨의 flex container로 표시
    //                  => container 이기 때문에 내부의 다른 element들을 포함한다고 생각하면 됨
    //              - container이기 때문에 내부에 다른 element들을 포함


    //  2. visibility
    //      - 눈에 잘 보이는 성질, 가시성
    //      - CSS에서는 element를 화면에 보여주거나 감추기 위해 사용하는 속성

    //      - visibility 속성의 대표적인 값들
    //          2-1. visibility: visible;
    //              - element를 화면에 보이게 하는 것
    //          2-2. visibility: hidden;
    //              - 화면에서 안 보이게 감추는 것
    //              - element를 안 보이게만 하는 것이고, 화면에서의 영역은 그대로 차지


    //  3. position
    //      - element를 어떻게 위치시킬 것인지, 즉 포지셔닝을 어떻게 할 것인지를 정의하기 위해 사용

    //      - position 속성의 대표적인 값들
    //          3-1. position: static;
    //              - 기본값으로 element를 원래의 순서대로 위치시킴
    //          3-2. position: fixed;
    //              - element를 브라우저 window에 상대적으로 위치시킴
    //          3-3. position: relative;
    //              - element를 보통의 위치에 상대적으로 위치시킴
    //          3-4. position: absolute;
    //              - element를 절대 위치에 위치시킴
    //              - 첫번째 상위 element를 기준으로 함




    /* 가로, 세로 길이와 관련된 속성들 */
    //      - 값으로는 보틍 실제 px, 또는 상대 값인 %를 사용 (m, rem 등도 있음)
    //      - 값으로 auto를 사용하면 브라우저에서 길이를 계산, 실제 값을 사용하면 실제 값만큼의 길이를 가지게 됨

    //  1. width: 가로 길이
    //  2. height: 세로 길이
    //  3. min-width: 최소 가로 길이
    //  4. min-height: 최소 세로 길이
    //  5. max-width: 최대 가로 길이
    //  6. max-height: 최대 세로 길이





    /* Flexbox */
    //      - 기존 CSS 레이아웃 사용의 불편한 부분을 개선하기 위해 등장
    //      - Flexbox는 크게 Container와 item으로 구성됨
    //      - 'display: flex' 사용시 element가 flex container가 되고, flex container에는 내부에 여러 개의 element들을 포함할 수 있음
    //       이때 container에 포함되는 element들이 Flexbox의 flex item들이 됨
    //      - Container 안에 여러 개의 item이 존재할 경우 Container에 들어잉ㅆ는 flex와 관련된 CSS 속성은 이 item들을 어떤 방향과 어떤 순서로 배치할 것인지를 정의하게 됨

    //      - flex와 관련된 대표적인 속성
    //          1. display: flex;
    //              - element를 flex container로 사용하기 위해서 작성해주어야 함
    //              - 이를 작성하지 않으면, display 속성의 값이 flex가 아닌 element의 기본값으로 지정이 됨


    //          2. flex-direction
    //              - 해당 속성을 사용하여 item들이 어떤 방향으로 배치될 것인지를 지정함
    //              - main axis: flex-direction으로 지정된 방향으로 향하는 축
    //              - cross axis: main axis를 가로지르는 방향으로 향하는 축

    //              - flex-direction 속성의 대표적인 값들
    //              2-1. flex-direction: row;
    //                  - 기본값이며, item을 행(row)을 따라 가로 순서대로 왼쪽부터 배치
    //              2-2. flex-direction: column
    //                  - item을 열(column)을 따라 세로 순서대로 위쪽부터 배치
    //              2-3. flex-direction: row-reverse
    //                  - item을 행(row)의 역(reverse) 방향으로 오른쪽부터 배치
    //              2-4. flex-direction: column-reverse
    //                  - item을 열(column)의 역(reverse) 방향으로 아래쪽부터 배치


    //          3. align-items
    //              - container 내에서 item을 어떻게 정렬할 것인지를 결정하는데, 이 때 정렬은 cross axis 기준으로 함
    
    //              - align-items 속성의 대표적인 값들
    //              3-1. align-items: stretch;
    //                  - 기본값으로써 item을 늘려서(stretch) container를 가득 채움
    //              3-2. align-items: flex-start;
    //                  - cross axis의 시작 지점으로 item을 정렬
    //              3-3. align-items: center;
    //                  - cross axis의 중앙으로 item을 정렬
    //              3-4. align-items: flex-end;
    //                  - cross axis의 끝 지점으로 item을 정렬
    //              3-5. align-items: baseline;
    //                  - item을 baseline 기준으로 정렬


    //          4. justify-content
    //              - container 내에서 item들을 어떻게 나란히 맞출 것인지를 결정
    //              - align-items와 반대로 main axis를 기준으로 함

    //              - justify-content 속성의 대표적인 값들
    //              4-1. justify-content: flex-start;
    //                  - main axis의 시작 지점으로 item을 맞춤
    //              4-2. justify-content: center;
    //                  - main axis의 중앙으로 item을 맞춤
    //              4-3. justify-content: flex-end;
    //                  - main axis의 끝 지점으로 item을 맞춤
    //              4-4. justify-content: space-between;
    //                  - main axis를 기준으로 첫 item은 시작 지점에 맞추고 마지막 item은 끝 지점에 맞춤
    //                   중간에 있는 item들 사이(between)의 간격(space)이 일정하게 되도록 맞춤
    //              4-5. justify-content: space-around;
    //                  - main axis를 기준으로 각 item의 주변(around) 간격(space)을 동일하게 맞춤
    //                      => 주변은 item의 시작과 끝을 의미


}



///* 3. Font와 관련된 CSS 속성, 기타 많이 사용하는 CSS 속성 */
{
    /* font와 관련된 대표적인 속성 */
    //  1. font-family
    //      - 사용할 글꼴
    //      - 글꼴의 이름에 띄어쓰기가 들어갈 경우 큰 따옴표("")로 묶어주어야 함
    //      - 사용할 글꼴이 하나가 아닌 경우, 콤마로 구분하여 여러 개의 글꼴 작성 가능 
    //       (지정한 글꼴을 찾지 못했을 경우 사용할 글꼴을 순서대로 지정해 줌. 대비책)
    //      - 이는 최대한 많은 브라우저와 운영체제에서 글자가 깨지지 않고 나올 수 있도록 하기 위함
    //      - 여러 개의 글꼴을 작성했을 경우, 마지막에 쓰여있는 것은 일반적인 글꼴 분류를 의미
    
    //      - 일반적인 글꼴 분류 (Generic font family)
    //          1-1. serif
    //              - 각 글자의 모서리에 작은 테두리를 가지고 있는 형태의 글꼴
    //          1-2. sans-serif
    //              - 모서리에 테두리가 없이 깔끔한 선을 가진 글꼴
    //              - 컴퓨터 모서리에서는 serif보다 가독성이 좋음
    //          1-3. monospace
    //              - 모든 글자가 같은 가로 길이를 가지는 글꼴
    //              - 코딩을 할 때 주로 사용
    //          1-4. cursive
    //              - 사람이 쓴 손글씨 모양의 글꼴
    //          1-5. fantasy
    //              - 장식이 들어간 형태의 글꼴

        {
            /*  
                #title1 {
                    font-family: "Times New Roman", Times, serif;
                }

                #title2 {
                    font-family: Arial, Verdana, sans-serif;
                }

                #title3 {
                    font-family: "Courier New", Monaco, monospace;
                }
            */
        }


    //  2. font-size
    //      - 글꼴의 크기
    //      - font-size의 단위 분류
    //          2-1. px(pixel)
    //              - 고정된 값
    //              - 브라우저를 통해 크기를 바꿀 수 없음
    //          2-2. em
    //              - px와 다르게 사용자가 브라우저에서 글꼴의 크기를 변경할 수 있게 해줌
    //              - 브라우저의 기본 글꼴 크기인 1em은 16px과 동일함
    //          2-3. rem
    //          2-4. vw(viewport width)
    //              - viewport 가로 길이의 %를 의미



    //  3. font-weight
    //      - 글꼴의 두께


    //  4. font-style
    //      - 글꼴의 스타일

    //      - font-style 속성의 값들
    //          4-1. font-style: normal;
    //              - 일반적인 글자의 형태를 의미
    //          4-2. font-style: italic;
    //              - 글자가 기울어진 형태로 나타남
    //              - 별도로 기울어진 형태의 글자들을 직접 디자인해서 만든 것
    //              - 이를 사용하려면, 해당 글꼴이 italic을 지원하는지를 확인한 뒤에 사용해야 함
    //          4-3. font-style: oblique;
    //              - 글자가 비스듬한 형태로 나타남
    //              - 그냥 글자를 기울인 것




    /* 기타 많이 사용하는 속성 */
    //  1. background-color
    //      - Element의 배경색을 지정하기 위한 속성
    //      - 값으로 색상의 값이 들어가게 됨
    //      - 배경색을 투명하게 만들고 싶을 경우에는 값에 transparent 키워드를 써주면 됨
    //      - CSS에서 색상 값
    //          1-1. 16진수 컬러값: #ff0000
    //          1-2. 투명도를 가진 16진수 컬러값: #ff000055
    //          1-3. RGB 컬러값: rgb(255, 0, 0)
    //          1-4. RGBA 컬러값: rgba(255, 0, 0, 0.5)
    //          1-5. HSL 컬러값: hsl(120, 100%, 25%)
    //          1-6. HSLA 컬러값: hsla(120, 100%, 50%, 0.3)
    //          1-7. 미리 정의된 색상의 이름: red
    //          1-8. currentcolor 키워드: 현재 지정된 색상 값을 사용


    //  2. border
    //      - 테두리를 위한 속성
    //      - border-width(테두리 두께) border-style(테두리 스타일) border-color(테두리 색상) 차례대로 작성
    //      - 세가지를 따로 따로 작성해도 됨
        {
            /* 
                div {
                    border: border-width border-style border-color;
                }

                #section {
                    border: 1px solid black;
                }
            
            */
        }

}


///* 4. sytled-components */
{
    /* styled-components */
    //      - CSS 문법을 그대로 사용하면서 결과물을 스타일링된 Component 형태로 만들어주는 오픈소스 라이브러리
    //      - Component 개념을 사용하기 때문에 React와 굉장히 궁합이 잘 맞음

    //  1. styled-components 설치
    //      => npm install --save styled-components

    //  2. src > chapter_15 > 'MainPage.jsx' 파일 생성 및 강의 내용 작성
    //      - 실행시켜서 style Component가 잘 되는지 확인



    /* styled-components 기본 사용법 */
    //      - styled-components는 tagged template literal을 사용하여 구성요소의 스타일을 지정함
    //          => literal: 소스 코드의 고정된 값을 의미
    //          => template literal: JS에서 제공하는 문법. ``(백틱)을 사용하여 문자열을 작성하고 그 안에 대체 가능한 expression(substitution: 대체)을 넣는 것
    //              - template literal 분류
    //                  1. Untagged Template Literal
    //                      - 보통 문자열을 여러 줄에 걸쳐서 작성하거나 포매팅을 하기 위해 사용
                            {
                                // Untagged template literal
                                // 단순한 문자열
                                `string text`;

                                // 여러 줄(Multi-line)에 걸친 문자열
                                `string text line 1
                                string text line 2`

                                // 대체 가능한 expression이 들어있는 문자열
                                `string text ${expression} string text`;
                            }

    //                  2. Tagged Template Literal
    //                      - 앞에 있는 태그 function을 호출하여 결과를 리턴함
    //                      - 태그 function의 파라미터는 expression으로 구분된 문자열 배열과 expression이 순서대로 들어가게 됨
                            {
                                // Tagged template literal
                                // myFunction의 파라미터로 expression으로 구분된 문자열 배열과 expression이 순서대로 들어간 형태로 호출됨
                                myFunction `string text ${expression} string text`;
                            }

    //  1. styled-components 생성
    //      - Tagged Template Literal을 사용하여 CSS 속성이 적용된 React Component를 만들어줌
    //      - ``로 둘러싸인 문자열 부분에 CSS 속성을 넣고, 태그 함수 위치는 styled.html태그 형태로 사용
            {
                /*
                    import styled from "styled-components";
                    const Wrapper = styled.div`
                        padding: 1em;
                        background: grey;
                    `;
                */
            }

    //  2. styled-components의 props 사용하기
            {
                /*
                    import styled from "styled-components";

                    const Button = styled.button`
                        color: ${props => props.dark ? "white" : "dark"};
                        background: ${props => props.dark ? "black" : "white"};
                        border: 1px solid black;
                    `;

                    function Sample(props) {
                        return (
                            <div>
                                <Button>Normal</Button>
                                <Button dark={props}>Dark</Button>
                            </div>
                        )
                    }

                    export default Sample;
                */
            }

    //  3. styled-components의 스타일 확장하기
    //      - styled Component를 사용하여 생성된 React Component를 기반으로 스타일을 추가하여 적용하고 싶을 경우
            {
                /*
                    import styled from "styled-components";

                    // Button Component
                    const Button = styled.button`
                        color: ${props => props.dark ? "white" : "dark"};
                        background: ${props => props.dark ? "black" : "white"};
                        border: 1px solid black;
                    `;

                    // Button에 style이 추가된 RoundedButton Component
                    const RoundedButton = styled(Button)`
                        border-radius: 16px;
                    `;


                    function Sample(props) {
                        return (
                            <div>
                                <Button>Normal</Button>
                                <Button dark={props}>Dark</Button>
                                <RoundedButton>Rounded</RoundedButton>
                            </div>
                        )
                    }

                */
            }

}


///* 5. sytled-components를 사용하여 스타일링 해보기 */
{
    //  1. src > chapter_15 > 'Block.jsx' 파일 생성 및 강의 내용 작성
}