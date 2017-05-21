import React from 'react';
var $ = require('jquery');

import LocationFilter from './Location_Filter.jsx';
import LocationFilterExecute from './Filter_Execute.jsx';
import RoofPopUp from '../RoofPage/RoofPopUp.jsx';

var FilterClassTable = React.createClass({
     getInitialState: function () {
        return {
            searchText: '',
            roofTypes: [], //checked list
            roofs: []
        }
    },

    handleSearchTextInput: function (event) {
        this.setState({
            searchText: event.target.value
        })
    },

    handleLocationTypeInput: function () {

    },

    componentDidMount: function () {
        var url = "http://rooftop-brendanbernstein.c9users.io:8080/api/roofs";
        this.loadClassesFromServer(url);
    },

    loadClassesFromServer: function (url) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: function (data) {
                this.setState({roofs: data})
            }.bind(this),
        })
    },

    render: function () {
         return (
            <div>
                <div className="location-type-filter-container">
                    <LocationFilter
                        searchText = {this.state.searchText}
                        locationTypes = {this.state.classTypes}
                        onSearchTextInput = {this.handleSearchTextInput}
                        onClassTypeInput = {this.handleLocationTypeInput}
                    />
                </div>
                <div className="locations">
                    <LocationFilterExecute
                        searchText = {this.state.searchText}
                        classTypes = {this.state.classTypes}
                        data={this.state.roofs}
                    />
                </div>
                <div className="roofpopup">
                    <RoofPopUp />
                </div>
            </div>
         );
    }
});

module.exports = FilterClassTable;