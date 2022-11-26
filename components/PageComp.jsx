const PageComp = ({ title }) => {
	return (
		<>
			<div className='grid place-items-center'>
				<div className='text-5xl font-semibold p-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-pink-600'>
					{title}
				</div>
			</div>
		</>
	);
};

export default PageComp;
