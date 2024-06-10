import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"

const Statistic = ( {text, apiData, subData} ) => {
    const wordCount = text.split(/\s+/).filter(word => word !== "").length;

    // Spočítat počet písmen
    const letterCount = text.replace(/\s+/g, "").length
        
    // Získání počtu jedinečných hodnot vlastnosti entityId
    const uniqueEntityIds = new Set(apiData.map(item => item.entityId))
    const uniqueEntityIdCount = uniqueEntityIds.size

    // Získání počtu jedinečných hodnot vlastnosti type
    const uniqueTypes = new Set(apiData.map(item => item.type))
    const uniqueTypeCount = uniqueTypes.size

    return (
        <div>
            <Container fluid>
                <Row className="mt-3 mb-4 ml-5 ml-5">
                    <Col md={3} className="text-center">
                        <h1>{letterCount}</h1>
                        <small>Number of letters</small>
                    </Col>
                    <Col md={3} className="text-center">
                        <h1>{wordCount}</h1>
                        <small>Number of words</small>
                    </Col>
                    <Col md={3} className="text-center">
                        <h1>{uniqueEntityIdCount}</h1>
                        <small>Number of EntityId</small>
                    </Col>
                    <Col md={3} className="text-center">
                        <h1>{uniqueTypeCount}</h1>
                        <small>Number of Type</small>
                    </Col>
                </Row>
            </Container>
        </div>
      )
}

export default Statistic