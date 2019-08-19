import app from './config/express';
import routes from './routes/index.route';
import * as errorHandler from './middlewares/errorHandler';

// Router
app.use('/', routes);

// Error Handler 
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`SERVER RUNNING AT http://${app.get('host')}:${app.get('port')}`)
});

export default app;