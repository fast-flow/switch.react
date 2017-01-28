import { Component } from "react"
import Switch from "../index"
import { shallow, mount, render } from "enzyme"

it('props.className', function () {
    const app = mount(<Switch className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})

it('props.prefixClassName', function () {
    const app = mount(<Switch prefixClassName="m-switch" />)
    expect(app.find('.m-switch').length).toEqual(1)
    expect(app.find('.m-switch-checked').length).toEqual(1)
})

it('props.onChange && props.checked', function () {
    var someCheck = false
    var app = mount(<Switch onChange={function (checked) {
        someCheck = checked
    }} />)
    app.find('.r-switch').simulate('click')
    expect(app.find('.r-switch--checked').length).toEqual(0)
    expect(someCheck).toEqual(true)

    var someCheck = true
    var app = mount(<Switch checked={true} onChange={function (checked) {
        someCheck = checked
    }} />)
    expect(app.find('.r-switch--checked').length).toEqual(1)
    app.find('.r-switch').simulate('click')
    expect(app.find('.r-switch--checked').length).toEqual(1)
    expect(someCheck).toEqual(false)
})


it('props.checkedNode & props.uncheckedNode', function () {
    var app = mount(<Switch checkedNode="开" uncheckedNode="关" />)
    expect(app.find('.r-switch-checked').text()).toEqual('开')
    expect(app.find('.r-switch-unchecked').text()).toEqual('关')
    var app = mount(<Switch checkedNode={(<em>开</em>)} uncheckedNode={(<em>关</em>)} />)
    expect(app.find('.r-switch-checked').html()).toEqual("<span class=\"r-switch-checked\"><em>开</em></span>")
    expect(app.find('.r-switch-unchecked').html()).toEqual("<span class=\"r-switch-unchecked\"><em>关</em></span>")
})

it('props.disabled', function () {
    var app = mount(<Switch />)
    expect(app.find('.r-switch--disabled').length).toEqual(0)
    var app = mount(<Switch disabled={true} />)
    expect(app.find('.r-switch--disabled').length).toEqual(1)
    var notDisabledCheck = null
    var app = mount(<Switch disabled={false} onChange={function (checked) {
        // Will trigger
        notDisabledCheck = checked
    }} />)
    app.find('.r-switch').simulate('click')
    expect(notDisabledCheck).toEqual(true)

    var disabledCheck = null
    var app = mount(<Switch disabled={true} onChange={function (checked) {
        // Not trigger
        disabledCheck = checked
    }} />)
    app.find('.r-switch').simulate('click')
    expect(disabledCheck).toEqual(null)
})
