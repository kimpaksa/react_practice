import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
 
    static defaultProps = {
        name: '기본 이름',
        age: 12
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
/*
    constructor(props) {
        super(props);
        this.state = {
            number: 10
        }
    }
*/
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <p>안녕하세요 {this.props.name} 님 반갑습니다.</p>
                <p>나이는 {this.props.age} 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}
/*
MyComponent.defaultProps = {
    name: '기본 이름'
}
MyComponent.propTypes = {
   name: PropTypes.string
}
*/


export default MyComponent;