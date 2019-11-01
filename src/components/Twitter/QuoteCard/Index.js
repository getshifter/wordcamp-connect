import React from "react"
import PropTypes from "prop-types"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { useStaticQuery, graphql } from "gatsby"
import { Card, CardBody } from "reactstrap"
import "./style.scss"

const Background = props => {
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "twitter-bg.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      square: file(relativePath: { eq: "header-square.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const bgImg = data.bgImg.childImageSharp.fixed.src
  const squareImg = data.square.childImageSharp.fixed.src

  if (!props.background) {
    return null
  }

  return (
    <>
      <img src={bgImg} alt="" className="twitter-quote__bg" />
      <img src={squareImg} alt="" className="twitter-quote__square" />
    </>
  )
}

const TwitterQuote = props => {
  const tweetId = props.tweetId

  return (
    <div className="twitter-quote">
      <Background background={props.background} />
      <Card className="shadow">
        <CardBody>
          <TwitterTweetEmbed tweetId={tweetId} />
        </CardBody>
      </Card>
    </div>
  )
}

export default TwitterQuote

TwitterQuote.propTypes = {
  tweetId: PropTypes.string,
  background: PropTypes.bool,
}

TwitterQuote.defaultProps = {
  tweetId: "1129402884553158657",
  background: false,
}

Background.propTypes = {
  background: PropTypes.bool,
}

Background.defaultProps = {
  background: false,
}
