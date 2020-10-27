import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/Styles'
import styles from './styles/NavbarStyles'
import { ThemeContext } from './contexts/ThemeContext'
import {withLanguage} from './contexts/LanguageContext'

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkMode,toggleTheme} = this.context;
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" color={isDarkMode ? 'default':'primary'}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>🏁 </span>
                        </IconButton>
                        <Typography className={classes.title} varient="h6" color="inherit">
                            App Title {this.props.languageContext.Language}
                    </Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.grow} />
                        <div className={classes.search} >
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(withLanguage(Navbar));

// const Navbar = (props) => {
//     static contextType = ThemeContext;
//     const { classes } = props
//     return (
        // <div>
        //     <AppBar position="static" color="primary">
        //         <Toolbar>
        //             <IconButton className={classes.menuButton} color="inherit">
        //                 <span>🏁 </span>
        //             </IconButton>
        //             <Typography className={classes.title} varient="h6" color="inherit">
        //                 App Title
        //             </Typography>
        //             <Switch />
        //             <div className={classes.grow} />
        //             <div className={classes.search} >
        //                 <div className={classes.searchIcon}>
        //                     <SearchIcon />
        //                 </div>
        //                 <InputBase placeholder="Search..." classes={{
        //                     root: classes.inputRoot,
        //                     input:classes.inputInput
        //                 }} />
        //             </div>
        //         </Toolbar>
        //     </AppBar>
        // </div>
//     );
// }

// export default withStyles(styles)(Navbar);
