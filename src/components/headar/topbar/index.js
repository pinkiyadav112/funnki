
import { Col, Row } from "react-bootstrap";
import style from "./index.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import { addToCart } from '../../../redux/features/productSlice';
export default function Topbar() {

    const SearchClick = () => {
        console.log("hshjs")
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const state = useSelector((state) => state.productSlice.cartItems);
    const inputTotals = state.reduce((accum, curr) => (accum += curr.cartQuantity), 0);

    return (
        <>
            <Row>
                <Col md={3} sm={3}>
                    <div className={style.logo}>
                        <Link to="/"> <img src="./logo/logo.png" alt="logo" /></Link>
                    </div>
                </Col>
                <Col md={9} sm={3}>
                    <div className={style.user}>
                        <TextField id="outlined-basic" label="Search" variant="outlined" />
                        <SearchIcon className={style.svg} onClick={SearchClick} />
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <PermIdentityIcon className={style.svg} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <NavLink to='/login' className={style.Login}><ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                    Login</NavLink>
                            </MenuItem>
                        </Menu>
                        <Tooltip title="">
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Link className={style.cart} to="/checkout"><LocalMallOutlinedIcon /> : <span>{inputTotals}</span></Link>
                            </IconButton>
                        </Tooltip>

                    </div>
                </Col>
            </Row>
        </>
    )
};

