import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    // (1) 최초 호출
    constructor(props) {
        super(props);
        console.log('------------------------------------------------');
        console.log('- constructor -');
    }

    // (2) props로 받아온 값을 state에 동기화 시키는 용도로 사용. 컴포넌트를 마운트 하거나 props를 변경할 때 사용
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('- getDerivedStateFromProps - ');
        console.log('nextProps.color !== prevState.color result:  ', (nextProps.color !== prevState.color));
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    // (3) 컴포넌트 만들고, 첫 렌더링 다 마친 후 실행. 이 안에서 다른 JSLibrary또는 프레임워크 함수 호출하거나
    // 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업등 수행할때 좋다.
    componentDidMount() {
        console.log('- componentDidMount -');
    }

    // (4) props또는 state변경시 리렌더링 시작할지 여부 지정하는 메서드.(반드시 true or false반환 필요.)
    shouldComponentUpdate(nextProps, nextState) {

        // nextProps: 부모에서 호출하는 컴포넌트의 인자값이 넘어옴
        console.log('- shouldComponentUpdate -', nextProps, nextState);
        console.log('nextState.number % 10 !== 4 result : ', (nextState.number % 10 !== 4));
        // 숫자 마지막 자리가 4면 리렌더링되지 않습니다.
        return nextState.number % 10 !== 4;
    }

    // (5) 컴포넌트를 DOM에서 제거할 떄 실행. 
    // componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기에서 제거작업 필요.
    componentWillUnmount() {
        console.log('- componentWillUnmount -');
    }

    // render 메서트 호출 후 DOM에 변화를 반영하기 바로 직전에 호출하는 메서드. 
    // 여기서 반환하는 값은 componentDidupdate에서 세번째 파라미터인 snapshot값으로 전달받을 수 있다.
    // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('- getSnapshotBeforeUpdate -');
        console.log('nextProps.color', prevProps.color);
        console.log('prevState.color', this.props.color);
        if (prevProps.color !== this.props.color) {
            console.log(this.myRef.style.color);
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링 완료 후 실행. 업데이트 끝난 직후이므로, DOM 관련 처리를 해도 상관없다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('- componentDidUpdate -', prevProps, prevState);

        // snapshot의 값은 getSnapshotBeforeUpdate에서 리턴한 값을 그대로 유용하는듯하다.
        if (snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    handleClick = () => {
        console.log('- handleClick method -');
        this.setState({
            number : this.state.number + 1
        });
    }



    render() {
        console.log('render');
        const style={
            color: this.props.color
        }
        return (
            <div>
                <h1 
                    style={style}
                    ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;