const {app,BrowserWindow,shell}=require('electron');
const path=require('path');

function create(){
  const win=new BrowserWindow({
    width:1280,height:800,minWidth:720,minHeight:520,
    autoHideMenuBar:true,
    backgroundColor:'#2a2438',
    icon:path.join(__dirname,'build','icon.ico'),
    webPreferences:{contextIsolation:true,sandbox:true}
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname,'app','index.html'));
  // outside links open in the system browser, not inside the app
  win.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return {action:'deny'};});
}

app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
