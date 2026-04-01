import Image from "next/image";
import "./imagecontainer.css";

const ImageContainer = ({ imageSource, title, description, priority = false }) => {
  return (
    <article className="featureCard">
      <div className="featureCardMedia">
        <Image
          src={imageSource}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 84vw, 32rem"
          className="featureCardImage"
        />
      </div>

      <div className="featureCardContent">
        <h2 className="featureCardTitle">{title}</h2>
        <p className="featureCardDescription">{description}</p>
      </div>
    </article>
  );
};

export default ImageContainer;
