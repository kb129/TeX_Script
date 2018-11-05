// TeXworksScript
// Title: report template
// Shortcut:
// Author: elehco
// Version: 0.1
// Script-Type: standalone
// Context: TeXDocument

var str = 
	"\\documentclass[a4j]{jarticle}\n\n"
+ "\\usepackage{graphicx}\n"
+ "\\pagestyle{empty}\n"
+ "\\begin{document}\n"
+ "\\section{目的}\n\n"
+ "\\section{原理}\n\n"
+ "\\section{実験方法}\n\n"
+ "\\section{使用器具}\n\n"
+ "実験に使用した使用器具を表\\ref{tb:used}に示す．\n"
+ "\\begin{table}[htbp]\n"
+ "  \\caption{使用器具}\n"
+ "  \\label{tb:used}\n"
+ "  \\begin{center}\n"
+ "    \\begin{tabular}{c|c|c|c}\\hline\n"
+ "      器具名 & 規格 & 製造会社 & その他\\\\ \\hline\n"
+ "      & & & \\\\\n"
+ "      & & & \\\\ \\hline\n"
+ "    \\end{tabular}\n"
+ "  \\end{center}\n"
+ "\\end{table}\n"
+ "\\section{実験結果}\n\n"
+ "\\section{考察}\n\n"
+ "\\section{まとめ}\n\n"
+ "\\end{document}\n";

TW.target.insertText(str);