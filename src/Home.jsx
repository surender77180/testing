import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home({ name, des, src }) {



    return (
        <div >
            {/* <style>
                {`h5{
                    border:2px solid red;
                }
                h6{
                    border:4px solid black;
                }
                `}
            </style> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{des}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}