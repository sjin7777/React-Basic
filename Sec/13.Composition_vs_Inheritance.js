'use strict';

///* 1. Composition 방법과 Inheritance */
{
    //  - React에서 Component를 어떻게 구성해서 사용하는지에 대한 두가지 방법
    //  1. Composition (합성)
    //      - 여러 개의 Component를 합쳐서 새로운 Component를 만드는 것을 의미
    //      - Component 조합 방법에 따라서 Composition의 사용 기법이 나뉨

    //      1-1. Composition 방법 1 - Containment
    //          - 하위 Component를 포함하는 형태의 합성 방법
    //          - 사용 방법: React Component의 props의 기본적으로 들어있는 children 속성을 사용
    //          -           props.children이나 직접 정의한 props를 이용하여 하위 Component를 포함하는 형태로 합성하는 방법

    //          - Sidebar나 Dialog 같은 box 형태의 Component는 자신의 하위 Component를 미리 알 수 없음
    //          - 예> 동일한 Sicebar Component를 사용하는 2개의 쇼핑몰이 있을 경우 
    //              - 하나의 쇼핑몰에는 의류와 관련된 메뉴가 8개 들어있고,
    //                다른 쇼핑몰에는 식료품과 관련된 메뉴가 10개 존재함
    //              - Sidebar Component 입장에서는 자신의 하위 Component로 어떤 것들이 올지 알 수 없음 
    //              - 해당 Component를 사용하는 개발자가 어떤 것을 넣느냐에 따라 하위 Component가 달라지기 때문 
    //              - 그렇기 때문에 이런 경우에는 Containment 방법을 사용하여 Composition을 사용
                {
                    // props.children을 사용하여 해당 Component의 하위 Component가 모두 children으로 들어오게 됨
                    // children이라는 props은 개발자가 직접 넣어주는 것이 아니라 React에서 기본적으로 제공해주는 것
                    function FancyBorder(props) {
                        return (
                            <div className={`FancyBorder FancyBorder - ${props.color}`}>
                                {props.children}
                            </div>
                        )
                    }
                }
                {
                    // FancyBorder Component를 사용하는 예제
                    //  - FancyBorder Component의 props.children => h1 태그, p 태그 부분
                    //  - React에서는 하위 Component를 props.children으로 하나로 모아서 제공해줌
                    function WelcomeDialog(props) {
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">어서오세요</h1>
                                <p className="Dealog-message">우리 사이트에 방문하신 것을 환영합니다</p>
                            </FancyBorder>
                        )
                    }
                }
    
    //          - 여러 개의 children 집합이 필요한 경우
    //              => 별도로 props를 정의해서 각각 원하는 Component를 넣어주면 됨
                {
                    // 화면을 왼쪽과 오른쪽으로 분할해서 보여주는 Component
                    function SplitPane(props) {
                        return (
                            <div className="SplitPane">
                                <div className="SplitPane-left">
                                    {props.left}
                                </div>
                                <div className="SplitPane-right">
                                    {props.right}
                                </div>
                            </div>
                        )
                    }

                    // SplitPane Component를 사용하고 있는데 props로 left, right를 정의하여 그 안에 각각 다른 Component를 넣어줌
                    // SplitPane Component에서는 이 left, right를 props로 받게 되고, 각각 화면의 왼쪽과 오른쪽에 분리해서 렌더링하게 됨
                    // 이런 식으로 여러 개의 Children 집합이 필요한 경우에는 별도의 props를 정의해서 사용하면 됨
                    function App(props) {
                        return (
                            <SplitPane left={<Contacts />} right={<Chat />}/>
                        )
                    }
                }

    //      1-2. Composition 방법 2 - Specialization (전문화, 특수화)
    //          - 범용적인 개념을 구별이 되도록 구체화하는 것
    //          - 기존의 객체지향 언어에서는 상속(Inheritance)을 사용하여 Specialization을 구현하지만,
    //           React에서는 합성(Composition)을 사용하여 Specialization을 구현함
    //          - 범용적으로 쓸 수 있는 Component를 만들어 놓고, 이를 특수화 시켜서 Component를 사용하는 Composition 방법

    //          - 예> WelcomeDialog는 Dialog의 특별한 케이스이다
    //              - Dialog: 모든 종류의 Dialog를 다 포함하는 개념(굉장히 범용적인 의미)
    //              - WelcomeDialog: 누군가를 반기기 위한 Dialog(범용적인 의미가 아닌 구체화된 의미)
                {
                    // 범용적인 의미를 가진 Component
                    // props로 title, message를 가지고 있고, 각각 dialog에 나오는 제목과 메시지를 의미함
                    // 제목과 메시지를 어떻게 사용하느냐에 따라서 경고 dialog가 될 수도 있고, 인삿말 dialog가 될 수도 있음
                    function Dialog(props) {
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">{props.title}</h1>
                                <p className="Dialog-message">{props.message}</p>
                            </FancyBorder>
                        );
                    }

                    // 범용적인 의미를 가진 Dialog Component를 사용하는 Component
                    function WelcomeDialog(props) {
                        return (
                            <Dialog title="어서오세요" message="우리 사이트에 방문하신 것을 환영합니다." />
                        )
                    }
                }

    //      1-3. Composition 방법 1과 2인 Containment와 Specialization을 같이 사용하기
    //          - Containment를 위해서 props.children을 사용하고, Specialization을 위해서 직접 정의한 props를 사용
                {
                    // Containment를 위해 children 마지막 부분에 {props.children} 추가
                    //  - 이를 통해 하위 Component가 Dialog 하단에 렌더링 됨
                    function Dialog(props) {
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">{props.title}</h1>
                                <p className="Dialog-message">{props.message}</p>
                                {props.children}
                            </FancyBorder>
                        )
                    }

                    // Dialog Component를 사용하는 Component
                    function SignUpDialog(props) {
                        const [nickname, setNickname] = useState('');
                        const handleChange = (event) => setNickname(event.target.value);
                        const handleSignUp = () => alert(`어서오세요. ${nickname}님!`);
                        return (
                            // Specialization을 위한 props인 title 메시지에 값을 넣어주고 있으며, 
                            // 사용자로부터 닉네임을 입력받고 가입하도록 유도하기 위해 input과 button 태그가 들어가 있음
                            // 두개의 태그는 모두 props.children으로 전달되어 Dialog에 표시됨
                            <Dialog title="화성 탐사 프로그램" message="닉네임을 입력해주세요">
                                <input value={nickname} onChange={handleChange}/>
                                <button onClick={handleSignUp}>가입하기</button>
                            </Dialog>
                        )
                    }
                }



    //  2. Inheritance 
    //      - Composition과 대비되는 개념 (상속)
    //      - 부모 클래스를 상속받아서 새로운 자식 클래스를 만든다는 개념
    //      - 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 가지게 됨
    //      - React에서는 다른 Component로부터 상속받아서 새로운 Component를 만드는 것을 고려해볼 수 있음
    //       하지만, React를 개발한 meta에서 수천 개의 React Component를 사용했지만, 
    //       상속을 사용하여 Component를 만드는 것을 추천할 만한 사용 사례를 찾지 못했다고 함
    //      - 그렇기에 React에서는 Inheritance(상속)이라는 방법을 사용하는 것보다 Composition(합성)을 사용해서 개발하는 것이 더 좋은 방법임



    //  결론
    //      - 복잡한 Component를 쪼개서 여러 개의 Component로 만들고, 만든 Component들을 조합해서 새로운 Component들을 만들자
}



///* 2. Card 컴포넌트 만들기 */
{
    //  1. src > chapter_13 > 'Card.jsx' 파일 생성 및 강의 내용 작성
    //      - Card Component는 하위 Component를 감싸서 카드 형태로 보여주는 Component
    //      - Composition(합성)방식인 Containment와 Specialization 방법을 모두 사용하여 구현
    //          => children을 사용한 부분이 containment
    //          => title, backgroundColor를 사용한 부분이 Specialization
    //      - Card Component는 범용적으로 재사용이 가능한 Component이므로 이것을 사용하여 ProfileCard Component 구현

    //  2. src > chapter_13 > 'ProfileCard.jsx' 파일 생성 및 강의 내용 작성
    //      - Card Component를 사용하여 title에 이름을 넣고, backgroundColor를 녹색으로 설정
    //      - children으로는 간단한 소개글을 넣음
    //      - Card Component가 사용자의 프로필을 나타내는 ProfileCard Component가 됨
    

}