function doGet() 
{
  var output = HtmlService.createHtmlOutputFromFile('index');
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}

function markerLocation(lat,lng,zone) 
{
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([lat,lng,zone]); 
  // sort by alphabetical and include timestamp
}
