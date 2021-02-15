import homeStyles from '../styles/home.module.css'
import Post from '../components/post'

export default function Home() {
  return (
    <div className={homeStyles.home}>
      {[...Array(5).keys()].map(n => (
        <Post key={n} />
      ))}
    </div>
  )
}
