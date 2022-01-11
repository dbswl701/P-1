import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Writing");
  }

  async getHtml(){
    return `
    <section>
    <form class = "writing_body">
      <select class = "writing_board">
        <option  value="ktx">KTX</option>
        <option value="itx">ITX 새마을</option>
        <option value="mugung">무궁화호</option>
      </select>

      <input type="text" name = "title" value="제목을 입력해 주세요">
      <textarea name="description" placeholder="내용"></textarea>
      <input type = "submit" value="글쓰기" data-link>

    </form>
  </section>
    `;
  }
}