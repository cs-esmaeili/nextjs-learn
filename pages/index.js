import Link from "next/link";

export default function Home({ posts }) {
    return (
        <div>
            {JSON.stringify(posts)}
            <div>
                <a href="/ssr">server side rendreing !</a>
            </div>
        </div>
    );
}
export async function getStaticProps() {
    // const url = "http://127.0.0.1/cms/api/admin/postList";
    // const token = "Bearer 66a926e570405c2f97df5d34e3816138dfb0252c";

    // const res = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify("{}"),
    //     headers: {
    //         Action: "postList",
    //         Authorization: token,
    //         "Content-Type": "application/json",
    //     },
    // });
    // console.log(res);

    const posts = [];//await res.json();
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}
