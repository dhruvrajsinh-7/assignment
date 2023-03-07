import React, { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/material/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { deletecards } from "../redux/action";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Cards = ({ card }) => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const handledelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this card?")) {
      dispatch(deletecards(id));
    }
  };
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        gap: 4,
        display: "flex",
        direction: "column",
        alignItems: "center",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://i0.wp.com/quickfever.com/wp-content/uploads/2016/12/video-player.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {card.name}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link overlay underline="none" sx={{ color: "text.tertiary" }}>
            <a className="textdata" href={card.video}>
              Play
            </a>
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          {card.bucketcategory}
        </Chip>
      </div>
      <div className="btn-style">
        <IconButton
          id="btn"
          aria-label="delete"
          color="secondary"
          size="medium"
          onClick={() => handledelete(card.id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          id="btn"
          aria-label="edit"
          color="primary"
          size="medium"
          onClick={() => navigate(`/editcard/${card.id}`)}
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Card>
  );
};

export default Cards;
