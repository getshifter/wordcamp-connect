import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { CardColumns, Card, CardBody } from "reactstrap"
import "./style.scss"

const TwitterWidget = props => {
  const tweets = props.data.tweets.edges

  const data = useStaticQuery(graphql`
    {
      postCard1: file(relativePath: { eq: "wcc-cards-01.jpg" }) {
        childImageSharp {
          fixed(width: 1000, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postCard2: file(relativePath: { eq: "wcc-cards-02.jpg" }) {
        childImageSharp {
          fixed(width: 1000, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postCard3: file(relativePath: { eq: "wcc-cards-03.jpg" }) {
        childImageSharp {
          fixed(width: 1000, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postCard4: file(relativePath: { eq: "wcc-cards-04.jpg" }) {
        childImageSharp {
          fixed(width: 1000, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postCard5: file(relativePath: { eq: "wcc-cards-05.jpg" }) {
        childImageSharp {
          fixed(width: 1000, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tweets: allTwitterSearchTweetsTweets {
        edges {
          node {
            full_text
            favorite_count
            retweet_count
            created_at
            user {
              name
              url
              profile_image_url
              screen_name
            }
            entities {
              media {
                media_url_https
              }
              urls {
                display_url
              }
              hashtags {
                text
              }
            }
          }
        }
      }
      profile: twitterSearchTweetsTweets {
        user {
          profile_image_url_https
          name
          url
          screen_name
        }
      }
    }
  `)

  return (
        <CardColumns>
        {tweets.map(({ node }) => {
          // PostCard Vars
          const postCard1 = data.postCard1.childImageSharp.fixed
          const postCard2 = data.postCard2.childImageSharp.fixed
          const postCard3 = data.postCard3.childImageSharp.fixed
          const postCard4 = data.postCard4.childImageSharp.fixed
          const postCard5 = data.postCard5.childImageSharp.fixed

          const postCards = [
            postCard1,
            postCard2,
            postCard3,
            postCard4,
            postCard5,
          ]

          const randomPostCard =
            postCards[Math.floor(Math.random() * postCards.length)]

          // Tweet Vars
          const tweetImg = node.entities.media
            ? node.entities.media[0].media_url_https
            : randomPostCard.src

          return (
            <Card className="mt-5">
              <CardBody className="p-0">
                <div className="tweet-postcard rounded shadow shadow-hover">
                  <div className="tweet-postcard__inner">
                    <div key={node.favorite_count}>
                      <p className="tweet-content text-monospace display-3">
                        {node.full_text}
                      </p>
                      {node.entities.hashtags ? (
                        <div className="tweet-hastags display-4">
                          {node.entities.hashtags.map(({ text }) => (
                            <a
                              href={`https://twitter.com/hashtag/${text}`}
                              key={text}
                              className="hashtag text-magenta"
                            >
                              #{text}
                              {` `}
                            </a>
                          ))}
                        </div>
                      ) : (
                        0
                      )}
                      <div className="tweet-head">
                        <span className="date">
                          {node.created_at.split(` `, 3).join(` `)}
                        </span>
                      </div>
                    </div>
                    <img className="mt-3 w-100" src={tweetImg} alt="" />
                  </div>
                </div>
              </CardBody>
            </Card>
          )
        })}
        </CardColumns>
  )
}

export default TwitterWidget

TwitterWidget.propTypes = {
  data: PropTypes.array,
}

TwitterWidget.defaultProps = {
  data: null,
}
