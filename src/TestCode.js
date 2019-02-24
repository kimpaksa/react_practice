import React, { Component } from 'react';

class TestCode extends Component {
    render() {
        const text = '너는1 어썸하니?';
        const result = true;
        const style = {
          backgroundColor: 'gray',
          border: '1px solid black',
          height: Math.round(Math.random()* 300) + 50,
          width: Math.round(Math.random()* 300) + 50,
          WebkitTransition: 'all',
          MozTransition:  'all',
          msTransition:  'all'
        };
        return (
            <div className='my-div'>
            {/* comment */}
              <h1>Hello react</h1>
              <h2>{text}</h2>
              {
                result && '참입니다요'
              }
              <div 
                style={style}
                // self-closed 태그에만 작동하는 주석
                // 마지막 />가 꼭 새 줄에 있어야 함..
                /* 이렇게 작성할 수 도 있다. */
      
                ></div>
              <form>
                First Name <br/>
                <input type="text" name="firstName"/><br/>
                SEC Name <br/>
                <input type="text" name="secName"/><br/>
              
      
              </form>
              // 여기 쓰는건 그대로 랜더링
              /* 주석도 못씀 */
            </div>
      
        );
    }
}

export default TestCode;