import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = async ({ username }) => {
    const { userId } = auth();

    return (
        <nav className='w-full flex items-center justify-between sm:px-8 px-4 py-4 gradient-bg'>
            <div className='flex items-center'>
                <Link href='/'>
                    <div className='text-lg font-bold text-black uppercase'>
                        Clerk+Stripe
                    </div>
                </Link>
            </div>
            <div className='flex items-center text-black'>
                {!userId && (
                    <>
                        <Link
                            href='sign-in'
                            className='text-black hover:text-white mr-4'
                        >
                            Sign In
                        </Link>
                        <Link
                            href='sign-up'
                            className='text-black hover:text-white mr-4'
                        >
                            Sign Up
                        </Link>
                    </>
                )}
                {userId && (
                    <Link href='profile' className='text-black hover:text-white mr-4'>
                        Profile
                    </Link>
                )}
                <div className='ml-auto'>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </nav>
    );
};

export default Header;