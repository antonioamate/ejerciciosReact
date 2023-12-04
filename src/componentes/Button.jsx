import React from 'react'

export default function Button(props) {
    return <i className={"fa fa-"+props.btnIco+" "+props.btnType+"-button"} />
}