import './BasicLoader.scss';
import {colors} from "../../styles/Theme.jsx";
import PropTypes from "prop-types";

const BasicLoader = ({
                         size = 56,
                         color = colors.accent100
                     }) => {
    return <div
        style={{
            width: size,
            height: size,
            border: `${0.20 * size}px solid ${color}`
        }}
        className={'application__basic-spinner--div'}
    />
};

BasicLoader.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

export default BasicLoader;