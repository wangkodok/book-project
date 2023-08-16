import MainVisualBanner from "components/ui/organisms/MainVisualBanner";
import BookOfTheMonth from "components/ui/organisms/BookOfTheMonth";
import ContentBanner from "components/ui/organisms/ContentBanner";
import BookMd from "components/ui/organisms/BookMd";
import DeviceSync from "components/ui/organisms/DeviceSync";

export default function Main() {
  return (
    <>
      <MainVisualBanner />
      <BookOfTheMonth />
      <ContentBanner />
      <BookMd />
      <DeviceSync />
    </>
  );
}
