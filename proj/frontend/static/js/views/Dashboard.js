import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    // return `
    //         <h1>Welcome back, Dom</h1>
    //         <p>
    //             Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    //         </p>
    //         <p>
    //             <a href="/posts" data-link>View recent posts</a>.
    //         </p>
    //     `;

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
                <a href="">등록하기</a>
              </div>
            </div>

            <div class = "context">
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
              <div class = "inner">
                <p>12/18</p>
                <a href="">아주 비기너 참여하시는 ..</a>
                <p>익명</p>
              </div>
            </div>

            <div class="nextNum">
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
              <a href="">5</a>
              <a href="">6</a>
            </div>
        `;


  }
}