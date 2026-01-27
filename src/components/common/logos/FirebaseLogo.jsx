/**
 * Official Firebase Logo
 * Using official brand image
 */
const FirebaseLogo = ({ size = 24 }) => {
    return (
        <img
            src="/firebase-logo.png"
            alt="Firebase"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
        />
    );
};

export default FirebaseLogo;
