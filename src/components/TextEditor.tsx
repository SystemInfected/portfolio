import React, { FC, useMemo, useState } from "react";
import { Node, createEditor, Text } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import escapeHtml from "escape-html";
import { FormatBold, FormatItalic, FormatUnderlined } from "@material-ui/icons";

interface Props {
  editorText: any;
  toolbar: any;
  newText: any;
}

const TextEditor: FC<Props> = ({ editorText, toolbar, newText }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState<Node[]>(editorText);

  const serializeHTML = (nodes) => {
    if (Text.isText(nodes)) {
      return escapeHtml(nodes.text);
    }
    const children = nodes.map((n) => Node.nodes(n)).join("");

    switch (children.type) {
      case "quote":
        return `<blockquote><p>${children}</p></blockquote>`;
      case "paragraph":
        return `<p>${children}</p>`;
      case "link":
        return `<a href="${escapeHtml(nodes.url)}">${children}</a>`;
      default:
        return children;
    }
  };

  newText(serializeHTML(value));

  return (
    <>
      <h1>Editortest</h1>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable />
      </Slate>
      <FormatBold />
      <FormatItalic />
      <FormatUnderlined />
    </>
  );
};

export default TextEditor;
