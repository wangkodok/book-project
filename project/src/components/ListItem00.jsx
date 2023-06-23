// 이미지
import BookMoth from "assets/book_moth.jpg";
import BookMoth01 from "assets/book_moth02.jpg";
import BookMoth02 from "assets/book_moth03.jpg";

// 컴포넌트
import BookRating from "components/BookRating";

function ListItem00() {
  return (
    <div className="common-month month">
      <div className="info-wrap">
        <figure className="moth-book">
          <img src={BookMoth} alt="" />
        </figure>
        <div className="book-info">
          <h4 className="tit-h4">자바스크립트 핵심 가이드(더글...</h4>
          <BookRating score="3.5" />
          <p className="desc">
            야후의 선임 자바스크립트 아키텍트 더글라스 크락포드의 『자바스크립트
            핵심 가이드』. 자바스크립트를 우연히...
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItem01() {
  return (
    <div className="common-month month">
      <div className="info-wrap">
        <figure className="moth-book">
          <img src={BookMoth02} alt="" />
        </figure>
        <div className="book-info">
          <h4 className="tit-h4">더 괜찮은 웹 개발자가 되기 위한...</h4>
          <BookRating score="3.5" />
          <p className="desc">
            야후의 선임 자바스크립트 아키텍트 더글라스 크락포드의 『자바스크립트
            핵심 가이드』. 자바스크립트를 우연히...
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItem02() {
  return (
    <div className="common-month month">
      <div className="info-wrap">
        <figure className="moth-book">
          <img src={BookMoth01} alt="" />
        </figure>
        <div className="book-info">
          <h4 className="tit-h4">비전공자를 위한 이해할 수 있는 IT 지식</h4>
          <BookRating score="3.5" />
          <p className="desc">
            야후의 선임 자바스크립트 아키텍트 더글라스 크락포드의 『자바스크립트
            핵심 가이드』. 자바스크립트를 우연히...
          </p>
        </div>
      </div>
    </div>
  );
}

export { ListItem00, ListItem01, ListItem02 };
