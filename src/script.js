import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display">
        <p>{this.props.pressedKeyboard}</p>
      </div>
    );
  }
}

const KeyboardKey = (props) => {
  
  const handleKeyDown = (event) => {
    if(event.keyCode === props.keyCode) {
      props.play(props.sKey, props.sId);
    }
  }
    React.useEffect(()=> {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
    return (
      <button className="drum-pad btn btn-primary" id={props.sId} onClick={() => props.play(props.sKey, props.sId)}>
        <audio src={props.url} id={props.sKey} className="clip"/>
        {props.sKey}
      </button>
    );
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return firstSoundsGroup.map((sound) => {
      return (
        <KeyboardKey sId={sound.id} keyCode={sound.keyCode} url={sound.url} sKey={sound.key} play={this.props.play} />
      );
    });
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeyboard: "Play"
    };
    this.play = this.play.bind(this);
  }
  play(key, keyboardName = "") {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    this.setState({
      pressedKeyboard: keyboardName
    });
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="wrapper">
          <Display pressedKeyboard={this.state.pressedKeyboard}/>
          <div className="keyboard">
            <Keyboard play={this.play} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));