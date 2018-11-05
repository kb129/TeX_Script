// TeXworksScript
// Title: itemize
// Shortcut:Ctrl+Shift+I
// Author: elehco
// Version: 0.1
// Script-Type: standalone
// Context: TeXDocument

function addOrRemove(prefix, suffix) {
  var txt = TW.target.selection;
  var len = txt.length;
  var wrapped = prefix + txt + suffix;
  var pos = TW.target.selectionStart;
  if (pos >= prefix.length) {
    TW.target.selectRange(pos - prefix.length, wrapped.length);
    if (TW.target.selection == wrapped) {
      TW.target.insertText(txt);
      TW.target.selectRange(pos - prefix.length, len);
      return;
    }
    TW.target.selectRange(pos, len);
  }
  TW.target.insertText(wrapped);
  TW.target.selectRange(pos + prefix.length, len);
  return;
};

var str1 = 
	"\\begin{itemize}\n"
+ "\t\\item ";
var str2 = 
	"\n"
+ "\\end{itemize}\n";

addOrRemove(str1, str2);