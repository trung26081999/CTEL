import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div className="content" style={{ padding: "70px 0px" }}>
        <div className="container">
          <div className="row containerHome">
            <div className="col-md-6">
              <div className="dc55">
                <p className="enet333">
                  <label>What is CTE-Learning?</label>
                </p>
                <p
                  className="sum734"
                  style={{ color: "#404040", lineHeight: "27px", width: "88%" }}
                >
                  CTE-Learning is an online communication website to help
                  connect Families and the School, supporting the administration
                  of the Department of Education and Training, the Department of
                  Education and Training, the School Management Board and the
                  professional work of teachers in schools. Educational
                  Administrators, Teachers and Parents at all levels everyone
                  can use and experience the great benefits that CTE-Learning
                  brings:
                </p>
              </div>
              <p
                style={{
                  color: "#2c2a50",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                CTE-Learning for...
              </p>
              <div id="lanhda02 row">
                <div className="col-md-3 cv22 col-sm-3 col-xs-6" align="center">
                  <a
                    title="Tính năng dành cho phụ huynh"
                    href="/tinh-nang-danh-cho-phu-huynh-dtnew-25000"
                  >
                    <img
                      className="icon_tinhnang"
                      src="../../images/icon1.png"
                    />
                    <div className="subtinhnang">Parent</div>
                  </a>
                </div>
                <div className="col-md-3 cv22 col-sm-3 col-xs-6" align="center">
                  <a
                    title="Tính năng dành cho giáo viên"
                    href="/tinh-nang-danh-cho-giao-vien-dtnew-24999"
                  >
                    <img
                      className="icon_tinhnang"
                      src="../../images/icon2.png"
                    />
                    <div className="subtinhnang">Teacher</div>
                  </a>
                </div>
                <div className="col-md-3 cv22 col-sm-3 col-xs-6" align="center">
                  <a
                    title="Tính năng dành cho lãnh đạo trường"
                    href="/tinh-nang-danh-cho-lanh-dao-nha-truong-dtnew-25001"
                  >
                    <img
                      className="icon_tinhnang"
                      src="../../images/icon3.png"
                    />
                    <div className="subtinhnang">School leader</div>
                  </a>
                </div>
                <div className="col-md-3 cv22 col-sm-3 col-xs-6" align="center">
                  <a
                    title="Tính năng dành cho cán bộ Phòng/Sở"
                    href="/tinh-nang-danh-cho-can-bo-phongso-dtnew-25002"
                  >
                    <img
                      className="icon_tinhnang"
                      src="../../images/icon4.png"
                    />
                    <div className="subtinhnang">Office staff</div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 nhomn23guoi"
              style={{ paddingTop: "75px" }}
            >
              <video className="videohomeev" width="100%" controls>
                <source
                  src="https://admin.enetviet.com/UploadFolderNew/UBNDLongBien/Data/env/mylinh/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20%E1%BB%A9ng%20d%E1%BB%A5ng%20eNetViet.mp4#t=5.3"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
