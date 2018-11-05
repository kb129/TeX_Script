// TeXworksScript
// Title: table
// Shortcut:Ctrl+Shift+T
// Author: elehco
// Version: 0.1
// Script-Type: standalone
// Context: TeXDocument

var str = 
	"\\begin{table}[htbp]\n"
+ "\t\\caption{}\n"
+ "\t\\label{tb:}\n"
+ "\t\\begin{center}\n"
+ "\t\t\\begin{tabular}{c|c|c|c}\n"
+ "\t\t\t& & & & \\\\\n"
+ "\t\t\t& & & & \\\\\\hline\n"
+ "\t\t\\end{tabular}\n"
+ "\t\\end{center}\n"
+ "\\end{table}\n";

TW.target.insertText(str);