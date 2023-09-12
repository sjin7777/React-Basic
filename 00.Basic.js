'use strict';


///* 1. HTML과 CSS */
if(true) {
    /* HTML(Hyper Text Markup Language) */
    //      - Markup 언어의 한 종류
    //      - 웹 사이트의 뼈대를 구성하기 위해 사용하는 마크업 언어
    //          > Markup: 문서나 데이터를 처리하기 위해 문서에 추가되는 정보
    //          > Markup Language: Markup 정보를 표현하는 언어
    
    
    
    /* Tag(태그) */
    //      - 웹 사이트의 구조를 만듦
    //      - 웹 사이트에 들어갈 내용들을 채움
    //      - 태그는 열었으면 꼭 닫아줘야 함 (<br />)   => 오류 발생 방지
    
    
    
    /* 웹 사이트의 뼈대를 구성하는 태그 */
    // 1. <html></html>: html의 시작과 끝을 알리는 태그 
    // 2. <head></head>: html의 머리 부분, 웹 사이트의 메타데이터(제목, 설명등의 여러가지 속성)이 들어감
    // 3, <body></body>: html의 몸통 부분, 실제로 웹 사이트에서 보이는 콘텐츠가 들어감
    
    
    
    /* MPA(Multi Page Application) & SPA(Single Page Application) */
    // MPA(Multi Page Application)
    //  - 전통적인 방식의 웹 애플리케이션
    //  - 사용자가 페이지를 요청할 때마다 새로운 페이지가 로딩되어 화면에 나타나는 것
    //  - 각 페이지는 각자의 HTML 파일을 가지고 있음
    //  - 보통 하나의 복잡한 사이트에 접속해서 여러가지 버튼이나 탭을 누르면서 여러 페이지를 왔다갔다 할 때마다 브라우저 내용이 달라지는걸 볼 수 있는데, 이는 body 태그에 둘러싸인 내용이 달라진 것
    //  - 실제로 각 페이지별로 html 파일이 따로 존재하며, 페이지를 이동하게 될 경우 브라우저에서는 해당 html 파일을 받아와서 화면에 보여줌
    //  - 수많은 페이지가 존재하는 복잡한 웹 사이트의 경우 html의 페이지가 많아져 관리에 어려움이 발생함
    
    // SPA(Single Page Application)
    //  - 하나의 페이지만 존재하는 웹 사이트 또는 웹 애플리케이션
    //  - HTML 파일이 1개만 존재
    //  - body 태그의 내용이 비어진 상태로 시작하며, 해당 페이지에 접속할 때, 그 페이지에 해당하는 컨텐츠를 가져와서 동적으로 body 태그 내부를 채움 (참고로 리액트가 여기를 채우는 역할임)
    
    
    
    /* CSS(Cascading Style Sheets) */
    //      - 웹 사이트의 layout과 글꼴, 색상 등의 디자인을 입히는 역할을 하는 언어
    //      - HTML로 웹 사이트의 구조를 만들었다면, CSS를 사용하여 디자인을 입힘

}



