import "./App.css";
import Task from "./pages/Task";
import { Container, Typography } from "@mui/material";

function App() {
    return (
        <Container className="Container">
            <Typography
                alignSelf="center"
                sx={{
                    // marginTop: "20px",
                    fontFamily: "Poppins-Black",
                    fontSize: 26,
                    fontWeight: 900,
                    lineHeight: "24px",
                    pl: "10px",
                    color: "grey",
                    letterSpacing: "-1px",
                }}
            >
                FunFox
            </Typography>
            <Typography
                alignSelf="center"
                sx={{
                    // marginTop: "20px",
                    fontFamily: "Poppins-Black",
                    fontSize: 26,
                    fontWeight: 900,
                    lineHeight: "24px",
                    pl: "32px",
                    color: "#F25F38",
                    letterSpacing: "-1px",
                }}
            >
                TODO
            </Typography>
            <Task />
        </Container>
    );
}

export default App;
