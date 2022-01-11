import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Writing");
  }

  async getHtml(){
    return `
    <section>
    <div class = "writing_body">
      <div class = "writing_board">
        <p>게시판을 선택해주세요</p>
      </div>
      <div class = "writing_title">
        <p>제목을 입력해 주세요</p>
      </div>
      <div class = "writing_content">
        <p>내용</p>
      </div>
    </div>
    <a href="/writing_detail" class="writing_btn" data-link>글쓰기</a>
  </section>
    `;
  }
}