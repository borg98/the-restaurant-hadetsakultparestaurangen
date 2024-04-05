import '../style/_Contact.scss';

export default function Card () { 
  return (
    <>
      <div className="card">
        <img className='cardImg' src="src\assets\milkyway.jpg" alt="The milkyway" />
        <h3 className='card-title'>City:</h3>
        <div className="card-text">
        <p>The milky way</p>
        </div>
      </div>
    </>
  );

}