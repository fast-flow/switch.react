var React = require('react')
var Switch = require('switch.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Switch className="m-switch--s" /> m-switch--s
                <hr />
                <Switch className="m-switch--s" checked={true} /> m-switch--s checked
                <hr/>
                <Switch className="m-switch--s" checked={true} disabled={true} /> m-switch--s checked  disabled
                <hr/><hr/>

                <Switch className="m-switch--m" /> m-switch--m
                <hr />
                <Switch className="m-switch--m" checked={true} /> m-switch--m checked
                <hr/>
                <Switch className="m-switch--m" checked={true} disabled={true} /> m-switch--m checked  disabled
                <hr/><hr/>

                <Switch className="m-switch--l" /> m-switch--l
                <hr />
                <Switch className="m-switch--l" checked={true} /> m-switch--l checked
                <hr/>
                <Switch className="m-switch--l" checked={true} disabled={true} /> m-switch--l checked  disabled
            </div>
        )
    }
})
module.exports = App
