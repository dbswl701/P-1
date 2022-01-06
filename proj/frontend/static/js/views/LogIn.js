import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Log in");
  }

  async getHtml(){
    return `
      <div class = "login_body">
      <div class = "ID_content">
        ID를 입력하시오.
      </div>
      <div class = "sign">
        <a href="./singup" class = "signup">
          회원가입
        </a>
        <a href="" class = "signin">
          로그인
        </a>
      </div> 
    `;
  }
}