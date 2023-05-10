import './index.css'

const EmojisContainer = prop => {
  const {checkStatus, emojis} = prop
  const clickButton = () => {
    checkStatus()
  }
  return (
    <li>
      <button type="button" onClick={clickButton}>
        <img src={emojis.imageUrl} alt={emojis.name} />
      </button>
      <p>{emojis.name}</p>
    </li>
  )
}
export default EmojisContainer
