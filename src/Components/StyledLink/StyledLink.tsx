import React from 'react';
import {Link} from "react-router-dom";
import {IStyledLink} from "./sevices";
import { makeStyles } from '@material-ui/core/styles';
import {LinkStyle} from "./Style";

const useStyles = makeStyles(LinkStyle);

const StyledLink:React.FC<IStyledLink> = ({to, children}) => {
    const classes = useStyles();
    return (
        <Link
            to={to}
            className={classes.link}
        >
            {children}
        </Link>
    );
}

export default StyledLink;