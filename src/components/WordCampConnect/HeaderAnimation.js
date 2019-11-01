import React from "react"
import Lottie from "react-lottie"
import animationData from "./wcconnect-header.json"
import { Col, Row } from "reactstrap"
import "./style.scss"

export default class HeaderAnimation extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        // preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <Row className="headeranimation text-center">
        <div className="headeranimation__verybadfix" />
        <Col sm="1" className="ml-5 text-center headeranimation__sidecontent">
          <div className="headeranimation__sidecontent-top">
            <h2 className="text-center font-weight-bold">20</h2>
          </div>
          <div className="headeranimation__sidecontent-middle headeranimation__sidecontent-middle-left">
            <h2 className="text-center font-weight-bold">
              東<br />京
            </h2>
          </div>
          <div className="headeranimation__sidecontent-bottom">
            <h2 className="text-center font-weight-bold">TYO</h2>
          </div>
        </Col>
        <Col className="headeranimation__main">
          <Lottie
            className="headeranimation__animation"
            options={defaultOptions}
            width={"50%"}
          />
          <div className="headeranimation__main-downarrow">
            <h4 className="pb-3 text-center font-weight-bold">
              Scroll Down to Connect <br />
              <span>↓</span>
            </h4>
          </div>
        </Col>
        <Col sm="1" className="mr-5 text-center headeranimation__sidecontent">
          <div className="headeranimation__sidecontent-top">
            <h2 className="text-center font-weight-bold">19</h2>
          </div>
          <div className="headeranimation__sidecontent-middle">
            <h2 className="text-center font-weight-bold">
              セ<br />
              ン<br />
              ト<br />
              ル<br />
              イ<br />ス
            </h2>
          </div>
          <div className="headeranimation__sidecontent-bottom">
            <h2 className="text-center font-weight-bold">STL</h2>
          </div>
        </Col>
      </Row>
    )
  }
}
