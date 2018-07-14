import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/header'

class Detail extends Component {
	constructor(props) {
        super(props);
        let item = props.planlist.filter((data) => Number(data.id) === Number(props.match.params.id))
        console.log(item)
		this.state = {
			plan: item[0]
		}
	}
	render() {
		return (
            <div style={{padding: '20px'}}>
            <Header />
				<h3>计划详情</h3>
				<p>id： {this.state.plan.id}</p>
				<p>标题： {this.state.plan.title}</p>
				<p>内容： {this.state.plan.content}</p>
			</div>

		)
	}
}
const mapStateToProps = function(store) {
  return {
    planlist: store.default.planlist
  };
};
export default connect(mapStateToProps)(Detail);
