import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Global";
import { Back, BigImage, GalleryStyled, SmallImage } from "./style";

const Gallery = () => {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    getAnimePictures(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <GalleryStyled>
      <Back>
        <Link to="/">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M21 24l-18-12 18-12v24zm-16.197-12l15.197 10.132v-20.263l-15.197 10.131" />
          </svg>
          Back to Home
        </Link>
      </Back>
      <BigImage>
        <img src={pictures[index]?.jpg.image_url} />
      </BigImage>
      <SmallImage>
        {pictures?.map((picture, i) => {
          return (
            <div
              className="image-con"
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                src={picture?.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                }}
                alt=""
              />
            </div>
          );
        })}
      </SmallImage>
    </GalleryStyled>
  );
};

export default Gallery;
