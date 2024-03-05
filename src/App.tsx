import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Hello World!
                Siddharth Lokula
            </header>
<<<<<<< HEAD
            <h2 className="header">OMG, a header but smaller?!</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <span style={{ color: "red" }}>colored text</span>
                        <p>Pets I think are super cool:</p>
                        <ul>
                            <li>Komodo Dragon</li>
                            <li>Emu</li>
                            <li>Mantis</li>
                        </ul>
                        <p style={{ fontSize: "32px" }}>This gonna be BIG</p>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <img
                src={require("./images/guinea.jpg")}
                style={{ height: "50%", width: "50%" }}
                alt="A little guinea pig!"
            />
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
