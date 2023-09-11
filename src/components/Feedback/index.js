// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => {
    this.setState(prevState => ({
      isFeedbackSelected: !prevState.isFeedbackSelected,
    }))
  }

  renderThankyouMessage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="love-emoji-container">
        <img
          src={loveEmojiUrl}
          alt="love emoji"
          className="love-emoji-image"
          onClick={this.onClickEmoji}
        />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="description">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
                <br />
                <span>{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackSelected
            ? this.renderThankyouMessage()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
