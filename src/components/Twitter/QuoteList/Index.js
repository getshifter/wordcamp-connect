import React from "react"
import PropTypes from "prop-types"
import { Container, Col, Row } from "reactstrap"
import TwitterQuote from "../QuoteCard/Index"

const TwitterQuoteList = props => {
  const tweets = props.tweets

  return (
    <section className="section-row twitter-quote-list">
      <Container>
        <Row>
          {tweets.map(tweet => {
            return (
              <Col sm="4">
                <TwitterQuote tweetId={tweet} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default TwitterQuoteList

TwitterQuoteList.propTypes = {
  tweets: PropTypes.array,
}

TwitterQuoteList.defaultProps = {
  tweets: ["969087827739754497", "822127402851581953", "925062079773585411"],
}