import React, { Component } from 'react';
class Movietest extends Component {
    state = {

      } 
    render() { 
        return (
            <React.Fragment>
                  
                <tr className={this.props.color} key={this.props.id} >
                    <th>{this.props.index+1}</th>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.length}</td>
                    <td>{this.props.genre}</td>
                    <td><button onClick={this.props.delete} className='btn btn-danger btn-lg'>Delete</button></td>
                    <td><button onClick={this.props.patch} className='btn btn-success btn-lg'>Patch</button></td>
                    
                </tr>
                
                 



            </React.Fragment>
        );
    }
}
 
export default Movietest;
