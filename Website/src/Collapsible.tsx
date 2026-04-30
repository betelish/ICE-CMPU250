import { createSignal, Show, type JSXElement } from "solid-js";

export function Collapsible(props: { title: string; children: JSXElement }) {
  const [collapsed, setcollapsed] = createSignal(true);

  return (
    <section class="body">
      <h3
        class="section-header"
        onClick={() => setcollapsed((collapsed) => !collapsed)}
      >
        {props.title}
      </h3>
      <Show when={!collapsed()}> {props.children} </Show>
    </section>
  );
}
