
/**
 * To jest komponent layoutu.
 * @param {{
 *  header: JSX.Element;
 *  content: JSX.Element;
 *  footer: JSX.Element;
 * }} props
 */
export default function Layout(props) {
  const { header, content, footer } = props

  return (
    <div>
      <header>{header}</header>
      <main>
        {content}
      </main>
      <footer style={{ marginTop: 20 }}>{footer}</footer>
    </div>
  )
}