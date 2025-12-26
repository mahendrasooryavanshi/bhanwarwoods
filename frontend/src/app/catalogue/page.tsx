export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-1rem)] sm:h-[calc(100vh-3rem)] bg-white border rounded-xl shadow-md flex flex-col overflow-hidden">
        {/* Minimal Action Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white">
          <span className="text-sm font-medium text-gray-700">
            Bhanwarwoods Catalogue
          </span>

          <a
            href="/catalogues/bhanwarwoods-collection.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition"
          >
            Open in new tab
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-white">
          <iframe
            src="/catalogues/bhanwarwoods-collection.pdf#toolbar=1&navpanes=0"
            className="w-full h-full"
            title="Furniture Catalogue"
          />
        </div>
      </div>
    </div>
  );
}
