import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link, useHistory, withRouter } from 'react-router-dom'

const TopNavbar = ({ history }) => {

    // this is a shortcut using a hook!
    // const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                {/* this is the navigation feature provided with a Link component */}
                <Link to="/" className="no-underline">
                    <span className="nav-link navbar-links">Home</span>
                </Link>
                {/* this is the navigation feature provided with a function! history.push() */}
                <Nav.Link onClick={() => history.push('/data')}>Data page</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default withRouter(TopNavbar)