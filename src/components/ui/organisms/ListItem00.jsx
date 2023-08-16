import BookRating from "components/ui/organisms/BookRating";
import Image from "components/ui/atoms/Image";
import BookMoth_00 from "assets/book_moth_00.jpg";
import BookMoth_01 from "assets/book_moth_01.jpg";
import BookMoth_02 from "assets/book_moth_02.jpg";

function ListItem00() {
  return (
    <div className="common-month month">
      <div className="info-wrap">
        <Image src={BookMoth_00}></Image>
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
        <Image src={BookMoth_01}></Image>
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
        <Image src={BookMoth_02}></Image>
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
