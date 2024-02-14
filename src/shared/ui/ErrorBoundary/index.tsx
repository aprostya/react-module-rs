import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg: string;
  errorName: string;
  errorInfo: ErrorInfo;
}

// TODO customise ? or to take error boundary from npm package

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: '',
      errorName: '',
      errorInfo: { componentStack: '' },
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, errorMsg: error.message, errorInfo });
  }

  render() {
    const {
      errorName,
      errorMsg,
      errorInfo: { componentStack },
    } = this.state;
    if (this.state.hasError) {
      return (
        <h3>
          {errorMsg} {errorName} {componentStack}
        </h3>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
