import React from "react";
import {
  TestimonialDetails,
  TestimonialContentWrapper,
  TestimonialCard,
  TestimonialAuthor,
  AuthorImg,
  AuthorName,
  AuthorDetails
} from "./styles";
import authorImg from "../../assests/Testimonial-image1.jpg"

const TestimonialsCard = ({ name, comment,authorDetails}) => {
  return (
    <TestimonialCard>
        <TestimonialContentWrapper>
            <TestimonialDetails>{comment}</TestimonialDetails>
        </TestimonialContentWrapper>
      <TestimonialAuthor>
            <AuthorImg><img src={authorImg} alt="authorImg" /></AuthorImg>
            <AuthorName>{name}</AuthorName>
            <AuthorDetails>{authorDetails}</AuthorDetails>
      </TestimonialAuthor>
    </TestimonialCard>
  );
};

export default TestimonialsCard;
