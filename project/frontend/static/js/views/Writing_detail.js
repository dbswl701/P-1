import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Writing");
  }

  async getHtml(){
    return `
    <div class = "writing_body">
    <div class = "detail_head">
      <p class = "detail_head1">자유게시판</p>
      <p class = "detail_head2">강윤지</p>
    </div>
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
  <a href="" class="writing_btn" data-link>글쓰기</a>
</section>
    `;
  }
}