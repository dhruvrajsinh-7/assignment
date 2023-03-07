import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import Cards from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { loadcards } from "../redux/action";
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { cards } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadcards());
  }, []);
  return (
    <React.Fragment>
      <div>
        <button className="btn" onClick={() => navigate("/addcard")}>
          Add Card
        </button>
      </div>
      <div className="flex">
        {cards.map((card, index) => (
          <Cards key={index} card={card} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
