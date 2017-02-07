var React = require('react')
var Switch = require('switch.react').default
var App = React.createClass({
    getInitialState() {
        return {
            basicChecked: false,
            basicTwoChecked: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Switch checked={self.state.basicChecked} onChange={function (checked) {
                        self.setState({
                            basicChecked: checked
                        })
                    }} />switch
                <hr/>
                <Switch checked={self.state.basicTwoChecked} onChange={function (checked) {
                        self.setState({
                            basicTwoChecked: checked
                        })
                    }} />switch:checked
                <hr/>
                <Switch disabled={true} />switch:disabled
                <hr/>
                <Switch checked={true} disabled={true} />switch:checked:disabled
                <hr />
                <Switch checkedNode="" uncheckedNode="" checked={true} /> checkedNode uncheckedNode checked
                <hr />
                <Switch checkedNode="" uncheckedNode="" /> checkedNode uncheckedNode
                <hr />
                <Switch checkedNode="开" uncheckedNode="关" checked={true}  />开
                <Switch checkedNode="开" uncheckedNode="关"  />关
                <hr />
                <Switch checkedNode={(<em>开</em>)} uncheckedNode={(<em>关</em>)} checked={true}  /> React element
                <Switch checkedNode={(<em>开</em>)} uncheckedNode={(<em>关</em>)}  />React element
            </div>
        )
    }
})
module.exports = App
