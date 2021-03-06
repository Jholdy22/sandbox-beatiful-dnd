import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
padding:4px;
marting-bottom: 8px
background-color: ${props => (props.isDragging ? `white` : `#f0f0f0`)};
color: black;
font-size: 15px;
height: 20px;
display: flex;
`;

const Handle = styled.div`
width: 5px;
height: 100%;
background-color: rgb(87, 155, 252);
margin-right: 8px;
display: flex;

`

export default class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                    <Handle />
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}