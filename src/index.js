import React from 'react';
import ReactDOM from 'react-dom';
//引入
import './static/index.css'
import Route from './router/index'
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store/store';
//引入
import registerServiceWorker from './registerServiceWorker';
//替换
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}
render(Route);
//替换
//新增
if (module.hot) {
    module.hot.accept('./router/', () => {
      render(Route);
    })
}   
//新增
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
