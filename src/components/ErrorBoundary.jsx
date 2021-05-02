import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Log any errors from component within  boundary.
  componentDidCatch(err, errInfo) {
    console.log('Error detected! ---', err);
    console.log(errInfo);
    this.setState({ hasError: true });
  }

  // Render error message.
  render() {
    if (this.state.hasError) {
      return <h1>Error occurred.</h1>;
    }

    // If no error return contents within boundary.
    return this.props.children;
  }
}
