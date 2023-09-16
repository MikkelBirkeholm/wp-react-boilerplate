import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RecentPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Replace with your WordPress site URL
    const apiUrl = '/wp-json/wp/v2/posts?per_page=10'

    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a
              href={post.link}
              rel="noopener noreferrer"
            >
              <h3
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h3>
            </a>
            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentPosts
