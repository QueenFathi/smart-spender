import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css"
import Markdown from "react-markdown"
type Props = {
    content: string;
}

export default function ContentBody({ content }: Props) {
    // const markedContent = await markdownToHtml(content)
    return (
        <div className={markdownStyles["markdown"]}>
            <Markdown>
                {content}
            </Markdown>
        </div>
    )
}