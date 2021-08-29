import React, { Component } from 'react';
import '../css/Signup.css'

class Signup extends Component{
    render() {
        return (
            <>
    <ul className="top-bar__menus">
        <li className="top-bar__menu"><a href = "/">홈</a></li>
        <li className="top-bar__menu"><a href = "/Login">로그인</a></li>
        <li className="top-bar__menu">마이페이지</li>
      </ul>

    <div className="signUp-container">
    <div className="border2">
      <div className="contents">
      <form type="submit" id= "signup_form" >
        <h2 className="pages-sub2">회원가입</h2>
        
            <div className="input_box">
              <div className="name-box">
              <label for="id">아이디</label>
              </div>
              <input
                type="text"
                id="signUpId"
                className="signup_input"
                maxlength="20"
                placeholder="10자리 이내로 입력"
              />
            </div>
       
            <div className="input_box">
            <div className="name-box">
              <label for="pswd1">비밀번호</label>
              </div>
              <input
                type="password"
                id="signUpPw"
                className="signup_input"
                maxlength="20"
                placeholder="********"
              />
            </div>
        
            <div className="input_box">
            <div className="name-box">
              <label for="pswd2">비밀번호 확인</label>
              </div>
              <input
                type="password"
                id="pswd2"
                className="signup_input"
                maxlength="20"
                placeholder="********"
              />
            </div>

          <div className="signUp-btn__box"></div>
            <button class="signUp-button">회원가입</button>
          
        
      </form>
    </div>
    </div>
    </div>
    </>
    );
};
}
    export default Signup;