import "blocknote-core-ts/fonts/inter.css";
import { BlockNoteView } from "blocknote-mantine-ts";
import { useCreateBlockNote } from "blocknote-react-ts";
import "blocknote-mantine-ts/style.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        id: "2445f5a9-2e44-432b-b1a5-226a21da3ecb",
        type: "table",
        props: {
          textColor: "default",
        },
        content: {
          type: "tableContent",
          rows: [
            {
              cells: [
                [
                  {
                    type: "text",
                    text: "Xem báo cáo",
                    styles: {},
                    rowspan: 4, // Ô này chiếm 3 dòng
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Tất cả nhân viên",
                    styles: {},
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Bật: Báo cáo bao gồm số liệu của tất cả nhân viênTắt: Báo cáo chỉ bao gồm số liệu được phân công cho nhân viên đó",
                    styles: {},
                  },
                ],
              ],
            },
            {
              cells: [
                [
                  {
                    type: "text",
                    text: "Lợi nhuận, giá vốn",
                    styles: {},
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Hiển thị cột lợi nhuận, giá vốn ở báo cáo",
                    styles: {},
                  },
                ],
              ],
            },
            {
              cells: [
                [
                  {
                    type: "text",
                    text: "Hoa hồng",
                    styles: {},
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Hiển thị cột hoa hồng, tổng hoa hồng ở báo cáo",
                    styles: {},
                  },
                ],
              ],
            },
            {
              cells: [
                [
                  {
                    type: "text",
                    text: "Xem báo cáo tài chính",
                    styles: {},
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Hiển thị báo cáo tài chính",
                    styles: {},
                  },
                ],
              ],
            },
          ],
        },
        children: [],
      },
    ],
  });

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        // eslint-disable-next-line no-console
        console.log(editor.document);
      }}
    />
  );
}
