import React from 'react';

var Search = React.createClass({
    render: function () {
        return (
            <div>
                <input type="text" value={this.props.searchText} onChange={this.props.handleSearchTextInput} />
            </div>
        )
    }
});


var Filter = React.createClass({
    render: function () {
        return (
            <div>
                <input value={this.props.searchText} onChange={this.props.handleSearchTextInput} />
            </div>
        )
    }
});

module.exports = Search; 