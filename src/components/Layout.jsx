import { Component } from 'react'
import { Col, Container, Row } from "react-bootstrap"

class Layout extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Layout


// <Row>
// this.state.movies.map(movie => (
//      <Col xs={6} md={4} lg={3}>
//          {movie.Title}
//      </Col>
// ))
//  </Row>

//  X  X  X  X
//  X  X  X  X
//  X  X  X  X

// this.state.movies.map(movie => (
//      <Row>
//          <Col xs={6} md={4} lg={3}>
//              {movie.Title}
//          </Col>
//      </Row>
// ))

// X
// X
// X
// X
// X
// X
// X