import styled from '@emotion/styled';
import { Box } from '@mui/system';

// TestimonialCard
export const TestimonialCard = styled(Box)({

})

// TestimonialDetails
export const TestimonialDetails = styled('p')({
  fontWeight: '300',
  fontSize: '18px',
  color: "#c8c8c8",
  lineHeight: "2",
  letterSpacing: "2px",
})


export const TestimonialContentWrapper = styled('div')({
  padding: "0px 30px",
  // border: "1px solid #eee",
  margin: "0 10rem",
  marginTop: "3rem",
});


// TestimonialAuthor
export const TestimonialAuthor = styled(Box)({
  paddingTop: "20px",
})
// AuthorImg
export const AuthorImg = styled(Box)({
  width: "70px",
  height: "70px",
  margin: "0 auto 20px",
  borderRadius: " 50%",
  overflow: "hidden",
  "img": {
    width: "100%",
    height: "auto",

  }
})
// AuthorName
export const AuthorName = styled(Box)(({ theme: { palette: { primary } } }) => ({
  color: primary?.main,
  letterSpacing: "2px",
  textTransform: "uppercase",
}))
// AuthorDetails
export const AuthorDetails = styled(Box)({
  lineHeight: "2",
  fontSize: "13px",
  letterSpacing: "1px",
})