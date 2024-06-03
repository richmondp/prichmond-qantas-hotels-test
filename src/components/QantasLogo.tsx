import qantasLogo from '../assets/qantas-logo.png';

const QantasLogo = () => {
  return (
    <a href="/">
      <img src={qantasLogo} alt="qantas logo" data-testid="logo-image" />
    </a>
  );
};

export default QantasLogo;
