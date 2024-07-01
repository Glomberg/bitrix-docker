{"version":3,"file":"desktop.map.js","names":["window","BX","desktop","Desktop","this","apiReady","clientVersion","disableLogin","autorun","telemetry","lastSetIcon","currentIcon","showNotifyId","htmlWrapperHead","topmostWindow","topmostWindowTimeout","path","mainUserOptions","pathToAjax","pathToPull","tabItems","tabRedrawTimeout","syncStatus","syncPauseBlock","inited","sizeInited","BXDesktopSystem","LogInfo","_len","arguments","length","params","Array","_key","context","Messenger","Lib","Logger","apply","minWidth","minHeight","timeoutDelayOfLogout","eventHandlers","addCustomEvent","delegate","terminate","reason","logout","bind","e","keyCode","ctrlKey","metaKey","BXIM","callController","hasActiveCall","console","log","windowReload","shiftKey","openDeveloperTools","openLogsFolder","prototype","init","ready","message","replace","getApiVersion","enableInVersion","debugEnable","browser","IsMac","document","head","insertBefore","create","attrs","type","html","firstChild","addClass","body","setWindowResizable","setWindowMinSize","Width","MessengerWindow","Height","userInfo","getUserInfo","contentMenu","content","onCustomEvent","newRevision","oldRevision","PULL","closeConfirm","location","reload","error","code","setIconStatus","login","sendErrorCode","textError","userEmail","messenger","connectionStatus","tabId","changeTab","setTimeout","finalizeTrayMenu","onSyncStatusChanged","userOptions","setAjaxPath","status","settings","preventShutdown","notSupported","setWindowSize","setWindowTitle","updateContent","props","className","children","events","click","checkUpdate","innerHTML","appendChild","withoutPushServer","bitrixIntranet","Helper","show","MessengerCommon","openLink","hideLoader","remove","isFeatureEnabled","FeatureEnabled","getBackgroundImage","id","source","QuerySettings","setCallBackground","prepareResourcePath","promise","Promise","setCallMask","StoreSettings","resolve","setCallMaskLoadHandlers","callback","maskUrl","backgroundUrl","Set3dAvatar","getMask","url","URL","origin","href","getCurrentUrl","protocol","hostname","port","diskReady","success","sessid","bitrix_sessid","loginSuccessCallback","Login","showLoginForm","Logout","skipCheck","ajax","method","dataType","timeout","data","IM_DESKTOP_LOGOUT","onsuccess","Shutdown","onfailure","openBrowser","ExecuteCommand","NotifyNoUpdates","ShowNotifications","browse","full","GetProperty","join","version","parseInt","eventName","eventHandler","realHandler","arEventParams","i","detail","push","addEventListener","removeCustomEvents","forEach","removeEventListener","windowTarget","objEventParams","mainWindow","opener","top","BXWindows","name","BXDesktopWindow","DispatchCustomEvent","warn","hasOwnProperty","findWindow","windowIsFocused","openNextTab","NextTab","SetIconStatus","setIconBadge","count","important","SetIconBadge","SetTabBadge","getContextWindow","setIconTooltip","iconTitle","enabled","SetProperty","setWindowClosable","flashIcon","voiced","FlashIcon","getWorkArea","coordinates","GetWorkArea","left","right","bottom","showNotification","notifyId","js","getHtmlPage","adjustSize","width","height","resize","offsetWidth","offsetHeight","syncPause","immediate","BXFileStorage","SyncPause","getSyncStatus","windowCommand","command","setActiveWindow","indexOf","close","trace","openTopmostWindow","bodyClass","closeTopmostWindow","isPopupPageLoaded","isUtfMode","BXInternals","PopupTemplate","jsContent","initImJs","isDomNode","outerHTML","OpenDeveloperTools","OpenLogsFolder","autorunStatus","value","telemetryStatus","cameraSmoothingStatus","cameraSmoothingLambda","toString","diskAttachStatus","BitrixDisk","clipboardSelected","element","expandToWholeWord","resultText","selectionStart","selectionEnd","tagName","substring","wordStartPosition","substr","search","wordEndPosition","getSelection","range","getRangeAt","cloneContents","div","createElement","messages","getElementsByClassName","resultMessage","index","util","htmlspecialcharsback","split","text","clipboardCopy","cut","clipboardCut","clipboardPaste","execCommand","clipboardDelete","clipboardUndo","clipboardRedo","clipboardReplaceText","positionStart","positionEnd","focus","selectAll","getLocalConfig","def","querySetting","result","JSON","parse","setLocalConfig","stringify","removeLocalConfig","filename","Log","createWindow","reuse","popup","GetWindow","closeWindow","names","isArray","getWindowTitle","title","trim","setWindowPosition","setWindowName","addTrayMenuItem","AddTrayMenuItem","EndTrayMenuItem","PreventShutdown","diskReportStorageNotification","ReportStorageNotification","diskOpenFolder","OpenFolder","addSeparator","addTab","force","closeTab","setTabBadge","updateTabBadge","badge","setTabContent","isActiveWindow","IsActiveTab","getActiveWindow","ActiveTab","TAB_CP","TAB_B24NET","windowId","SetActiveTabI","SetActiveTab"],"sources":["desktop.js"],"mappings":"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"}