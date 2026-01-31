import firebaseLogo from '/firebase-logo.png';

/**
 * Official Firebase Logo
 * Using official brand image
 */
const FirebaseLogo = ({ size = 24 }) => {
    return (
        <img
            src={firebaseLogo}
            alt="Firebase"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
        />
    );
};

export default FirebaseLogo;
