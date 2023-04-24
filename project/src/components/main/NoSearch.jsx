import styled from "style/main/BookSearch.module.css";
import { useDispatch, useSelector } from "react-redux";

import { isChange } from "store/State";

function NoSearch({ save, bookData, addOnClick }) {
  let is = useDispatch();

  return (
    <>
      {save === "" ? null : bookData.length === 0 ? (
        <>
          <p>
            <strong>"{save}"</strong>에 대한 검색결과가 없습니다.
          </p>
          <p>ㆍ검색어의 철자가 정확한지 확인해주세요.</p>
          <p>ㆍ비슷한 다른 검색어를 입력해보세요.</p>
          <p>ㆍ단어의 수를 줄여보세요.</p>
        </>
      ) : is(isChange()) === false ? null : (
        <button className={styled.itemAddButton} onClick={addOnClick}>
          더 보기
        </button>
      )}
    </>
  );
}

export default NoSearch;
