import "ui-components/client.css";
import "ui-components/server.css";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
