// TeXworksScript
// Title: figure
// Shortcut:Ctrl+Shift+F
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
	"\\begin{figure}[htbp]\n"
+ "\t\\begin{center}\n"
+ "\t\t\\includegraphics[scale=]{";
var str2 = 
	"}\n"
+ "\t\t\\caption{}\n"
+ "\t\t\\label{fig:}\n"
+ "\t\\end{center}\n"
+ "\\end{figure}\n";

addOrRemove(str1, str2);