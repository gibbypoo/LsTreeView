/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.TreeViewControl.Table1Item_render = function (element, contentItem) {
         
    // creating div element for tree view control
    var divElement = $('<div />');
    divElement.attr('id', 'MyTreeviewData');
    divElement.attr('data-role', 'none');
    // appending div element to page
    divElement.appendTo($(element));   
    //below function will be triggred, while changes in datasource table
    contentItem.value.oncollectionchange = function () {
        //getting node details from datasource        
        var first = contentItem.children[0];
        var id = first.children[0].valueModel.name;
        var name = first.children[1].valueModel.name;
        var pid = first.children[2].valueModel.name;
        var hasChild = first.children[3].valueModel.name;
        var expanded = first.children[4].valueModel.name;
        //while clicking add/edit button, empty node will be created in the index of "0"
        var newList = contentItem.value.data[0];                   
        $(function () {
            //checking the new node is defined or not 
            if (newList.node_ID && newList.name) {
                // rendering treeview control using datasource
                divElement.ejTreeView({
                    fields: { id: id, text: name, parentId: pid, dataSource: contentItem.value.data, hasChild: hasChild, expanded: expanded },
                    nodeSelect: function (args) {
                        myapp.showScreen("ViewTable1Item3", null, {

                            beforeShown: function (addNewScreen) {

                                var detail = contentItem.value.data[args.currentElement[0].id - 1]; //get the clicked node details

                                detail.node_ID = contentItem.value.data[args.currentElement[0].id - 1].Id;
                                detail.name = contentItem.value.data[args.currentElement[0].id - 1].name;
                                detail.pid = contentItem.value.data[args.currentElement[0].id - 1].node_ID;
                                detail.hasChild = contentItem.value.data[args.currentElement[0].id - 1].hasChild;
                                detail.expanded = contentItem.value.data[args.currentElement[0].id - 1].expanded;
                                addNewScreen.Table1Item = detail;

                            },
                        });
                    }
                });
            }
           
      
        });
    }        
};


//myapp.TreeViewControl.MyCommand_execute = function (screen) {
//    // Write code here.  
//    //var treeView = $("#MyTreeviewData").data("ejTreeView");    
//    //var x = null;
//    //    treeView.option("fields",x);
//    myapp.showScreen("BrowseStudent");

//};
