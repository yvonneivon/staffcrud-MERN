import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskAction';

class TaskModal extends Component {
    state= {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange =(e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newTask = {
            name: this.state.name
        }

        //Add task via addTask action
        this.props.addTask(newTask);

        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}>
                    Add Task</Button>

                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        >
                        <ModalHeader toggle={this.toggle}>
                            Add To Task
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="task">Task</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="task"
                                        placeholder="Add new task"
                                        onChange={this.onChange}
                                        />
                                        <Button
                                            color="dark"
                                            style={{marginTop: '2rem'}}
                                            block
                                            >Add Task</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(mapStateToProps, { addTask })(TaskModal);
