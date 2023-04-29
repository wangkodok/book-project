// 라우터
import { useParams } from "react-router-dom";

// 컴포넌트
import eventData from "eventData";

function EventPage() {
  let { id } = useParams();
  let findProduct = eventData.find(function (obj) {
    return obj.id === Number(id);
  });
  console.log(findProduct.detailPage);

  return (
    <>
      <h3 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>
        {findProduct.title}
      </h3>
      <figure>
        <img style={{ width: "100%" }} src={findProduct.detailPage} alt="" />
      </figure>
    </>
  );
}

export default EventPage;
