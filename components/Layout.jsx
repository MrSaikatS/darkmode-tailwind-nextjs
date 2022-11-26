import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<>
			<div className='dark:bg-black'>
				<Nav />
				{children}
			</div>
		</>
	);
};

export default Layout;
