import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                 <footer className = "footer" style={{position: "relative"}}>
                    <span className="text-muted" >All Rights Reserved 2022 @Aitacs</span>
                </footer> 
            </div>
        )
    }
}

export default FooterComponent
