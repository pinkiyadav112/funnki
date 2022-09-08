
import React, {  useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import ReactStars from "react-rating-stars-component";
// import style from "./index.module.scss"

const Data = [
    'Photographers',
    'Makeup Artists',
    'Planners',
    'Hall',
    'Wedding Wear',
    'Choreographers',
    'Caterers',
    'Jewellery',
    'Honeymoon',
    'Entertainment',
    'DJs',
    'Pandits',
    'Gifts',
    'Cars',
];
const LOCATION = [
    'Delhi',
    'Noida',
    'Kolkata',
    'Patna',
    'Gujarat',
    'Surat',
    'Mumbai',
    'Pune',
    'Haydrabad',
    'Channai',
    'Aasam',
    'Kerla',
    'Kochi',
    'Kanpur',
];
const Celebration = [
    'Wedding',
    'Rings ceremony',
    'Tilak ceremony',
    'Upanayan sanskar',
    'Birthday',
    'Office Party',
    'conference',
];
const Rating = [
    2.3,
    3.1,
    4.3,
    5.0,
    1.3
]
export default function Filter() { 
    const [expanded, setExpanded] = React.useState('panel1');
    const [expanded2, setExpanded2] = React.useState('panel2');
    const [expanded3, setExpanded3] = React.useState('panel3');
    const [value, setValue] = useState([]);
    const [Price, setPrice] = React.useState([2000, 30000]);
    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(isExpanded ? panel : false);
    };
    const handleChange3 = (panel) => (event, isExpanded) => {
        setExpanded3(isExpanded ? panel : false);
    };
    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography >
                        Category
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter_category">
                        {Data.map((item, index) => (
                            <div >
                                <FormControlLabel
                                    label={item}
                                    control={
                                        <Checkbox
                                            size="small"
                                            disableIcon
                                            overlay
                                            label={item}
                                            checked={value.includes(item)}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    setValue((val) => [...val, item]);
                                                    console.log("item", item)

                                                } else {
                                                    setValue((val) => val.filter((text) => text !== item));
                                                }
                                            }}
                                        />
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography >Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter_category">
                        {LOCATION.map((item, index) => (
                            <div>
                                <FormControlLabel
                                    label={item}
                                    control={
                                        <Checkbox
                                            size="small"
                                            disableIcon
                                            overlay
                                            label={item}
                                            checked={value.includes(item)}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    setValue((val) => [...val, item]);
                                                    console.log("item", item)

                                                } else {
                                                    setValue((val) => val.filter((text) => text !== item));
                                                }
                                            }}
                                        />
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography >Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={Price}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        min={100}
                        defaultValue={200}
                        max={200000}

                    />  <span>100</span> <span className="float-end">100000</span>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange3('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography >
                        Celebration type
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter_category">
                        {Celebration.map((item, index) => (
                            <div>
                                <FormControlLabel
                                    label={item}
                                    control={
                                        <Checkbox
                                            size="small"
                                            disableIcon
                                            overlay
                                            label={item}
                                            checked={value.includes(item)}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    setValue((val) => [...val, item]);
                                                    console.log("item", item)

                                                } else {
                                                    setValue((val) => val.filter((text) => text !== item));
                                                }
                                            }}
                                        />
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header">
                    <Typography >Rating</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {Rating.map((item, index) => (
                        <div className="d-flex flex-row Rating">
                            <Checkbox
                                size="small"
                                disableIcon
                                overlay
                                label={item}
                                checked={value.includes(item)}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        setValue((val) => [...val, item]);
                                        console.log("item", item)

                                    } else {
                                        setValue((val) => val.filter((text) => text !== item));
                                    }
                                }}
                            />
                            <ReactStars
                                count={5}
                                size={14}
                                value={item}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                            />  <span className="p-2">{item}</span>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>
        </>
    )
}