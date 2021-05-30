import {Component} from 'react'
import{Card} from 'react-bootstrap'

class Statshower extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            name: " ",
            season: " ",
            pts: " ",
            ast: " ",
            reb: " "
        }
    }
    componentDidMount = () => { 
        this.callApi()
        .then(res => this.setState({ 
            name: res.playerName,
            season: res.timeFrame,
            ast: res.ast,
            pts: res.pts,
            reb: res.reb,
            
         }))
        .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/NBA/stats/Lebron/James');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(this.state.name)
        return body;
      };

    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.season} </Card.Subtitle>
                        <Card.Text>Points: {this.state.pts}</Card.Text>
                        <Card.Text>Assists: {this.state.ast}</Card.Text>
                        <Card.Text>Rebounds: {this.state.reb}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Statshower;