import {Component} from 'react'

import EmojisContainer from '../EmojisContainer'

import ThankyouContainer from '../ThankyouContainer'

import './index.css'

class Feedback extends Component {
  state = {
    status: true,
  }

  checkStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {resources} = this.props
    const {status} = this.state
    return (
      <div className="bg-container">
        <ul className="card-container">
          {status ? (
            <h1>How satisfied are you with our customer support performance</h1>
          ) : null}
          <div className="container">
            {status ? (
              resources.emojis.map(eachItem => (
                <EmojisContainer
                  emojis={eachItem}
                  checkStatus={this.checkStatus}
                  key={eachItem.id}
                />
              ))
            ) : (
              <ThankyouContainer loveEmojiUrl={resources.loveEmojiUrl} />
            )}
          </div>
        </ul>
      </div>
    )
  }
}

export default Feedback
