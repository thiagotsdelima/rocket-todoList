// Post.tsx
interface PostProps {
  className?: string;
  content: string;
}

export function itemList(props: PostProps) {
  return (
    <ul>
      <li>
        <p className={props.className}>{props.content}</p>
     </li>
    </ul>
  );
}
