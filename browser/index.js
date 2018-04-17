'use strict';
var utils;

var exId = "cowi_test";
module.exports = {
    set: function (o) {

        utils = o.utils;

    },

    init: function () {


        var React = require('react');

        var ReactDOM = require('react-dom');

        utils.createMainTab(exId, __("TEST"), __("TEST"));



        class Cowi_test extends React.Component {
            constructor(props) {
                super(props);

                this.onClick = this.onClick.bind(this);
            }

            /**
             *
             * @param e
             */
            onClick(e) {
                console.log("Calling parent");
                window.parent.postMessage('Hello Parent Frame!', '*');
                window.parent.postMessage({"hello": "World"}, '*');
            }

            /**
             *
             */
            componentDidMount() {


            }

            /**
             *
             * @returns {XML}
             */
            render() {
                return (
                    <div role="tabpanel">
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <div className="form-group">

                                    <button className="btn btn-raised" onClick={this.onClick}>Click me</button>

                                </div>

                            </div>
                        </div>
                    </div>
                );
            }
        }

        // Append to DOM
        //==============
        try {

            ReactDOM.render(
                <Cowi_test />,
                document.getElementById(exId)
            );
        } catch (e) {

        }

    }
};