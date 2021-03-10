import React, { FC, useMemo, useState } from 'react'
import { Node, createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

interface Props {
  editorText: any
  toolbar: any
}

const TextEditor:FC<Props> = ({ editorText, toolbar }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value, setValue] = useState<Node[]>(editorText)

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
  )
}

export default TextEditor
