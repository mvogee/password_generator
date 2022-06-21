import '../styles/PasswordDisplay.css';

type props = {
    generatedPw: string;
};

const PasswordDisplay = ({ generatedPw } : props) => {
    return(
        <div className="passwordDisplay">
            <p>{generatedPw}</p>
        </div>
    );
}

export default PasswordDisplay;