import influencersDoc from "../assets/files/influencers.pdf";
import "../styles/InfluencersMarketing.css";

const InfluencersMarketing = () => {
    return (
        <div className="influencers-page">
            <h1>Influencers Marketing</h1>
            <p>
                Click the button below to open the PDF file. You can view it in a new tab
                or download it.
            </p>
            <a href={influencersDoc} target="_blank" rel="noopener noreferrer">
                <button className="influencers-button">Open PDF File</button>
            </a>
        </div>
    );
};

export default InfluencersMarketing;