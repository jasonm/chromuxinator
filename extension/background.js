var quadrant = function(bounds, quadrant) {
  switch(String(quadrant)) {
    case '1':
      return {
        'top': bounds.top,
        'left': bounds.left,
        'height': bounds.height / 2.0,
        'width': bounds.width / 2.0
      };

    case '2':
      return {
        'top': bounds.top,
        'left': bounds.left + (bounds.width / 2.0),
        'height': bounds.height / 2.0,
        'width': bounds.width / 2.0
      };

    case '3':
      return {
        'top': bounds.top + (bounds.height / 2.0),
        'left': bounds.left,
        'height': bounds.height / 2.0,
        'width': bounds.width / 2.0
      };

    case '4':
      return {
        'top': bounds.top + (bounds.height / 2.0),
        'left': bounds.left + (bounds.width / 2.0),
        'height': bounds.height / 2.0,
        'width': bounds.width / 2.0
      };

    case 'L':
      return {
        'top': bounds.top,
        'left': bounds.left,
        'height': bounds.height,
        'width': bounds.width / 2.0
      };

    case 'R':
      return {
        'top': bounds.top,
        'left': bounds.left + (bounds.width / 2.0),
        'height': bounds.height,
        'width': bounds.width / 2.0
      };

    case 'T':
      return {
        'top': bounds.top,
        'left': bounds.left,
        'height': bounds.height / 2.0,
        'width': bounds.width
      };

    case 'B':
      return {
        'top': bounds.top + (bounds.height / 2.0),
        'left': bounds.left,
        'height': bounds.height / 2.0,
        'width': bounds.width
      };
  }
};

var launch = function() {
  chrome.system.display.getInfo(function(displayInfo) {
    var display0 = displayInfo[0],
        bounds = quadrant(display0.bounds, '4');

    chrome.windows.create({
       'url': './popup.html',
       'top': bounds.top,
       'left': bounds.left,
       'width': bounds.width,
       'height': bounds.height
    });
  });
};

chrome.commands.onCommand.addListener(function(command) {
  // Users can bind a key to this command in their Chrome
  // keyboard shortcuts, at the bottom of their extensions page.
  if (command == 'show-chromuxinator') {
    console.log('show-chromuxinator command issued');
    // launch();

    chrome.windows.getAll(function(windows) {
      var win = windows[0];
      chrome.tabs.getAllInWindow(win.id, function(tabs) {
        console.log("first window, first tab url: ", win.id, tabs[0].url);
      });
    });

  }
});

chrome.browserAction.onClicked.addListener(function() {
  console.log('clicked!');
});

