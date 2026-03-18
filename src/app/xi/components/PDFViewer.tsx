type PDFViewerProps = {
    title: string;
    pdfUrl: string;
    onOpen: () => void; //function triggered when user clicks the preview
};

//main PDF viewer component
export default function PDFViewer({ title, pdfUrl, onOpen }: PDFViewerProps) {
    return (
        <button
            type="button"
            onClick={onOpen} //Opens the modal when clicked
            className="ground w-full text-left space-y-3"
        >

            <h2 className="text-xl font-semibold text-[#f3e7c2] group-hover:text-[#e0b45b] transition-colors">
                {title}
            </h2>


            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl border border-[#e0b45b]/20 bg-black/20 shadow-lg transition-all duration-300 group-hover:border-[#e0b45b]/50 group-hover:shadow-2xl group-hover:scale-[1.01]">
                <iframe
                    src={pdfUrl}
                    className="w-full h-full pointer-events-none" //disables interactions so clicks trigger the button instead
                    title={title}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"/>

                <div className="absolute bottom-4 right-4 rounded-full border border-[#e0b45b]/40 bg-[#1b1a17]/80 px-4 py-2 text-sm text-[#f3e7c2] backdrop-blur-sm">
                    Click to expand
                </div>

            </div>
        </button>
    );
}