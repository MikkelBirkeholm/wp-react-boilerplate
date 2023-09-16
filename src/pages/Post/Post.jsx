import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
  const { slug } = useParams()
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    async function getPostData() {
      const res = await fetch(
        `http://adsontheme.local/wp-json/wp/v2/posts?slug=${slug}`
      )
      const data = await res.json()
      if (data) {
        setPostData(data[0])
      } else console.log('nada')
    }
    getPostData()
  }, [slug])

  return (
    <div>
      {postData ? (
        <div>
          <h1>{postData.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
          />
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
