import React, { memo, useRef, useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";

type Props = {
  images: string[];
  duration?: number;
  delay?: number;
  onChange?: (image: string) => void;
};

const Slick: React.FC<Props> = ({ images, duration, delay, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInitialRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    const targets = ref.current;
    if (!targets) return;

    function runSlideShow(page = 0) {
      anime({
        targets,
        translateX: `-${page * 100}%`,
        duration: duration || 1000,
        delay: delay || 5000,
        easing: "easeInOutQuart",
        complete: () => {
          onChange && onChange(images[page]);
          runSlideShow((page + 1) % images.length);
        },
      });
    }

    if (!isInitialRenderedRef.current) runSlideShow();

    isInitialRenderedRef.current = true;
  }, [delay, duration, images, onChange]);

  return (
    <Container>
      <div ref={ref}>
        {images.map((image) => (
          <img src={image} key={image} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > div {
    display: flex;

    img {
      object-position: left top;
      object-fit: cover;
    }
  }
`;

export default memo(Slick);
