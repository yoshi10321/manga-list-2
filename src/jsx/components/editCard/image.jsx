import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class Image extends React.PureComponent {

  render () {
    const { img } = this.props

    let imageEditContainer = ''
    imageEditContainer = (
      <div>
        <img src={img} />
        <button>Edit</button>
      </div>
    )

    return (
      <div>
        {imageEditContainer}
      </div>
    )
  }
}

Image.propTypes = {
  img: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Image)
