export default function PowerBIViewer({ url }: { url: string }) {
  return (
    <iframe
      title="PowerBI Report"
      src={url}
      width="100%"
      height="500"
      allowFullScreen
      className="rounded-lg border"
    />
  );
}