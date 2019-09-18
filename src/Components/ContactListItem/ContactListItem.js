import React from "react";

class ContactListItem extends React.Component {
  state = {
    btnChange: false,
    btnText: "Contact Now"
  };

  onBtnClick = () => {
    if (this.state.btnChange === false) {
      this.setState({
        btnChange: true,
        btnText: "Clicked!"
      });
    } else {
      this.setState({
        btnChange: false,
        btnText: "Contact Now!"
      });
    }
  };

  render() {
    const { name, desc, avatar, gender } = this.props;
    const url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    let btnStyle = "btn btn-default";

    if (this.state.btnChange) {
      btnStyle = "btn btn-danger";
    }

    return (
      <li>
        <div className="media">
          <div className="media-left align-self-center">
            <img className="rounded-circle" src={url} />
          </div>
          <div className="media-body">
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
          <div className="media-right align-self-center">
            <a href="#" className={btnStyle} onClick={this.onBtnClick}>
              {this.state.btnText}
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ContactListItem;