///* 2. JavaScript 소개 및 자료형 */
if(true) {
    /* JavsScript (= ECMAScript) */
    //      - 웹 사이트를 동적으로 움직이게 할 수 있음


    /* Script Language  vs. Compile Language */
    // Script Language (JavsScript, ...)
    //      - 프로그램이 실행되는 런타임에 코드가 해석되고 실행됨
    // Compile Language (C, Java, ...)
    //      - Compile 과정을 통해 소스코드가 해석되고, 실행 가능한 형태로 변환됨 



    /* JavaScript 문법(ES6 기준) - 자료형(Data Type) */
    //      - 모든 변수들은 하나의 자료형을 가지게 됨
    //      - 일반적인 프로그래밍 언어에서는 변수를 선언하는 시점에 해당 변수의 자료형이 결정되지만,
    //       JS에서는 변수를 선언할 때가 아닌, 변수가 대입되는 시점에 해당 변수의 자료형이 결정됨 (Dynamic Typing)
    //          > Dynamic Typing(동적 타이핑): 동적으로 자료형이 결정되는 것, JS는 이 동적 타이핑 방식을 사용
    //                                      그렇기 때문에 JS에서는 변수를 선언할 때, 다른 프로그래밍 언어처럼 변수의 자료형을 먼저 쓰지 않고, let과 const를 씀

    // 1. Number type
    let n1 = 1234;
    let n2 = 5.678;

    // 2. String type
    let s1 = 'hello';
    let s2 = "world";

    // 3. Boolean type
    let b1 = true;
    let b2 = false;

    // 4. Null type (값이 정의가 되긴 하였으나, 그 값이 null)
    let n = null;

    // 5. Undefined type (값이 아직 정의되지 않은 상태)
    let u1;
    let u2 = undefined;

    // 6. Array type
    let arr = [1, 2, 3, 4];

    // 7. Object type
    let obj = { a: 'apple', b: 'banana', c: 'carrot'};


    {
        // Number 타입으로만 이루어진 배열
        let arr1 = [1, 2, 3, 4, 5];
        
        // String 타입으로만 이루어진 배열
        let arr2 = ['h', 'e', 'l', 'l', 'o'];
        
        // Number 타입과 String 타입을 함께 사용한 배열
        let arr3 = [1, 'h', 2, 'i'];
        
        // 다양한 자료형들을 함께 사용한 배열
        let arr4 = [true, 1, undefined, false, 'h', 2, null, 'i'];

        console.log(arr1[0]);       // 1
        console.log(arr2[1]);       // e
        console.log(arr3[2]);       // 2
        console.log(arr4[3]);       // false
    }
    {
        // 값으로 String 타입만을 사용한 객체
        let obj1 = { a: 'apple', b: 'banana', c:'carrot' };
        
        // 값으로 Number 타입만을 사용한 객체
        let obj2 = { a: 1, b: 2, c: 2};

        // 값으로 다양한 자료형들을 함께 사용한 객체
        let obj3 = { a: 'hello', b: 100, c: [1, 2, 3, 4] };

        // 값으로 객체를 사용한 객체
        let obj4 = {
            a: { a1: 1, a2: 2 },
            b: { b1: 3, b3: 4 },
            c: { c1: 5, c2: 6 },
        };

        console.log(obj1['a']);     // apple
        console.log(obj2.a);        // 1
        console.log(obj3['c']);     // [1, 2, 3, 4]
        console.log(obj4.c.c2);     // 6
    }

}



///* 3. JavaScript의 연산자 */
if(true) {
    /* JavaScript 문법(ES6 기준) - 연산자(Operator) */
    // 1. 대입 연산자 (Assignment operator)
    //  - 변수에 값을 대입하기 위해 사용하는 연산자
    //  - 대입 연산자는 항상 오른쪽에서 왼쪽 방향으로 흐름이 흘러감
    {
        let a = 10;
        let b = 20;

        console.log(a);     // 10
        console.log(b);     // 20
    }    


    // 2. 산술 연산자 (Arithmetic operators) => 사칙 연산자 (+, -, *, /) + (%, **)
    {
        let a = 2;
        let b = 4;

        console.log(a + b);     // 6
        console.log(a - b);     // -2
        console.log(a * b);     // 8
        console.log(a / b);     // 0.5
        console.log(a % b);     // 2
        console.log(a ** b);    // 16
    }

    // 대입 연산자 + 산술 연산자
    {
        let a = 2;
        let b = 4;

        a += b;     // a = a + b
        console.log(a);     // 6

        a -= b;     // a = a - b
        console.log(a);     // 2

        a *= b;     // a = a * b
        console.log(a)      // 8

        a /= b;     // a = a / b
        console.log(a);     // 2
    }


    // 3. 증가 연산자(++) & 감소 연산자(--)
    //  - postfix 방식: a++, a--
    //  - prefix 방식: ++a, --a
    {
        let a = 1;
        let b = a++;

        console.log(a, b);      // 2, 1

        let c = 1;
        let d = ++c;
        console.log(c, d);      // 2, 2
    }


    // 4. 관계 연산자 (Relational operators) (= 비교 연산자 (Comparison operators))
    //  - <, >, <=, >=
    //  - 왼쪽을 기준으로 생각하기
    //      - a < b (a가 b보다 작다)
    //      - a > b (a가 b보다 크다)
    //      - a <= b (a가 b보다 작거나 같다)
    //      - a >= b (a가 b보다 크거나 같다)
    {
        let a = 1;
        let b = 2;
        
        console.log(a < b);         // true
        console.log(a > b);         // false
        console.log(a <= b);        // true
        console.log(a >= b);        // false
    }


    // 5. 동등 연산자 (Equality Operators)
    //  - a == b (a가 b와 같다)
    //  - a != b (a가 b와 같지 않다)
    {
        let a = 1;
        let b = '1';

        console.log(a == b);        // true
        console.log(a != b);        // false
    }


    // 6. 일치 연산자 (Strict Equality Operators)
    //  - a === b (a가 b와 값과 자료형이 모두 같다)
    //  - a !== b (a가 b와 값이나 자료형이 같지 않다)
    {
        let a = 1;
        let b = '1';

        console.log(a === b);        // false
        console.log(a !== b);        // true
    }


    // 7. 이진 논리 연산자 (Binary Logical Operators)
    //  - a && b (a와 b가 모두 true일 경우에만 true)
    //  - a || b (a 또는 b가 true일 경우에는 true)
    {
        let a = true;
        let b = false;

        console.log(a && b);        // false
        console.log(a || b);        // true
    }


    // 8. 조건부 연산자 (Conditional Operator) (= 삼항 연산자 (Ternary Operator))
    //  - 조건식 ? true일 경우의 값 : false일 경우의 값
    {
        let a = true;
        let b = false;

        console.log(a ? 1 : 2);     // 1
        console.log(b ? 1 : 2);     // 2
    }

}



