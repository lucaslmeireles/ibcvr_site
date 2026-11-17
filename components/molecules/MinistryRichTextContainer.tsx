import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types";

type Props = {
    content: Document;
};

export default function MinistryRichTextContainer({ content }: Props) {
    return (
        <div className="prose max-w-none">
            {documentToReactComponents(content, {
                renderNode: {
                    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
                    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
                    [BLOCKS.QUOTE]: (node, children) => (
                        <blockquote className="border-l-4 pl-4 italic text-gray-600">{children}</blockquote>
                    ),
                    [INLINES.HYPERLINK]: (node, children) => (
                        <a
                            href={node.data.uri}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline"
                        >
                            {children}
                        </a>
                    ),
                },
            })}
        </div>
    );
}