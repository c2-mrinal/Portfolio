import React from 'react'
import "./timeline.css"

function Timeline() {
    return (
        <div>
        <div className="container">
                    <div className="row">
                        <div className="col-md-12">
        
                            <div style={{"display":"inlineBlock","width":"100%","overflowY":"auto"}}>
                            <ul className="timeline timeline-horizontal">
                                <li className="timeline-item">
                                    <div className="timeline-badge primary">
                                        <i className="glyphicon glyphicon-check"></i></div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-badge success">
                                        <i className="glyphicon glyphicon-check"></i></div>
                                    
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-badge info">
                                        <i className="glyphicon glyphicon-check"></i></div>
                            
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                            
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-badge warning"><i className="glyphicon glyphicon-check"></i></div>
                                
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Timeline