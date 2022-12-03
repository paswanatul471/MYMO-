import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, decription } = this.props
        return (
            <div class="card" style={{width: "18rem"}}>
                <img src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{decription}</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        )
    }
}
export default NewsItems
