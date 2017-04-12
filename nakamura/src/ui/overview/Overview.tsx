import * as React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const coverImg = require('./images/cover.jpg')

interface OverviewState {
    loaded: boolean,
    started: boolean
}

class Overview extends React.Component<null, OverviewState> {
    constructor() {
        super();
        this.state = {
            loaded: false,
            started: false
        };
    }
    render() {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title='Thiago Akio Nakamura' subtitle='Overlay subtitle' />}
                >
                <img src={coverImg} />
                </CardMedia>
                <CardTitle title='Card title' subtitle='Card subtitle' />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
                </CardActions>
            </Card>
        )
    }
}

export default Overview;
