import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };

    this.setView = this.setView.bind(this);
    this.showView = this.showView.bind(this);
  }

  componentDidMount() {

  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    }, () => this.showView());
  }

  showView() {
    switch (this.state.view.name) {
      case 'catalog' :
        return <ProductList setView={this.setView} />;
      case 'details' :
        return <ProductDetails setView={this.setView} params={this.state.view.params}/>;
      default :
        return null;
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.showView()}
        </div>
      </div>
    );
  }
}
