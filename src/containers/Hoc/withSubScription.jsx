import React from 'react';

function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = thjis.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }
        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }
        componentWillMount() {
            DataSource.removeChangeListener(this.handleChange);
        }
        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}
const CommentListWithSubscription = withSubScription (
    CommentList,//包裹组件
    (DataSource) => DataSource.getComments()
);
const BlogPostWithSubscription = withSubScription (
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
)