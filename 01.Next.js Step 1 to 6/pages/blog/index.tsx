import type { NextPage } from "next";
import Link from "next/link";

const PostsPage: NextPage = () => {
    return (
        <div>
            <ul>
                <li><Link href='/blog/2022-09-05/happy-new-day'>Read Blog 1</Link></li>
                <li><Link href='/blog/2022-09-06/match-update'>Read Blog 2</Link></li>
                <li><Link href={{
                    pathname: '/blog/[date]/[slug]',
                    query: {
                        date: '2022-09-08',
                        slug: 'happy-new-week',
                        foo: 'bar'
                    }
                }}>Read Blog 3</Link></li>
            </ul>
        </div>
    )
}

export default PostsPage;