import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="text-4xl font-bold" />,
    h2: (props) => <h2 {...props} className="text-3xl font-bold" />,
    h3: (props) => <h3 {...props} className="text-2xl font-bold" />,
    h4: (props) => <h4 {...props} className="text-xl font-bold" />,
    h5: (props) => <h5 {...props} className="text-lg font-bold" />,
    h6: (props) => <h6 {...props} className="text-base font-bold" />,
    p: (props) => <p {...props} className="text-lg leading-7" />,
    a: ({ children, ...props }) => {
      return (
        <Link {...props} href={props.href || ""}>
          {children}
        </Link>
      );
    },
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    code: (props) => <code {...props} className="text-sm bg-gray-100 p-1" />,
    pre: (props) => <pre {...props} className="bg-gray-100 p-4" />,

    ...components,
  };
}
