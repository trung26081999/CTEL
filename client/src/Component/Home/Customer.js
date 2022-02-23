import React, { Component } from "react";

export default class Customer extends Component {
  render() {
    return (
      <div className="row-customer">
        <div className="container-customer">
          <h1>Customer Reviews</h1>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="../../images/teacher4.png"
              alt="Jane"
              style={{ width: "50%" }}
            />
            <div className="container-customer">
              <h2>Ms. Tran Thi Kim Anh</h2>
              <p className="title-customer">
                Principal of Gia Tan High School - Hai Duong
              </p>
              <p>
                “…After 2 weeks of experience, the eNetViet application gives me
                unexpected results, it is a great application for education,
                extremely useful for schools. The information is transmitted in
                a timely manner to help parents understand and work closely with
                the school in educating students, thereby improving the quality
                of education in the school.”
              </p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="../../images/teacher1.png"
              alt="Mike"
              style={{ width: "50%" }}
            />
            <div className="container-customer">
              <h2>Mr. Vu Van Cuong</h2>
              <p className="title-customer">
                Parents of Thanh Liet High School - Hanoi
              </p>
              <p>
                "I am a parent who often travels away from home for work. Using
                CTE-Learning, it helps me easily update my child's learning
                information, between two or three children have understanding 
                and accompany them even though they are quite far apart."I am parant who often travels
              </p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="../../images/teacher3.png"
              alt="John"
              style={{ width: "50%" }}
            />
            <div className="container-customer">
              <h2>Mr. Dang Duy Phuoc</h2>
              <p className="title-customer">
                Principal of Nguyen Dinh Chieu High School - Ho Chi Minh City
              </p>
              <p>
                "With the motto of Long-lasting Rain and All Together eNetViet
                has become a habit of connecting and sharing love between
                teachers and parents of the school."
              </p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
