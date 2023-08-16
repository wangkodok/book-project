import styled from "styled-components";

import Inner from "StyledCommon";

export default function DeviceSync() {
  return (
    <SectionDeviceSync>
      <div className="device-sync">
        <h3 className="blind">PC, 모바일 안내</h3>
        <Inner padding="80px 0">
          <div className="text-wrap">
            <h4 className="title">
              PC, 모바일 모두 사용 가능하고
              <br /> 연동 가능합니다.
            </h4>
            <p className="title-desc">현재 PC 버전만 사용 가능합니다.</p>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
        </Inner>
      </div>
    </SectionDeviceSync>
  );
}

const SectionDeviceSync = styled.section`
  background-color: #eee;

  .device-sync {
    margin: 80px 0;
  }

  .text-wrap {
    .title {
      margin: 0 0 45px 0;
      font-weight: 700;
      font-size: 32px;
      line-height: 46px;
      letter-spacing: -1px;
      color: #000000;
    }
    .title-desc {
    }
  }
`;
