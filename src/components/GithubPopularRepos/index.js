import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    recordsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.renderResults()
  }

  changeActiveTabId = id => {
    this.setState({activeTabId: id}, this.renderResults)
  }

  renderFailureView = () => {
    ;<div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view"
      />
    </div>
  }

  renderResults = async () => {
    this.setState({isLoading: true})
    const {activeTabId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

    const response = await fetch(url)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedResults = fetchedData.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({recordsList: updatedResults, isLoading: false})
    } else {
      this.renderFailureView()
    }
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepositories = () => {
    const {recordsList} = this.state

    return (
      <ul className="resultant-repositories-container">
        {recordsList.map(each => (
          <RepositoryItem eachRepository={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeTabId, isLoading} = this.state

    return (
      <div className="app-bg-container">
        <h1 className="app-name"> Popular </h1>
        <ul className="app-items-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              itemDetails={each}
              key={each.id}
              changeActiveTabId={this.changeActiveTabId}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderRepositories()}
      </div>
    )
  }
}

export default GithubPopularRepos
