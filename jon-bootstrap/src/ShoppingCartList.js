import ListGroup from 'react-bootstrap/ListGroup';
import './Menu'
function ShoppingCartList({ cartItems }) {
    // Check if cartItems is null
    if (!cartItems) {
        return <div>No items in cart</div>;
    }

    // Render the list if cartItems is defined
    return (
        <ListGroup variant="flush">
            {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>{item.name} - ${item.price}</ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default ShoppingCartList;

