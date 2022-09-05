import Link from "next/link";
import type { NextComponentType, NextPageContext } from "next";

interface Props { }

const NavBar: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return (
        <div>
            <ul>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/contact' prefetch={false}>Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;