import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <div class = "navbar-menu">
              <p>자유 게시판</p>
              <p>비밀 게시판</p>
              <p>정보 게시판</p>
              <p>홍보 게시판</p>
              <p>SW 게시판</p>
            </div>

            <div class = "first">
              <p>자유게시판</p>
                <a href="/writing" data-link>등록하기</a>
              </div>
            </div>

            <div class = "context">
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="" data-link>아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
            </div>

            <div class="nextNum">
              <a href="" data-link>1</a>
              <a href="" data-link>2</a>
              <a href="" data-link>3</a>
              <a href="" data-link>4</a>
              <a href="" data-link>5</a>
              <a href="" data-link>6</a>
            </div>
        `;


  }
}