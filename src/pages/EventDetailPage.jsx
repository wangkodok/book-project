import { useParams } from "react-router-dom";

import eventData from "eventData";

export default function EventPage() {
  const { id } = useParams();
  const findProduct = eventData.find(function (obj) {
    return obj.id === Number(id);
  });

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
