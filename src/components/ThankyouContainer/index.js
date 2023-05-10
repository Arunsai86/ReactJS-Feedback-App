import './index.css'

const ThankyouContainer = prop => {
  const {loveEmojiUrl} = prop
  return (
    <div className="thankyou-container">
      <img src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
      <p>
        We will use you feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default ThankyouContainer
