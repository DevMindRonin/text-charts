import React, { useState, useEffect } from "react"

import LoadFile from "./components/LoadFile"
import ApiCall from "./components/ApiCall"
import ChartView from "./components/ChartView"
import Statistic from "./components/Statistic"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"

import loadingImage from "./data1.png" 

const App = () => {
  const [fileData, setFileData] = useState("")
  const [apiData, setApiData] = useState([])
  const [showRaw, setShowRaw] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadFile = (data) => {
    setFileData(data)
    setShowRaw(false)
    setIsLoading(false)
  }

  const handleShowRaw = () => {
    setShowRaw(true)
  }

  useEffect(() => {
    if (fileData) {
      setIsLoading(false)
    }
  }, [fileData])

  return (
    <div>
      <Container fluid>
        <Row>
          {/* LEVÉ MENU */}
          <Col md={2} className="bg-dark text-white d-flex flex-column justify-content-between vh-100">
            <div className="p-4 mt-4">
              <LoadFile loadFile={handleLoadFile} />
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <Button onClick={() => setShowRaw(false)} className="mb-2 w-75">
                Dashboard
              </Button>
              <Button onClick={handleShowRaw} className="w-75">
                Raw Data
              </Button>
            </div>
          </Col>

          {/* PRAVÉ OKNO */}
          <Col md={10}>
            <div className="p-4 bg-light vh-100">
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                  <img src={loadingImage} height="500px" width="900px" alt="Loading" className="img-fluid" />
                </div>
              ) : (
                <Row>
                  {!showRaw && fileData && (
                    <>
                      <Row className="m-3">
                        <Statistic text={fileData} apiData={apiData} subData={"entityId"} />
                      </Row>
                    </>
                  )}
                  {showRaw && (
                    <>
                      <Row style={{ height: '85vh' }}>
                        <Col md={8} style={{ height: '100%' }}>
                          <h1 className="mb-4">Raw Data</h1>
                          <Card style={{ height: '100%', overflowY: 'auto' }}>
                            <Card.Body>
                              <Card.Text>{fileData}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={4} style={{ height: '100%' }}>
                          <h1 className="mb-4">Extracted Entities</h1>
                          {apiData.length > 0 && (
                            <Card style={{ height: '100%', overflowY: 'auto' }}>
                              <Card.Body>
                                {apiData.map((entity, index) => (
                                  <div key={index}>
                                    <div>
                                      <strong>Entity ID:</strong> <a href={entity.wikiLink} target="_blank">{entity.entityId}</a>
                                    </div>
                                    <div>
                                      <strong>Type:</strong> {entity.type}
                                    </div>
                                    <hr />
                                  </div>
                                ))}
                              </Card.Body>
                            </Card>
                          )}
                        </Col>
                      </Row>
                    </>
                  )}
                </Row>
              )}

              <Row>
                {!showRaw && fileData && (
                  <>
                    <Col md={6}>
                      <Card className="mb-4 mt-4 p-4">
                        <Card.Body>
                          <Card.Title>EntityId Chart</Card.Title>
                          <Card.Text>
                            <ApiCall text={fileData} setApiData={setApiData} />
                            <ChartView apiData={apiData} subData={"entityId"} />
                            <div>This ID is from the localized Wikipedia for this document's language.</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )}
                {!showRaw && fileData && (
                  <>
                    <Col md={6}>
                      <Card className="mb-4 mt-4 p-4">
                        <Card.Body>
                          <Card.Title>Type Chart</Card.Title>
                          <Card.Text>
                            <ChartView apiData={apiData} subData={"type"} />
                            <div>List of Dbpedia types for this entity, or an empty list if there are none.</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
