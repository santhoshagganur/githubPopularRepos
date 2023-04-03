// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepository} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachRepository

  return (
    <li className="each-repository-container">
      <img src={avatarUrl} alt={name} className="repository-logo" />
      <h1 className="repository-name"> {name} </h1>
      <div className="repo-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="inner-image"
        />
        <p className="inner-information"> {starsCount} stars </p>
      </div>
      <div className="repo-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="inner-image"
        />
        <p className="inner-information"> {forksCount} forks </p>
      </div>
      <div className="repo-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="inner-image"
        />
        <p className="inner-information"> {issuesCount} open issues </p>
      </div>
    </li>
  )
}

export default RepositoryItem
