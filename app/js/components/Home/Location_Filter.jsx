import React from 'react';

import Search from './Search_Filter.jsx';

var LocationFilter = React.createClass({
    render: function () {
        return (
            <div>
                <Search searchText={this.props.searchText} handleSearchTextInput={this.props.onSearchTextInput}/>
            </div>
        )
    }

});

module.exports = LocationFilter;