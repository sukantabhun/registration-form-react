import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegisterd: false,
    firstName: '',
    lastName: '',
    errFName: false,
    errLName: false,
  }

  onclickSubmitBtn = e => {
    const {firstName, lastName} = this.state
    e.preventDefault()
    if (firstName === '') {
      if (lastName === '') {
        this.setState({errFName: true, errLName: true})
      } else {
        this.setState({errFName: true})
      }
    } else if (lastName === '' && firstName !== '') {
      this.setState({errLName: true})
    } else {
      this.setState({isRegisterd: true})
    }
  }

  onBlurFirstName = e => {
    if (e.target.value === '') {
      this.setState({errFName: true})
    } else {
      this.setState({errFName: false})
    }
  }

  onChangeFirstName = e => {
    this.setState({firstName: e.target.value, errFName: false})
  }

  onBlurLastName = e => {
    if (e.target.value === '') {
      this.setState({errLName: true})
    } else {
      this.setState({errFName: false})
    }
  }

  onChangeLastName = e => {
    this.setState({lastName: e.target.value, errLName: false})
  }

  render() {
    const {isRegisterd, firstName, lastName, errFName, errLName} = this.state
    const isEmptyColor1 = errFName ? 'err-color' : null
    const isEmptyColor2 = errLName ? 'err-color' : null

    return (
      <div className="page-container">
        <h1>Registration</h1>
        <div>
          {isRegisterd ? (
            <div className="form">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="success-text">Submitted Successfully</p>
              <button
                type="button"
                className="submit-btn"
                onClick={() => {
                  this.setState({
                    isRegisterd: false,
                    firstName: '',
                    lastName: '',
                    errFName: false,
                    errLName: false,
                  })
                }}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.onclickSubmitBtn} className="form">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  placeholder="First name"
                  id="firstName"
                  value={firstName}
                  className={`input-element ${isEmptyColor1}`}
                  onBlur={this.onBlurFirstName}
                  onChange={this.onChangeFirstName}
                />
                <p className="err-msg">{errFName ? '*Required' : null}</p>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  placeholder="Last name"
                  id="lastName"
                  value={lastName}
                  className={`input-element ${isEmptyColor2}`}
                  onBlur={this.onBlurLastName}
                  onChange={this.onChangeLastName}
                />
                <p className="err-msg">{errLName ? '*Required' : null}</p>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
