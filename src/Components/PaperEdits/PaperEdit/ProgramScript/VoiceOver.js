import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

class VoiceOver extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <p className={ 'text-muted' }>
          <i>
            <FontAwesomeIcon icon={ faMicrophoneAlt } /> { this.props.text }
          </i>
        </p>
      </>
    );
  }
}

export default VoiceOver;
