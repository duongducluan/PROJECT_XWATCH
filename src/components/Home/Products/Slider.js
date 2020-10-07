import React, { Component } from "react";
import m22 from "./../../../img/m22.PNG";
import m11 from "./../../../img/m11.PNG";
import m33 from "./../../../img/m33.PNG";
import y1 from "./../../../img/y1.PNG";
import y2 from "./../../../img/y2.PNG";
import y3 from "./../../../img/y3.PNG";
import style from './../../../pages/style';
class Sliders extends Component {
  constructor(props) {
    super(props);
    var slideIndex = 1;
    this.slideIndex = slideIndex;
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  currentSlide = (n) => {
    this.showSlides((this.slideIndex = n));
  };
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  componentDidMount() {
    style()
    this.showSlides(this.slideIndex);
    var k = document.getElementsByClassName("mySlides");
    var a = this;
    var m = setInterval(function plusSlides(n) {
      //console.log(k[1] === undefined);
      if (k[1] === undefined) {
        clearTimeout(m);
      } else {
        a.showSlides((a.slideIndex += 1));
      }
    }, 5000);
  }
  render() {
    return (
          <div className="wrap-slides">
            <div className="container">
              <div>
                <div className="slideshow-container">
                  <div className="mySlides fade">
                    <img alt="" src={y1} style={{ width: "100%" }} />
                    <div className="text">Caption Text</div>
                  </div>
                  <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img alt="" src={y2} style={{ width: "100%" }} />
                    <div className="text">Caption Two</div>
                  </div>
                  <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img alt="" src={y3} style={{ width: "100%" }} />
                    <div className="text">Caption Three</div>
                  </div>
                  <div
                    className="prev"
                    alt=""
                    onClick={() => this.plusSlides(-1)}
                  >
                    ❮
                  </div>
                  <div
                    className="next"
                    alt=""
                    onClick={() => this.plusSlides(1)}
                  >
                    ❯
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span className="dot" onClick={() => this.currentSlide(1)} />
                  <span className="dot" onClick={() => this.currentSlide(2)} />
                  <span className="dot" onClick={() => this.currentSlide(3)} />
                </div>
              </div>

              <div className="block-str">
                <div className="row">
                  <div className="col-xl-4 mac-flex">
                    <div className="item-img">
                      <img src={m11} alt="" />
                    </div>
                    <div className="contend">
                      <h1>CHUYÊN GIA THẨM ĐỊNH</h1>
                      <span>ĐỒNG HỒ THẬT GIẢ</span>
                    </div>
                  </div>
                  <div className="col-xl-4 mac-flex">
                    <div className="item-img">
                      <img src={m22} alt="" />
                    </div>
                    <div className="contend">
                      <h1>ĐƠN VỊ SỐ 1 VỀ</h1>
                      <span>BẢO HÀNH, HẬU MÃI</span>
                    </div>
                  </div>
                  <div className="col-xl-4 mac-flex">
                    <div className="item-img">
                      <img src={m33} alt="" />
                    </div>
                    <div className="contend">
                      <h1>ĐỀN GẤP 10 LẦN</h1>
                      <span>NẾU PHÁT HIỆN FAKE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    );
  }
}
export default Sliders;
