import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const ITEM_HEIGHT = 48;

const options = [
  {
    text: 'Uncontrolled react form',
    path: '/uncontrolled-react'
  },
  {
    text: 'Controlled react form',
    path: '/controlled-react'
  },
  {
    text: 'Redux forms',
    path: '/REDUX-FORMS'
  },
];

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    active: ''
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({
      anchorEl: null,
      active: event.target.parentNode.dataset.label,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon 
                onClick={this.handleMenu} 
                aria-label="More"
                aria-owns={open ? 'long-menu' : null}
                aria-haspopup="true"
              />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
                },
              }}
            >
            {options.map( (option, index) => (
              <Link key={index} to={option.path} data-label={option.text}>
                <MenuItem onClick={this.handleClick}>
                  {option.text}
                </MenuItem>
              </Link>
            ))}
            </Menu>
            <Typography variant="title" color="inherit" className={classes.grow}>
              {this.state.active}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
