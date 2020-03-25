import React, { Component } from 'react';
import { AddinClient } from '@blackbaud/sky-addin-client';
import './Modal.css';

interface IProps {}

interface IState {
  animal?: string;
  color?: string
}

class Modal extends Component<IProps, IState> {

  addinClient: AddinClient;

  constructor (props: any) {
    super(props);

    this.state = {
      animal: ''
    };

    this.addinClient = new AddinClient({
      callbacks: {
        init: (args) => {
          this.setState({
            color: args.context.color
          });

          args.ready({
            showUI: true,
            modalConfig: {
              fullPage: true
            }
          });
        }
      }
    });

    this.setAnimal = this.setAnimal.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('has-modal');
  }

  componentWillUnmount() {
    document.body.classList.remove('has-modal');
  }

  closeModal = () => {
    this.addinClient
      .closeModal({
        context: {
          animal: this.state.animal
        }
      });
  }

  setAnimal(event: any) {
    this.setState({
      animal: event.target.value
    });
  }

  render () {
    if (!this.state) {
      return <p>Loading...</p>;
    }

    return (
      <div className="Modal">
        <h2>Welcome to the fullscreen modal</h2>
        <p>You said your favorite color was: <span className="sky-emphasized">{this.state.color}</span></p>
        <p>Before you go, what's your favorite animal?</p>
        <p>
          <label>
            Favorite animal:
            <input type="text" className="sky-form-control" value={this.state.animal} onChange={this.setAnimal} />
          </label>
        </p>
        <button className="sky-btn sky-btn-default" onClick={this.closeModal}>
          Close Modal
        </button>
      </div>
    );
  }
}

export default Modal;