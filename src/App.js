import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {
  Modal,
  Table,
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Col
} from "react-bootstrap";
// import "react-bootstrap/dist/react-bootstrap.js";
// import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    this.handleHideView = this.handleHideView.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      show: false,
      showView: false,
      value: ""
    };
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return "success";
  //   else if (length > 5) return "warning";
  //   else if (length > 0) return "error";
  //   return null;
  // }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleHideView() {
    this.setState({ showView: false });
  }

  render() {
    return (
      <div className="container">
        <Button bsStyle="primary" onClick={() => this.setState({ show: true })}>
          Create
        </Button>

        {/* MODAL CREATE  */}

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Code
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Code" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                  Type
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </Col>
              </FormGroup>

              {/* <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup> */}
            </Form>
            ;
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
            <Button onClick={this.handleHide} bsClass="btn btn-primary">
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {/* MODAL VIEW */}

        <Modal
          show={this.state.showView}
          onHide={this.handleHideView}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">View</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Code
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Code" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                  Type
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </Col>
              </FormGroup>
            </Form>

            <Button onClick={this.handleHideView}>Close</Button>
            <Button onClick={this.handleHideView} bsClass="btn btn-primary">
              Save
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                <td>Apakah</td>
                <td>Edit</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Footer>
        </Modal>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q001</td>
              <td>Bootstrap</td>
              <td>
                <Button
                  bsStyle="primary"
                  onClick={() => this.setState({ showView: true })}
                >
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
