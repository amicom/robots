import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeSnippet = `while(true) {
  moveLeft();
  isOnParachute() ? break : stand(); // makes the robot slower
}
while(true) {
  moveLeft();
}
`;

interface CodeBlockProps {
  highlightLineNo?: number;
}

const CodeBlock = ({ highlightLineNo }: CodeBlockProps) =>
(<SyntaxHighlighter wrapLines showLineNumbers style={dracula} customStyle={{ flex: 1, marginTop: 0, marginBottom: 0 }}

  lineProps={(lineNumber: number): React.HTMLProps<HTMLElement> => {
    const style: React.CSSProperties = { display: "block", };
    if (highlightLineNo && highlightLineNo === lineNumber)
      style.backgroundColor = "#181818";
    return { style };
  }}>
  {codeSnippet}
</SyntaxHighlighter>)

export default CodeBlock;