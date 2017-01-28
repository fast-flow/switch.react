import { PropTypes, createElement } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-switch',
            className: '',
            onChange: function () {},
            checked: false,
            checkedNode: createElement('span', {className: 'r-switch-checked-symbol'}),
            // × ✖
            uncheckedNode: createElement('span', {className: 'r-switch-unchecked-symbol'}),
            disabled: false
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            onChange: PropTypes.func,
            checked: PropTypes.boolean,
            checkedNode: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            uncheckedNode: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            disabled: PropTypes.boolean
        }
    })
}
