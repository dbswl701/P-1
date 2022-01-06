import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Sign up");
  }

  async getHtml(){
    return `
      <div class = "login_body">
        <div class = "ID_content">
          ID를 입력하시오.
        </div>
        <div class = "sign">
          <a href="" class = "signup">
            나가기
          </a>
          <a href="" class = "signin">
            회원가입
          </a>
        </div>
      </div>
    `;
  }
}