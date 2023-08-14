// 리덕스
import { useDispatch } from "react-redux";

// 상태 관리
import { setIsBoolean } from "store/State";

// CSS 모듈
import styled from "style/main/NoSearchResults.module.css";

function NoSearchResults({ save, bookData, addOnClick }) {
  const isBoolean = useDispatch();

  return (
    <>
      {/* 검색 결과가 없을 시 나오는 문장 */}
      {save === "" ? null : bookData.length === 0 ? (
        <>
          <p>
            <strong>"{save}"</strong>에 대한 검색결과가 없습니다.
          </p>
          <p>ㆍ검색어의 철자가 정확한지 확인해주세요.</p>
          <p>ㆍ비슷한 다른 검색어를 입력해보세요.</p>
          <p>ㆍ단어의 수를 줄여보세요.</p>
        </>
      ) : isBoolean(setIsBoolean()) === false ? null : (
        <button className={styled.itemAddButton} onClick={addOnClick}>
          더 보기
        </button>
      )}
    </>
  );
}

export default NoSearchResults;
