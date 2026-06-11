// import markdownToHtml from "@/lib/markdownToHtml";
import Markdown from "react-markdown"
type Props = {
    content: string;
}

export default function ContentBody({ content }: Props) {
    // const markedContent = await markdownToHtml(content)
    return (
        <div className="markdown">
            <Markdown>
                {content}
            </Markdown>
        </div>
    )
}