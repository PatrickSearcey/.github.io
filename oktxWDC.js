(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    // Define columns in the table 
    // Alias not necessary 
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "doiaccessNumber",
            alias: "DOI Number"
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "fppsemployeeId",
            alias: "Employee ID"
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "displayName",
            alias: "Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "divisionId",
            alias: "Division ID",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "divisionSortOrder",
            alias: "Division Sort Order",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "divisionDescription",
            alias: "Division Description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "sectionid",
            alias: "Section ID",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "sectionSortOrder",
            alias: "Section Sort Order",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "sectionDescription",
            alias: "Section Description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "authorizedHoursCurrentFy",
            alias: "Authorized Hourse Current Fiscal Year",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "cCenterCode",
            alias: "c Center Code",
            dataType: tableau.dataTypeEnum.string
        }
        }];

        var tableSchema = {
            id: "overUnderReports",
            alias: "OKTX Over Under Reports by Person",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://sippdev.cr.usgs.gov/Service/api/People/GetAllPeople", function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            // Update getData() function to iterate through your API respoinse array
            for (var i = 0, len = feat.length; i < len; i++) {
                // Update getData() function with correct field names
                tableData.push({
                    
                });
            }
            //push to table object
            table.appendRows(tableData);
            doneCallback(); // get data
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "USGS Over Under Reports"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();