export function Image(props: { url: string; caption?: string }) {
  return (
    <div class="image-container">
      <img src={props.url} width="50%" />
      <em>{props.caption}</em>
    </div>
  );
}
