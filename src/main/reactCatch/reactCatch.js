import React, {Component} from 'react'

class ReactCatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: "react" }
        };
    }
    // 将user置为null，模拟异常
    onClick = () => {
        this.setState({ user: null });
    };
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Profile user={this.state.user} />
                </ErrorBoundary>
                <button onClick={this.onClick}>更新</button>
            </div>
        );
    }
}

export const ReactCatch = ReactCatchComponent;

const Profile = ({ user }) => <div>name: {user.name}</div>;

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, info) {
        // 显示错误UI
        this.setState({hasError: true});
        // 同时输出错误日志
        console.log('componentDidCatch', 'componentDidCatch');
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops, something went wrong.</h1>;
        }
        return this.props.children;
    }
}
