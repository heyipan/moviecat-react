import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'data_list', ...(require('E:/code/moviecat-react/src/model/data_list.js').default) });
app.model({ namespace: 'movies', ...(require('E:/code/moviecat-react/src/model/movies.js').default) });
