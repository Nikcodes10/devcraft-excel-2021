import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './Account.css'

import pay from '../../../assets/svg/pay.svg'
import chip from '../../../assets/svg/chip.svg'


import logos_mastercard from '../../../assets/png/logos_mastercard.png'
import logo from '../../../assets/png/logo.png'

function Account() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('1');

    console.log(mode)
    const [card, setCard] = useState('')
    const [cvv, setCvv] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleModeChange = (event: SelectChangeEvent) => {
        setMode(event.target.value as string);
      };

    return (
        <div className='account'>
            <div className='account__header'>
                <button onClick={handleClickOpen} className='add_acnt__btn'>Add Account</button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    PaperProps={{
                        style: {
                            backgroundColor: '#00C16E',
                        },
                    }}
                    disableScrollLock={true}
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Add Account"}
                    </DialogTitle>
                    <DialogContent>
                        <div className='add_account_modal'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Mode of Payment</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={mode}
                                    label="Mode of Payment"
                                    onChange={handleModeChange}
                                    
                                >
                                    <MenuItem value={1}>Card</MenuItem>
                                    <MenuItem value={2}>UPI</MenuItem>
                                </Select>
                            </FormControl>
                            { mode === '1' ? (
                                <div className='payment__container'>
                                    <div className='card_single_input'>
                                        <label className='card_label'>Card Number</label>
                                        <input className='card_input' type='text' value={card} onChange={(e) => setCard(e.target.value)}/>
                                    </div>
                                    <div className='card_single_input'>
                                        <label className='card_label'>CVV</label>
                                        <input className='card_input' type='text' value={cvv} onChange={(e) => setCvv(e.target.value)}/>
                                    </div>
                                    <div className='card_single_input'>
                                        <label className='card_label'>Password</label>
                                        <input className='card_input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                            ) : 
                                <div className='payment__container'>
                                    <div className='card_single_input'>
                                        <label className='card_label'>UPI Id</label>
                                        <input className='card_input' type='text' value={card} onChange={(e) => setCard(e.target.value)}/>
                                    </div>
                                    <div className='card_single_input'>
                                        <label className='card_label'>Phone</label>
                                        <input className='card_input' type='text' value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g,""))}/>
                                    </div>
                                    <div className='card_single_input'>
                                        <label className='card_label'>Password</label>
                                        <input className='card_input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                    <button onClick={handleClose} className='add_btn_modal'>
                        Add
                    </button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className='accounts__container'>
                <div className="card">
                    <div className="inner">
                        <div className="circle card-c1"></div>
                        <div className="circle card-c2"></div>
                        <div className="top">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="pay">
                                <img src={pay} alt="" />
                            </div>
                        </div>
                        <div className="chip">
                            <img src={chip} alt="" />
                        </div>
                        <div className="number">5040 0987 5100 7453</div>
                        <div className="bottom">
                            <div className="left">
                                <div className="validity">
                                    <div className="text">VALID THRU</div>
                                    <div className="date">09/25</div>
                                </div>
                                <div className="name">ARUN MOHAN</div>
                            </div>
                            <div className="right">
                                <div className="logo">
                                    <img src={logos_mastercard} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account