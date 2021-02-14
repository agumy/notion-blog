import homeStyles from '../styles/home.module.css'

export default function Post() {
  return (
    <div className={homeStyles.post}>
      <div className={homeStyles.image}>
        <img src="https://designmemo.jp/wp-content/uploads/2020/03/eyecatch_check-sheet-600x400.jpg" />
      </div>
      <span className={homeStyles.title}>
        Slackで確認して欲しいことが流れていく…そんな時こそ、チームでのスプレッドシート活用例
      </span>
    </div>
  )
}
