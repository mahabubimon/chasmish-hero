import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Rating,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import * as React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../../hooks/useAuth";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const Review = () => {
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);
  const { user } = useAuth().firebaseData;
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleReviewSubmit = (data) => {
    data.image = user.photoURL || "https://i.ibb.co/LkRh377/user.jpg";
    data.name = user.displayName;
    data.rating = value;

    const url = "https://chasmish-hero.herokuapp.com/reviews";
    axios
      .post(url, data)
      .then(() => {
        alert("Review Send Successfully.");
        history.replace("/home#reviews");
      })
      .catch();
  };

  return (
    <section>
      <Container className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/KzGcCFF/Happy-man-holding-five-golden-stars-Customer-review-social-media-flat-vector-illustration-Assessment.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <Typography sx={{ fontSize: "h4.fontSize" }} component="legend">
            Feedback Your Experience
          </Typography>
          <br />
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedbac"
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              value={value}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(handleReviewSubmit)}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Rating"
              // {...register("rating")}
              value={value}
              variant="outlined"
            />
            <TextareaAutosize
              {...register("review", { required: true })}
              aria-label="minimum height"
              minRows={4}
              placeholder="Share Your Experience"
              style={{ width: 200 }}
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Review
            </Button>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Review;
