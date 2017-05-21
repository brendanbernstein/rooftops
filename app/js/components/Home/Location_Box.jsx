import React from 'react';

var Location_Box = React.createClass({
    render: function () {
        var divImage = {
            backgroundImage: "url(" + this.props.roof.pictureURL + ")"
        };
        console.log(this.props.roof.name);
        return (
            <div className="box" style={divImage} key={this.props.key}>
                <div className="title-row">
                    <p className="location-name" key={this.props.key}>
                        {this.props.roof.name}
                    </p>
                </div>
                <div className="location-description">
                    <p className="description">{this.props.roof.description}</p>
                </div>
                <div className="row">
                    <div className="col-md-4 bookings">
                        <div className="booking-value">
                            <p>10</p>
                        </div>
                        <div className="booking-name">
                            <p>BookingsName</p>
                        </div>
                    </div>
                    <div className="col-md-4 reviews">
                        <div className="booking-name">
                            <p>4 stars</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Location_Box;