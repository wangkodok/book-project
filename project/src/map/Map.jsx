import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = () => {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const markers = [];

    const container = document.getElementById("myMap");

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(Place, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      let paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        let el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [Place]);

  return (
    <MapContent>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="예) 서울 강남구 교보문고"
          onChange={onChange}
          defaultValue={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <div className="map-content">
        <div
          id="myMap"
          style={{
            width: "50%",
            height: "500px",
          }}
        ></div>
        <div id="result-list">
          {Places.map((item, i) => (
            <div key={i} id="result-list-item">
              {/* 지도 검색 목록 번호 */}
              {/* <div>{i + 1}</div> */}
              <div>
                <div>{item.place_name}</div>
                {item.road_address_name ? (
                  <div>
                    <div>{item.road_address_name}</div>
                    <div>{item.address_name}</div>
                  </div>
                ) : (
                  <div>{item.address_name}</div>
                )}
                <div>{item.phone}</div>
              </div>
            </div>
          ))}
          <div id="pagination"></div>
        </div>
      </div>
    </MapContent>
  );
};

export default MapContainer;

const MapContent = styled.div`
  /* margin: 40px 0 0 0; */

  /* 검색 */
  .inputForm {
    margin: 0 0 40px 0;

    input {
      padding: 10px;
      border: 1px solid #000;
    }

    button {
      padding: 10px;
      color: #fff;
      background-color: #000;
      border: 1px solid #000;
    }
  }

  /* 지도 콘텐츠 */
  .map-content {
    display: flex;
    justify-content: space-between;
  }

  /* 지도 검색 목록 */
  #result-list {
    width: 50%;
    height: 500px;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid #000;

    #result-list-item {
      margin: 0 0 20px 0;
      padding: 0 0 20px 0;
      border-bottom: 1px solid #000;

      &:last-child {
        border: none;
      }
    }

    #pagination {
      display: flex;
      margin: 10px 0 0 0;

      a {
        padding: 2px 10px;
        margin: 0 10px 0 0;
        border: 1px solid #000;
      }
    }
  }
`;