///* 4. JavaScript의 함수 */
if(true) {
    /* 함수 */
    //  - 입력을 받아서 정해진 출력을 하는 것
    //      > arguments(인자): 변수(variable). 함수를 정의할 때 사용
    //      > Parameters(파라미터): 값(value). 함수를 호출할 때 사용

    

    /* 함수 정의 및 호출 */
    {
        // function statement를 사용
        function sum(a, b) {
            return a + b;
        }
        console.log(sum(10, 20));       // 30

        // arraw function expression을 사용
        const multiply = (a, b) => {
            return a * b;
        }
        console.log(multiply(10, 20));      // 200
    }

}



///* 5. 개발환경 설정하기 */
if(true) {
    /* 1. Node.js와 npm */
    // Node.js (JavaScript runtime)
    //      - js로 Network application을 개발할 수 있게 해주는 환경
    // npm (node package manager)
    //      - Node.js를 위한 package manager
    //          > package manager의 역할: 프로젝트에서 필요로 하는 다양한 외부 패키지들의 버전과 의존성을 관리하고, 편하게 설치 및 삭제를 도와주는 역할
    
    // 참고로 Node.js는 npm을 설치하면 자동으로 함께 설치됨
    

    
    /* 2. Node.js와 npm 설치하기 */
    //  2-1. https://nodejs.org/en/
    //  2-2. 링크 들어간 뒤 바로 나오는 다운로드 버튼 두개 (왼쪽은 안정화된 버전, 오른쪽은 최신 버전) 중 왼쪽 버전 다운로드
    //      (다운로드 당시 18.17.1 LTS)

    //  2-3. Node.js가 정상적으로 설치되었는지 버전 확인
    //      Windows -> PowerShell 을 열어서 확인
    //      >> node --version       => v18.17.1

    //  2-4. npm이 정상적으로 설치되었는지 버전 확인
    //      Windows -> PowerShell 을 열어서 확인
    //      >> npm --version       => 9.6.7



    /* 3. VS Code 설치하기 */
    // IDE(Integrated Development Environment): 통합 개발 환경(여기서는 VS Code 사용)
    //  3-1. https://code.visualstudio.com/
    //  3-2. VS Code 설치 후 상단 메뉴에서 Terminal > New Terminal 선택
    //  3-3. 하단에 VS Code에 내장되어 있는 Terminal이 나오게 됨
    //      앞으로 이 Terminal을 이용하여 커맨드 명령어들을 실행하게 됨 

}
