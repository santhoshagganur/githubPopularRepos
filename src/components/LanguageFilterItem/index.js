// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, changeActiveTabId, activeTabId} = props
  const {id, language} = itemDetails

  const changeTabId = () => {
    changeActiveTabId(id)
  }

  const activeTabClassName = activeTabId ? 'active-tab' : ''

  return (
    <button
      className={`tab-button ${activeTabClassName}`}
      type="button"
      onClick={changeTabId}
    >
      <li className="tab-item"> {language} </li>
    </button>
  )
}

export default LanguageFilterItem
