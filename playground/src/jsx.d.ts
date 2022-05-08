export {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      content: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'card-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'card-item-label': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'card-item-value': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'description': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'header-h1': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'header-ul': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'header-li': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
