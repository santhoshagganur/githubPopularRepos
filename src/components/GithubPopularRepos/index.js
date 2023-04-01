import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
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
  state = {activeTabId: '', recordsList: []}

  changeActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  renderResults = async () => {
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

      this.setState({recordsList: updatedResults})
    }
  }

  render() {
    const {activeTabId, recordsList} = this.state

    console.log(recordsList)

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
        {this.renderResults}
      </div>
    )
  }
}

export default GithubPopularRepos
