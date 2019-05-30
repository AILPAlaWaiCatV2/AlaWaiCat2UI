function doGet() 
{
  return HtmlService.createHtmlOutputFromFile('index');
}


function markerLocation(lat,lng) 
{
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([lat,lng]); 
}
