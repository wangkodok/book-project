import { useEffect, useState } from "react";
import eventData from "../eventData";
import { useParams } from "react-router-dom";

function EventPage() {
  const [data, setData] = useState(eventData);

  let { id } = useParams();
  let 찾은상품 = data.find(function (x) {
    return x.id === Number(id);
  });
  console.log(찾은상품.detailPage);

  return (
    <>
      <h3 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>
        {찾은상품.title}
      </h3>
      <figure>
        <img style={{ width: "100%" }} src={찾은상품.detailPage} alt="" />
      </figure>
    </>
  );
}

export default EventPage;
