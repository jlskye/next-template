import "ui-components/client.css";
import "ui-components/server.css";

export default function Root({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) {
  console.log(lang);
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
