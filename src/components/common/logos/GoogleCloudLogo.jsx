/**
 * Official Google Cloud Platform Logo
 * Using official brand image
 */
const GoogleCloudLogo = ({ size = 24 }) => {
    return (
        <img
            src="/gcp-logo.png"
            alt="Google Cloud Platform"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
        />
    );
};

export default GoogleCloudLogo;
