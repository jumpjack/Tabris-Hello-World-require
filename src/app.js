const {Button, TextView, ui} = require('tabris');


let foundDevices = [];


let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  global.ble.scan([], 10, function(device) {
    console.log(JSON.stringify(device));
  });
});



function startScanSuccess(result) {
  consle.log(result);
}

function handleError(error) {
  textView.text = error;
}

//function _showMessage() {

textView.text = 'T2';
//}
