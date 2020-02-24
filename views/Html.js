var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Content = require('./content');

class Html extends React.Component {
  render() {
    var data = this.props;

    // render the content as a dynamic react component
    var contentHtml = ReactDOMServer.renderToString(<Content {...data} />);    
    
    var initScript =
    'main(' + JSON.stringify(data)+ ')';


    return (
      <html lang="fr">
        <head>
          <meta charSet="utf-8"/>
          <title>{data.head_title}</title>
          <meta name="description" content={data.meta_description}/>
          <meta name="keywords" content={data.meta_keywords}/>
          <meta name="author" content={data.meta_author}/>
          <link rel="icon" href="./assets/img/favicon.png"/>
          <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"/>
          <link rel="stylesheet" href="./css/style.css"/>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: contentHtml}} />
        </body>
        <script src="./js/react.js"/>
        <script src="/three/three.min.js"/>
        <script src="./js/postprocessing.min.js"/>
        <script src="./js/lightspeed.js"/>
        <script src="./js/main.js"/>
        <script dangerouslySetInnerHTML={{__html: initScript}}/>
      </html>
    );
  }
}

module.exports = Html;