import React, { Component } from 'react';
import { AddinClient, AddinTileSummaryStyle } from '@blackbaud/sky-addin-client';

import './Tile.scss';

interface IProps {}

interface IState {
  animal?: string,
  color?: string,
  envId?: string,
  recordId?: string
}

class Tile extends Component<IProps, IState> {

  addinClient: AddinClient;

  constructor (props: any) {
    super(props);

    this.state = {
      color: ''
    };

    this.addinClient = new AddinClient({
      callbacks: {
        init: (args) => {
          this.setState({
            envId: args.envId,
            recordId: args.context.recordId
          });

          args.ready({
            showUI: true,
            title: 'My First React Typescript Tile',
            tileConfig: {
              removeInset: true,
              summaryStyle: AddinTileSummaryStyle.Text,
              summaryText: '1.0',
              showHelp: true,
              showSettings: true
            }
          });
        }
      }
    });

    this.openModal = this.openModal.bind(this);
    this.setColor = this.setColor.bind(this);
  }
  
  openModal() {
    this.addinClient
      .showModal({
        url: 'https://localhost:3000/modal',
        context: {
          color: this.state.color
        }
      })
      .modalClosed
      .then((context: any) => this.setState({
        animal: context.animal
      }));
  }

  setColor(event: any) {
    this.setState({
      color: event.target.value
    });
  }

  render() {

    if (!this.state) {
      return <p>Loading...</p>;
    }

    return (
      <div className="Tile">

        {this.state.animal &&
          <p className="sky-emphasized">You said your favorite animal was {this.state.animal}!</p>
        }

        <p>Context available to the tile:</p>
        <ul>
          <li>
            envId: {this.state.envId}
          </li>
          <li>
            recordId: {this.state.recordId}
          </li>
        </ul>
        <p>
          Let's get your favorite color so we can pass it to the modal.
        </p>
        <p>
          <label>
            Favorite color:
            <input type="text" className="sky-form-control" value={this.state.color} onChange={this.setColor} />
          </label>
        </p>
        <button className="sky-btn sky-btn-default" onClick={this.openModal}>
          Open Modal
        </button>
      </div>
    );
  }
}

export default Tile;
