import React from "react"
import TwitterWidget from "../Twitter/Widget/Index"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import "./style.scss"

const ConnectTwitterFeed = () => {
  const data = useStaticQuery(graphql`
    {
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
    <Container>
      <TwitterWidget data={data} />
    </Container>
  )
}

export default ConnectTwitterFeed
