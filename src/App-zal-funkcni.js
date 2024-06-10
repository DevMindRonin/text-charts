// App.js
import React, { useState, useEffect } from "react";
import LoadFile from "./components/LoadFile";
import ApiCall from "./components/ApiCall";
import ChartView from "./components/ChartView";
import Statistic from "./components/Statistic";
import BoldText from "./components/BoldText";
import NavigationButtons from "./components/NavigationButtons";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

import loadingImage from "./data1.png";

const App = () => {
  const [fileData, setFileData] = useState("");
  const [apiData, setApiData] = useState([]);
  const [showRaw, setShowRaw] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadFile = (data) => {
    setFileData(data);
    setShowRaw(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (fileData) {
      setIsLoading(false);
    }
  }, [fileData]);

  return (
    <Container fluid>
      <Row>
        {/* LEVÉ MENU */}
        <Col md={2} className="bg-dark text-white d-flex flex-column justify-content-between vh-100 p-4">
          <div className="mt-4">
            <LoadFile loadFile={handleLoadFile} />
          </div>
          <NavigationButtons setShowRaw={setShowRaw} />
        </Col>

        {/* RIGHT WINDOW */}
        <Col md={10} className="bg-light vh-100 overflow-auto">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
              <img src={loadingImage} className="img-fluid" alt="Loading" />
            </div>
          ) : (
            <>
              {/* RIGHT WINDOW: Display stats */}
              {!showRaw && fileData && (
                <>
                  <Row className="m-4">
                    <Col>
                      <Statistic text={fileData} apiData={apiData} subData={"entityId"} />
                    </Col>
                  </Row>
             
              {/* RIGHT WINDOW: Display charts */}
                  <Row className="m-2">
                    <Col md={6}>
                      <Card className="mb-4 mt-4 p-4 h-100" >
                        <Card.Body>
                          <Card.Title>EntityId Chart</Card.Title>
                          <Card.Text className="overflow-auto">
                            <ApiCall text={fileData} setApiData={setApiData} />
                            <ChartView apiData={apiData} subData={"entityId"} />
                            <div>This ID is from the localized Wikipedia for this document's language.</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="mb-4 mt-4 p-4 h-100">
                        <Card.Body>
                          <Card.Title>Type Chart</Card.Title>
                          <Card.Text>
                            <ChartView apiData={apiData} subData={"type"} />
                            <div>List of Dbpedia types for this entity, or an empty list if there are none.</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </>
              )}
              
              {/* RIGHT WINDOW: Raw data */}
              {showRaw && fileData && (
                <Row className="p-4">
                  <Col md={8} >
                    <h1 className="mb-4">Raw Data</h1>
                    <Card className="h-100" style={{ maxHeight: '85vh', overflowY: 'auto' }}>
                      <Card.Body>                        
                        <Card.Text>{<BoldText text={fileData} wordsToHighlight={apiData} />}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                
                  <Col md={4} className="overflow-auto ">
                    <h1 className="mb-4">Entities</h1> 
                    {apiData.length > 0 && (
                      <Card className="h-100" style={{ maxHeight: '85vh', overflowY: 'auto' }}>
                        <Card.Body>
                          <Card.Text>
                            {apiData.map((entity, index) => (
                              <div key={index}>
                                <div>
                                  <strong>Entity ID:</strong>{" "}
                                  <a href={entity.wikiLink} rel="noreferrer" target="_blank">
                                    {entity.entityId}
                                  </a>
                                </div>
                                <div>
                                  <strong>Type:</strong> {entity.type}
                                </div>
                                <hr />
                              </div>
                            ))}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                </Row>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
