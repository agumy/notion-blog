import homeStyles from '../styles/home.module.css'

export default function Post({ post }: { post: any }) {
  console.log(post)
  return (
    <div className={homeStyles.post}>
      <div className={homeStyles.image}>
        <img src="https://designmemo.jp/wp-content/uploads/2020/03/eyecatch_check-sheet-600x400.jpg" />
      </div>
      <div className={homeStyles.page}>
        <span className={homeStyles.title}>{post.Page}</span>
        <span>{new Date(post.Date).toDateString()}</span>
      </div>
    </div>
  )
}
