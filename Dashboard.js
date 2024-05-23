import Nav from 'react-bootstrap/Nav';
import './Dashboard.css';


function Dash() {
    return (
        <div className='container'>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item className="flex-column" as="li">
                    <Nav.Link className="flex" href="/home">Active</Nav.Link>
                </Nav.Item >
                <Nav.Item className="flex-column" as="li">
                    <Nav.Link className="flex" eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-column" as="li">
                    <Nav.Link className="flex" eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-column" as="li">
                    <Nav.Link className="flex" eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-column" as="li">
                    <Nav.Link className="flex" eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    );
}

export default Dash;