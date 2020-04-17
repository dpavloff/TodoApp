import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '5px'}}>
                <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding: '5px', margin: '5px' }}
                placeholder="Добавить задание"
                onChange={this.onChange}
                value={this.state.title}
            />
            <Button 
            variant="success"
            type="submit"
            style ={{flex: '1', padding: '4px' }}>Добавить</Button>
            </form>
        )
    }
}

export default AddTodo
