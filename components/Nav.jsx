import Link from "next/link";
import Toggle from "./Toggle";

const Nav = () => {
	return (
		<>
			<div className='container mx-auto dark:text-white text-lg font-semibold'>
				<div className='grid grid-flow-col justify-between items-center h-[5vh]'>
					<div className=''>Darkmode Demo</div>
					<div className='flex place-items-center gap-4'>
						<div className=''>
							<Link href='/'>Home</Link>
						</div>
						<div className=''>
							<Link href='/about'>About</Link>
						</div>
						<div className=''>
							<Link href='/contact'>Contact</Link>
						</div>
						<div className=''>
							<Toggle />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
