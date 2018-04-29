// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain


console.log('Kittens of the world, unite as one!');

let filenames = [
  "download-1.jpg",
  "download-2.jpg",
  "download-3.jpg",
  "download.jpg",
  "images-1.jpg"
];

let imgs = document.getElementsByTagName('img');
for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'kittens/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}

let text = document.querySelectorAll('p,li,h1,h2,h3,h4,span,div,b');
for (elt of text) {
  elt.innerHTML = elt.innerHTML.replace(/dog/gi,'cat');
  elt.innerHTML = elt.innerHTML.replace(/puppy/gi,'kitten');
  elt.innerHTML = elt.innerHTML.replace(/puppies/gi,'kittens');
}

function check_enabled(enabled) {
  enable = enable ? false : true;
  if(enable){
   //turn on...
   console.log('turning on');
   chrome.browserAction.setBadgeText({ text: 'ON' });
   chrome.tabs.executeScript(null, { file: 'kitten.js' });
  }
  else{
   //turn off...
   console.log('turning off');
   chrome.browserAction.setBadgeText({ text: 'OFF' });
   chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
  }
}

}
var enable=false;
chrome.browserAction.setBadgeText({ text: 'OFF' });
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  console.log('turning on');
  chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.tabs.executeScript(null, { file: 'kitten.js' });
 }
 else{
  //turn off...
  console.log('turning off');
  chrome.browserAction.setBadgeText({ text: 'OFF' });
  chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
 }
});
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    enable = enable ? false : true;
    if(enable){
     //turn on...
     console.log('turning on');
     chrome.browserAction.setBadgeText({ text: 'ON' });
     chrome.tabs.executeScript(null, { file: 'kitten.js' });
    }
    else{
     //turn off...
     console.log('turning off');
     chrome.browserAction.setBadgeText({ text: 'OFF' });
     chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
    }
  }
});
