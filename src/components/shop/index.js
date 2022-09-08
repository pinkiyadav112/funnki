
import { Col, Row, Container } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
import Filter from './filter';
import style from "./index.module.scss"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/productSlice'
export default function Shop() {
    const dispatch = useDispatch();
    window.scrollTo(10, 10);
    const PRODUCT_DATA = [
        {
            first_image: "https://images.asos-media.com/products/river-island-ripped-knee-mom-jeans-in-mid-wash-blue/14646626-1-midwash?$n_640w$&wid=513&fit=constrain",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 4,
            offer: "sale"
        },
        {
            first_image: "	https://i.pinimg.com/736x/d8/52/f0/d852f0326d9d5cf648cd687e7127e7df.jpg",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 3.5,
            offer: "sold"
        },
        {
            first_image: "https://images.asos-media.com/products/river-island-ripped-knee-mom-jeans-in-mid-wash-blue/14646626-1-midwash?$n_640w$&wid=513&fit=constrain",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 4,
            offer: "sale"
        },
        {
            first_image: "https://rukminim1.flixcart.com/image/612/612/l2qhjm80/dress/y/z/r/l-women-aline-single-piece-suit-marron-sakhi-collection-original-imageyggy3wzzkey.jpeg?q=70",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 3,
            offer: "sold"
        },
        {
            first_image: "https://images.asos-media.com/products/river-island-ripped-knee-mom-jeans-in-mid-wash-blue/14646626-1-midwash?$n_640w$&wid=513&fit=constrain",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 4,
            offer: "sale"
        },
        {
            first_image: "	https://i.pinimg.com/736x/d8/52/f0/d852f0326d9d5cf648cd687e7127e7df.jpg",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 3.5,
            offer: "sold"
        },
        {
            first_image: "https://images.asos-media.com/products/river-island-ripped-knee-mom-jeans-in-mid-wash-blue/14646626-1-midwash?$n_640w$&wid=513&fit=constrain",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 4,
            offer: "sale"
        },
        {
            first_image: "https://rukminim1.flixcart.com/image/612/612/l2qhjm80/dress/y/z/r/l-women-aline-single-piece-suit-marron-sakhi-collection-original-imageyggy3wzzkey.jpeg?q=70",
            secand_image: "https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg",
            name: `'Men's Shirt'`,
            price: "400",
            disc: "Lizards are Link widespread group of squamate reptiles, with over 6,000",
            mrp: "450",
            rating: 3,
            offer: "sold"
        },
    ]
    const ADD_TO_CART = (items) => {
        dispatch(addToCart(items));
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <div className={style.filter}>
                            <Filter />
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            {
                                PRODUCT_DATA.map((items, i) => {
                                    return (
                                        <Col md={3} key={i}>
                                            <div className="product-grid" >
                                                <div className="product-image">
                                                    <Link to="#" className="image">
                                                        <img className="pic-1" src={items.first_image} alt="" />
                                                        <img className="pic-2" src={items.secand_image} alt="" />
                                                    </Link>
                                                    {
                                                        items.offer === 'sold' ? (
                                                            <span className="product-sale-label sold">{items.offer}!</span>
                                                        ) : <span className="product-sale-label">{items.offer}!</span>
                                                    }
                                                    <ul className="social">
                                                        <li><Link to="#" data-tip="Quick View"><FavoriteBorderOutlinedIcon /></Link></li>
                                                        <li><Link to="#" data-tip="Add to wishlist"><RemoveRedEyeOutlinedIcon /></Link></li>
                                                    </ul>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <ReactStars
                                                                count={5}
                                                                value={items.rating}
                                                                edit={false}
                                                                size={24}
                                                                isHalf={true}
                                                                emptyIcon={<i className="far fa-star"></i>}
                                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                fullIcon={<i className="fa fa-star"></i>}
                                                                activeColor="#ffd700"
                                                            />
                                                        </ul>
                                                        {/* <Button variant="primary" disabled>
                                                            <Spinner
                                                                as="span"
                                                                animation="grow"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            />
                                                            Loading...
                                                        </Button> */}
                                                        <button className="add-to-cart" onClick={(e) => ADD_TO_CART(items)}> ADD TO CART </button>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h3 className="title"><Link to="#">{items.name}</Link></h3>
                                                    <div className="price"><span>₹ {items.mrp}</span>₹ {items.price}</div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <br /><br />
        </>
    )
}