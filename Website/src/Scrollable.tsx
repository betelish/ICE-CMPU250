import { useZoomImageWheel } from "@zoom-image/solid";
import { createEffect } from "solid-js";

export function Scrollable(props) {
  let container: HTMLDivElement;
  const { createZoomImage } = useZoomImageWheel();

  createEffect(() => {
    createZoomImage(container);
  });

  return (
    <div class="scrollable" ref={container}>
      <img class="image" alt="Large Pic" src={props.src} />
    </div>
  );
}
