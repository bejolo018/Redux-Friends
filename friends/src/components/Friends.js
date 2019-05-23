import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions'

class Friends extends React.Component {
    componentDidMount(){
        this.props.getData();
    }
    render(){
        return(
            <div>
                insert data here
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    getData: state.getData
})

export default connect(mapStateToProps, { getData }) (Friends);