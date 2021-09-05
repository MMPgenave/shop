import Component from 'react';

class Appfortest extends Component {

    state={
        counter:0,
        hover:0
    }


    render(){



        return (
            <button type="button" >clicked {this.state.counter} times</button>
        )
    }
}

export default Appfortest;