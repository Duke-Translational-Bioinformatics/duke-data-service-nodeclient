var DukeDataServiceApi = require('./index');

// Example showing individual calls
appstat = new DukeDataServiceApi.AppApi().getApiV1AppStatus();
currentuser = new DukeDataServiceApi.CurrentuserApi().getApiV1CurrentUser();
projects = new DukeDataServiceApi.ProjectsApi().getApiV1Projects();






