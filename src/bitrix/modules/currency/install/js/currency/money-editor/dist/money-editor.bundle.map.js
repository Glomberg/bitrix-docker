{"version":3,"sources":["money-editor.bundle.js"],"names":["this","BX","exports","main_core","MoneyEditor","options","arguments","length","undefined","babelHelpers","classCallCheck","input","callback","currency","value","valueEditHandler","valueEdit","bind","Event","ready","init","createClass","key","formatValue","unbind","clean","e","type","code","setCurrency","getUnFormattedValue","getFormattedValue","callValueChangeCallback","cursorPos","getCaretPosition","originalValue","changeValue","setCaretPosition","apply","onCustomEvent","getCurrencyFormat","list","getCurrencyList","defaultFormat","currencyList","Loc","getMessage","getBaseCurrencyId","listCurrency","hasOwnProperty","prop","getString","trimTrailingZeros","formattedValue","String","currentFormat","ch","replace","RegExp","escapeRegExp","text","baseValue","valueLength","regExp","decPointPosition","countDigit","i","charAt","match","index","symbolPosition","symbol","isDigit","indexOf","substr","defineProperty","CURRENCY","NAME","FORMAT_STRING","DEC_POINT","THOUSANDS_VARIANT","THOUSANDS_SEP","DECIMALS","HIDE_ZERO","BASE","SEPARATOR","Reflection","namespace","Editor","Currency"],"mappings":"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","file":"money-editor.bundle.map.js"}