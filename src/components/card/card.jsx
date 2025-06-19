import "./card.css";

function Card({ name, linkText,image }) {
  
  return (
      <div>
        <div className="card-container">
          <h1 className="card-heading">{name}</h1>
          <img src={image} alt={name} className="card-image" />
          <p className="card-description">
            Lorem ipsum,dolor sit amet consectetur adipisicing elit. Est,
            voluptatibus fugiat perferendis alias ipsum repudiandae consectetur!
            Perferendis nesciunt eligendi, vitae eos nostrum est optio! Tempora
            nam nisi deserunt vero dignissimos.
          </p>
          <a href="">{linkText}</a>
        </div>
      </div>
  );
}

export default Card;

