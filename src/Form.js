import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseLine from '@material-ui/core/CssBaseLine'
import FormcontrolLabel from '@material-ui/core/FormcontrolLabel'
import Formcontrol from '@material-ui/core/Formcontrol'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/FormStyles'
import { LanguageContext } from './contexts/LanguageContext'

const words={
    english:{
        email:"Email"
    },
    hindi:{
        email:"eeemale"
    },
    punjabi:{
        email:'sadda email'
    }
   
}


class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { Language, changeLanguage } = this.context;
      
        const { classes } = this.props;
        const {email} = words[Language]
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography varient="h5">
                        Sign In
                    </Typography>
                    <Select value={Language} onChange={changeLanguage}>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='hindi'>Hindi</MenuItem>
                        <MenuItem value='punjabi'>Punjabi</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <Formcontrol margin="normal" required fullWidth>
                            <InputLabel htmlFor="email" >{email}</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </Formcontrol>
                        <Formcontrol margin="normal" required fullWidth>
                            <InputLabel htmlFor="password" >Password</InputLabel>
                            <Input id="password" name="password" autoFocus></Input>
                        </Formcontrol>
                        <FormcontrolLabel control={<Checkbox color='primary' />} label="Remerber me" />
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Submit</Button>
                    </form>
                </Paper>
            </main>
        )
    }

}

export default withStyles(styles)(Form)
