import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component<
  { children?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <p>Error occurred</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
