var React = require('react');

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var data = this.props;
    var descContent = [];

    const age = calculateAge("1997-11-25");
    for (const key of Object.keys(data.desc)) {
      var keyContent = data.desc[key]
      var updatedKeyContent = keyContent.replace('$AGE', age)

      if (Object.keys(data.desc).indexOf(key) != Object.keys(data.desc).length - 1) {
        descContent.push(<React.Fragment key={"desc"+key}>{updatedKeyContent}<br/><br/></React.Fragment>);
      } else {
        descContent.push(<React.Fragment key={"desc"+key}>{updatedKeyContent}</React.Fragment>);
      }
    }

    return (
      <React.Fragment>
        <h3 className="page_title disable_select">{data.page_title_outline}<strong>{data.page_title_strong}</strong></h3>
        <div id="about_content_container">
          <div id="about_image" style={{
            backgroundImage: "url(" + data.photo + ")"
          }}></div>
          <div id="about_text_container">
            <p id="about_desc" className="text disable_lightspeed">{descContent}</p>
            <p className="about_info disable_lightspeed">{data.address}</p>
            <p className="about_info disable_lightspeed">{data.phone}</p>
            <p className="about_info disable_lightspeed"><a href={"mailto:"+data.mail}>{data.mail}</a></p>
            <div id="about_icons">
              <a href="https://github.com/samaillt" target="_blank"><i className="fab fa-github disable_lightspeed"></i></a>        
              <a href="https://www.youtube.com/channel/UCtLCj7g000uBapYeMFK7kHQ/videos" target="_blank"><i className="fab fa-youtube disable_lightspeed"></i></a>
              <a href="https://fr.linkedin.com/in/tom-samaille/" target="_blank"><i className="fab fa-linkedin disable_lightspeed"></i></a>
              <a href="https://www.instagram.com/tom_samaille/" target="_blank"><i className="fab fa-instagram disable_lightspeed"></i></a>
              <a href="https://www.behance.net/tomsamaille" target="_blank"><i className="fab fa-behance disable_lightspeed"></i></a>
            </div>
            <p id="about_copyright" className="disable_lightspeed">{data.copyright.replace('$YEAR', new Date().getFullYear())}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

module.exports = About;