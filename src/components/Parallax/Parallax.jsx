import './parallax.scss';

const Parallax = ({ type }) => {
  const backgroundStyle = type === "Services" 
    ? { background: "linear-gradient(180deg, #0c0c1d, #111132)" }
    : { background: "linear-gradient(180deg, #0c0c1d, #505064)" };

  return (
    <div className="parallax" style={backgroundStyle}>
        <h1> { type === "Services" ? "What I Do?" : "What I Did?" }</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax;
