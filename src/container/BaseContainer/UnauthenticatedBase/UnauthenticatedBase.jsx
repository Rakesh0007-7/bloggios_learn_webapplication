import React from 'react';
import UnauthenticatedNavbar from "../../../Components/Navbars/UanauthenticatedNavbar/UnauthenticatedNavbar.jsx";
import PropTypes from "prop-types";

const UnauthenticatedBase = ({
    children
                             }) => {
    return (
        <main>
            <UnauthenticatedNavbar />
            {children}
        </main>
    );
};

UnauthenticatedBase.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UnauthenticatedBase;