import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Button } from "reactstrap"
import TwitterQuoteCard from "../QuoteCard/Index"

const TwitterPraiseQuote = props => {
  const header = props.header
  const body = props.body
  const buttontitle = props.buttontitle
  const tweetId = props.tweetId

  return (
    <section className="section-row">
      <Container>
        <Row className="section-row justify-content-center">
          <Col md={5} className="font-weight-bold">
            <div className="mb-5">
            <h2 className="display-2">{header}</h2>
            <p>{body}</p>
            </div>
            <Button color="purple-dark" href="https://go.getshifter.io">
              {buttontitle}
            </Button>
          </Col>
          <Col md={5}>
            <TwitterQuoteCard background={true} tweetId={tweetId} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TwitterPraiseQuote

TwitterPraiseQuote.propTypes = {
  buttontitle: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  tweetId: PropTypes.string,
}

TwitterPraiseQuote.defaultProps = {
  buttontitle: "Start Free Trial",
  header: "Get Started",
  body: "Sign up for a free trial",
  tweetId: "1129402884553158657",
}
