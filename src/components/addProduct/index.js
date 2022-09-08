import React, { } from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { app, firestore } from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import style from "./index.module.scss"
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const CategoriesType = [
    'Select',
    "Sweater",
    "Dress",
    "Hoodies",
    "T-shirt",
    " Flip-flops",
    " Shorts",
    "Skirt",
    "Jeans",
    "Shoes",
    "Coat",
    "High heels",
    "Suit",
    "Cap",
    "Socks",
    "Shirt",
    "Bra",
    "Scarf",
    "Swimsuit",
    "Hat",
    "Gloves",
    "Jacket",
    " Long coat",
    "Boots",
    "Sunglasses",
    "Tie",
    "Polo shirt",
    "Leather jackets"
]
const BRAND = [
    'Select',
    'Park Avenue',
    'Louis Philippe',
    'Van Heusen',
    'BlackBerrys',
    'Giovani',
    'Arrow',
    'Raymond',
    'Indian Terrain',
    'Globus',
    'Allen Solly',
    'U.S.Polo',
    'LP Jeans',
    'Indigo Nation',
    'Celio',
    'Color plus',
    'Parx',
    'Lombard',
    'Twill',
    'John Miller',
    'Bare Denim',
    'John Players',
    'Izod',
    'Basics',
    'Global desi',
    'Mother earth',
    'Biba',
    'Soch',
    'Aurelia',
    'Libas',
    'UCB',
    'Zink London',
    'Madame',
    'Marie Clarie',
    'Vero Moda',
    'Only',
    'Pepe Jeans',
    'Levi’s',
    'Lee'
]
export default function AddProduct() {
    const [validated, setValidated] = React.useState(false);
    const [Loading, setLoading] = React.useState(false);
    const [values, setValues] = React.useState({
        categories: "",
        subcategories: "",
        brand: "",
        product_description: "",
        product_price: "",
        sold_price: "",
        product_image: null
    });
    const [Errormsg, setErrormsg] = React.useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const type = ['image/jpg', 'image/png', 'image/jpeg', 'image/PNG'];
    const handleProductImage = (e) => {
        const selectedimg = e.target.files[0];
        if (selectedimg) {
            if (selectedimg && type.includes(selectedimg.type)) {
                setValues({ ...values, product_image: selectedimg });
            }
            else {
                setErrormsg('Please select file type valided');
            }
        }
        else {
            console.log(selectedimg);
        }
    }

    const handleSubmission = () => {
        const storage = getStorage(app);
        const storageRef = ref(storage, `Product-image/${values.product_image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, values.product_image);
        uploadTask.on('state_changed',

            (snapshot) => {
                // var n = 3;
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // var numberval = progress.slice(0, n)
                setLoading(true);
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);

                   
                    try {
                        const docRef = await addDoc(collection(firestore, "Product"), {
                            categories: values.categories,
                            subcategories: values.subcategories,
                            brand: values.brand,
                            product_description: values.product_description,
                            product_price: values.product_price,
                            sold_price: values.sold_price,
                            product_image: downloadURL
                        });
                        console.log("Document written with ID: ", docRef.id);
                        setLoading(false);
                        setValues({
                            categories: "",
                            subcategories: "",
                            brand: "",
                            product_description: "",
                            product_price: "",
                            sold_price: "",
                            product_image: null
                        })
                        document.getElementById('file').value = ''
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                });
            }
        );

    }

    return (
        <>
            <Container>
                {Loading ? (
                    <Box sx={{ display: "flex" }} className="loader_main">
                        <CircularProgress color="secondary" className="spinner-border" />
                    </Box>
                ) : null}

                <Row>
                    <h2>Add Product</h2>
                    <hr />
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className={style.form}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label className={style.label}>Categories</Form.Label>
                                <Form.Select aria-label="Default select example" required value={values.categories}
                                    onChange={(e) => setValues((prev) => ({ ...prev, categories: e.target.value }))}>
                                    <option>select categories</option>
                                    <option value="Man">Man</option>
                                    <option value="Moman">Woman</option>
                                    <option value="children's">children's</option>
                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label className={style.label}>Sub categories</Form.Label>
                                <Form.Select aria-label="Default select example" required value={values.subcategories}
                                    onChange={(e) => setValues((prev) => ({ ...prev, subcategories: e.target.value }))}>
                                    {CategoriesType.map((items, i) => {
                                        return <option value={items} key={i}>{items}</option>
                                    })}
                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label className={style.label}>Brand</Form.Label>
                                <Form.Select aria-label="Default select example" required value={values.brand}
                                    onChange={(e) => setValues((prev) => ({ ...prev, brand: e.target.value }))}>
                                    {BRAND.map((items, i) => {
                                        return <option value={items} key={i}>{items}</option>
                                    })}

                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label className={style.label}>Product description</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product description" value={values.product_description}
                                    onChange={(e) => setValues((prev) => ({ ...prev, product_description: e.target.value }))}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label className={style.label}>Product Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Product Price" value={values.product_price}
                                    onChange={(e) => setValues((prev) => ({ ...prev, product_price: e.target.value }))}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label className={style.label}>Sold Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Product Price"  value={values.sold_price}
                                    onChange={(e) => setValues((prev) => ({ ...prev, sold_price: e.target.value }))}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label className={style.label}>Product Image</Form.Label>
                                <Form.Control
                                    required
                                    type="file"
                                    id='file'
                                    placeholder="Product Image"
                                    onChange={handleProductImage}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <b>{Errormsg}</b>
                        <Button onClick={handleSubmission}>Submit form</Button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}