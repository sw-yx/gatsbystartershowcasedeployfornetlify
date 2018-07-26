import React, { Component } from "react"
import FaAngleDown from "react-icons/lib/fa/angle-down"
import FaAngleUp from "react-icons/lib/fa/angle-up"

import { options, scale, rhythm } from "../../utils/typography"
import { colors } from "../../utils/presets"

import styles from './styles'

class Collapsible extends Component {
  state = {
    collapsed: false,
  }

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { heading, children } = this.props
    return (
      <div css={{ 
        flex: 1,
        display: `flex`,
        flexDirection: `column`,
       }}>
        <h4
          css={{
            color: colors.lilac,
            cursor: `pointer`,
            display: `flex`,
            alignItems: `center`,
            fontWeight: `normal`,
            fontSize: scale(-2 / 5).fontSize,
            marginTop: rhythm(options.blockMarginBottom),
            marginRight: rhythm(5 / 4),
            letterSpacing: `.1em`,
            textTransform: `uppercase`,
            "&:hover": {
              color: colors.gatsby,
            },
          }}
          onClick={this.handleClick}
        >
          {heading}
          {` `}
          <span css={{ marginLeft: `auto` }}>
            {this.state.collapsed ? <FaAngleDown /> : <FaAngleUp />}
          </span>
        </h4>
        <div
          css={{
            overflow: `hidden`,
            height: this.state.collapsed ? `0px` : `500px`,
            transition: `height 0.2s`,
          }}
        >
          <div
            css={{
              overflowY: `scroll`,
              height: `100%`,
              ...styles.scrollbar,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Collapsible
