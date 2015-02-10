/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseStudent.AddStudent_execute = function (screen) {
    debugger
    // Write code here.
    
    myapp.showAddEditStudent(null, {
        beforeShown: function (addNewScreen) {           
            var detail = new myapp.Table1Item();

                //detail.node_ID = 0;
                //detail.name = 'Default School';
                //detail.pid = 0; 
                //detail.hasChild = false;
                //detail.expanded = false;
               addNewScreen.Table1Item = detail;
         
        }
    });
};



myapp.BrowseStudent.expanded_postRender = function (element, contentItem) {

    // Write code here.
    debugger
    contentItem.__data.Id;
    contentItem.__data.hasChild;

};
myapp.BrowseStudent.beforeApplyChanges = function (screen) {
    debugger
    // Write code here.

};