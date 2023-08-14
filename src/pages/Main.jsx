// 컴포넌트
import MainVisualBanner from "components/ui/organisms/MainVisualBanner";
import BookOfTheMonth from "components/ui/organisms/BookOfTheMonth";
import ContentBanner from "components/ui/organisms/ContentBanner";
import BookMd from "components/ui/organisms/BookMd";
import DeviceSync from "components/ui/organisms/DeviceSync";

export default function Main() {
  return (
    <>
      {/* 메인 페이지 */}
      <MainVisualBanner /> {/* 비주얼 배너 */}
      <BookOfTheMonth /> {/* 이달의 책 */}
      <ContentBanner /> {/* 콘텐츠 배너 */}
      <BookMd /> {/* MD가 책 추천 */}
      <DeviceSync /> {/* PC, 모바일 모두 사용 가능하고 연동 가능합니다. */}
    </>
  );
}
