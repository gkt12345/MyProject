import { Row, Col } from "react-bootstrap";
import { productsArray } from "../../ProductStore";
import ProductCard from "../Components/ProductCard";


function Store() {

  return (<>
        <h1 align='center' className="p-3">Wlecome to the Store</h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map((product, indx)=>(
                <Col align='center' key={indx}>
                  <ProductCard product={product} />
                </Col>
            ))}
        </Row>
        </>)
}

export default Store