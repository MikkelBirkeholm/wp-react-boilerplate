import React from 'react'
import styles from './Home.module.scss'
import RecentPosts from '../../components/Posts/RecentPosts/RecentPosts'

export const Home = () => {
  return (
    <main className={styles.home}>
      <hgroup>
        <h1>Website Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi iure dolores id itaque, debitis labore necessitatibus iusto.
          Voluptatum, laborum vero enim debitis suscipit dolore ex deleniti
          exercitationem facere omnis.
        </p>
      </hgroup>
      <RecentPosts />
    </main>
  )
}
