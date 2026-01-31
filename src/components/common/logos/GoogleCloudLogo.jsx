import gcpLogo from '/gcp-logo.png';

/**
 * Official Google Cloud Platform Logo
 * Using official brand image
 */
const GoogleCloudLogo = ({ size = 24 }) => {
    return (
        <img
            src={gcpLogo}
            alt="Google Cloud Platform"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
        />
    );
};

export default GoogleCloudLogo;
