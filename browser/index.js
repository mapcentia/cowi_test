'use strict';
var utils;
var print;
var backboneEvents;

var exId = "cowi_test";
module.exports = {
    set: function (o) {

        utils = o.utils;
        print = o.print;
        backboneEvents = o.backboneEvents;

    },

    init: function () {


        var React = require('react');

        var ReactDOM = require('react-dom');

        utils.createMainTab(exId, __("TEST"), __("TEST"));

        print.setCallBack(function (e) {
            if (!e.success) {
                alert("Noget gik galt!")
            } else {
                console.log(e.key);
                window.parent.postMessage({"key": e.key}, '*');
            }
        });



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
                backboneEvents.get().trigger("reset:all");
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