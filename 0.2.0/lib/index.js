import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"
class Switch extends Component {
    rootClick = (e) => {
        const self = this
        if (self.props.disabled) {
            e.preventDefault()
            return
        }
        self.props.onChange(!self.props.checked)
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <span onClick={self.rootClick} className={classNames({
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className,
                    [`${pcls}--checked`]: self.props.checked,
                    [`${pcls}--disabled`]: self.props.disabled
                })} >
                <span className={`${pcls}-mark`}></span>
                <span className={`${pcls}-checked`}>{self.props.checkedNode}</span>
                <span className={`${pcls}-unchecked`}>{self.props.uncheckedNode}</span>
            </span>
        )
    }
}
props(Switch)
export default Switch
