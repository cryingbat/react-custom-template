import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import {show, deletePlan} from '../../store/home/action';
import store from '../../store/store';
import { connect } from 'react-redux';
import About from '../about/index'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '1',
            content: '1'
        }
    }
    show () {
        let b = this.props.planlist.show;
        store.dispatch(show(!b));
    }
    // 删除计划
    delete (id) {
        store.dispatch(deletePlan(id));
    }
    render() {
        return (
            <div>
                <Header />
                <div className="plant">
                    <h3>计划表</h3>
                    <p onClick={this.show.bind(this)}>添加计划</p>
                    <About />
                </div>
                <table className="planlist">
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.planlist.planlist.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="plan-title"><Link to={`/news/${item.id}`}>{item.title}</Link></td>
                                        <td className="plan-delect" onClick={this.delete.bind(this, item.id)}>删除</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        planlist: state.default
    }
  };
  export default connect(mapStateToProps)(Home)