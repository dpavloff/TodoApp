import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, FormCheck, Form } from 'react-bootstrap';

export class TodoItem extends Component {
   getTodoItemStyle = () => {
       return {
           background: this.props.todo.completed ? 'PaleGreen' : 'Cornsilk',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           padding: '15px',
           borderBottom: '2px #ccc dotted'      
       }
   }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getTodoItemStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <Button variant="danger" onClick={this.props.delTodo.bind(this, id)} style={ btnStyle }>Удалить</Button>  
            </div>

        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

var btnStyle = {
        padding: '4px 4px',
        cursor: 'pointer',
        float: 'right',
        textAlign: 'center'
}

export default TodoItem
